import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: number;
};

type ChatContextType = {
  messages: Message[];
  sendMessage: (text: string) => void;
  clearChat: () => void;
  isLoading: boolean;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Имитация сохранения в базу данных
const saveMessageToDb = (message: Message) => {
  const messages = JSON.parse(localStorage.getItem("chatMessages") || "[]");
  messages.push(message);
  localStorage.setItem("chatMessages", JSON.stringify(messages));
};

// Создание ID для сообщения
const createId = () => Math.random().toString(36).substring(2, 9);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Загрузка сообщений из localStorage при монтировании
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (error) {
        console.error("Ошибка при чтении сообщений из localStorage:", error);
        localStorage.removeItem("chatMessages");
      }
    }
  }, []);

  // Ответы бота на основе ключевых слов
  const getBotResponse = (text: string): string => {
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes("привет") || lowerText.includes("здравствуй")) {
      return "Здравствуйте! Я ваш помощник по экскурсиям в Санкт-Петербурге. Чем могу помочь?";
    }
    
    if (lowerText.includes("эрмитаж")) {
      return "Эрмитаж — один из крупнейших и старейших музеев мира. Основан в 1764 году. Коллекция музея насчитывает около 3 миллионов экспонатов. У нас есть несколько экскурсий по Эрмитажу, включая вечерние посещения.";
    }
    
    if (lowerText.includes("петергоф") || lowerText.includes("петродворец")) {
      return "Петергоф — дворцово-парковый ансамбль на южном берегу Финского залива. Знаменит своими фонтанами, которые работают с мая по октябрь. Мы организуем групповые и индивидуальные экскурсии в Петергоф.";
    }
    
    if (lowerText.includes("цена") || lowerText.includes("стоимость") || lowerText.includes("сколько стоит")) {
      return "Стоимость экскурсий зависит от маршрута, длительности и количества участников. Индивидуальные экскурсии начинаются от 3000 рублей, групповые — от 1000 рублей с человека. Уточните, какая экскурсия вас интересует, и я предоставлю точную информацию.";
    }
    
    if (lowerText.includes("спасибо")) {
      return "Всегда рад помочь! Если возникнут еще вопросы, обращайтесь.";
    }
    
    return "Извините, я не совсем понял ваш вопрос. Вы можете спросить об экскурсиях, достопримечательностях Санкт-Петербурга или ценах на наши услуги.";
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    
    // Создаем сообщение пользователя
    const userMessage: Message = {
      id: createId(),
      text,
      sender: "user",
      timestamp: Date.now(),
    };
    
    // Добавляем сообщение пользователя и "сохраняем в базу"
    setMessages((prev) => [...prev, userMessage]);
    saveMessageToDb(userMessage);
    
    // Имитируем ответ бота
    setIsLoading(true);
    setTimeout(() => {
      const botMessage: Message = {
        id: createId(),
        text: getBotResponse(text),
        sender: "bot",
        timestamp: Date.now(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      saveMessageToDb(botMessage);
      setIsLoading(false);
    }, 1000);
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("chatMessages");
  };

  return (
    <ChatContext.Provider
      value={{ messages, sendMessage, clearChat, isLoading }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
