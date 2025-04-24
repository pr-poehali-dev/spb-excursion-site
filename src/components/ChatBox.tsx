import { useState, useRef, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useChat, Message } from "@/hooks/useChat";
import { cn } from "@/lib/utils";

const ChatBox = () => {
  const { messages, sendMessage, isLoading } = useChat();
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Автоматический скролл вниз при получении новых сообщений
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="rounded-lg border shadow-sm overflow-hidden flex flex-col h-[600px] bg-white dark:bg-gray-900">
      <div className="p-4 border-b bg-spb-700 dark:bg-spb-900 text-white">
        <h2 className="text-xl font-semibold">Чат с ассистентом</h2>
        <p className="text-sm opacity-80">Задайте вопрос о Санкт-Петербурге и экскурсиях</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 dark:text-gray-400 p-8">
            <div className="mb-4 p-3 rounded-full bg-spb-100 dark:bg-spb-900">
              <Send className="h-6 w-6 text-spb-500" />
            </div>
            <h3 className="font-medium mb-2">Начните общение с ассистентом</h3>
            <p className="text-sm max-w-md">
              Спросите о достопримечательностях, экскурсиях или уточните детали о городе Санкт-Петербург
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
      <Separator />
      
      <form onSubmit={handleSubmit} className="p-4 bg-background flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите сообщение..."
          className="flex-1"
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading || !inputValue.trim()}>
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </Button>
      </form>
    </div>
  );
};

const ChatMessage = ({ message }: { message: Message }) => {
  const isBot = message.sender === "bot";
  const time = new Date(message.timestamp).toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit'
  });
  
  return (
    <div className={cn(
      "flex",
      isBot ? "justify-start" : "justify-end"
    )}>
      <div className={cn(
        "max-w-[80%] rounded-lg px-4 py-2 text-sm",
        isBot 
          ? "bg-muted text-foreground rounded-tl-none" 
          : "bg-primary text-primary-foreground rounded-tr-none"
      )}>
        <div>{message.text}</div>
        <div className={cn(
          "text-xs mt-1 text-right",
          isBot ? "text-gray-500" : "text-primary-foreground/70"
        )}>
          {time}
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
