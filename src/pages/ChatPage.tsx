import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import ChatBox from "@/components/ChatBox";

const ChatPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="flex items-center gap-2 mb-6">
          <Link to="/" className="text-spb-700 dark:text-spb-300 hover:underline flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Вернуться на главную</span>
          </Link>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Чат с ассистентом</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Задайте вопрос нашему виртуальному помощнику, чтобы узнать больше 
            о достопримечательностях Санкт-Петербурга, экскурсиях, ценах и другой информации.
          </p>
          
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
