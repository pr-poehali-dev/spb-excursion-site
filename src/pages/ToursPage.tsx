import { useState } from "react";
import Navbar from "@/components/Navbar";
import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";
import { Button } from "@/components/ui/button";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const ToursPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Фильтрация туров
  const filteredTours = tours.filter((tour) => {
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       tour.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Если фильтр не активен, возвращаем все туры, соответствующие поиску
    if (!activeFilter) return matchesSearch;
    
    // Фильтрация по категории
    if (activeFilter === "group") return tour.type === "group" && matchesSearch;
    if (activeFilter === "individual") return tour.type === "individual" && matchesSearch;
    if (activeFilter === "bestseller") return tour.bestseller && matchesSearch;
    
    return matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-spb-800 dark:bg-spb-950 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Экскурсии по Санкт-Петербургу</h1>
            <p className="text-spb-100 max-w-2xl">
              Выберите одну из наших уникальных экскурсий и откройте для себя культурную столицу России с новой стороны
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {/* Поиск и фильтры */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Поиск экскурсий..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Button 
                variant={activeFilter === null ? "default" : "outline"}
                onClick={() => setActiveFilter(null)}
                className={activeFilter === null ? "bg-spb-600" : ""}
              >
                Все
              </Button>
              <Button 
                variant={activeFilter === "group" ? "default" : "outline"}
                onClick={() => setActiveFilter("group")}
                className={activeFilter === "group" ? "bg-spb-600" : ""}
              >
                <Filter className="h-4 w-4 mr-2" />
                Групповые
              </Button>
              <Button 
                variant={activeFilter === "individual" ? "default" : "outline"}
                onClick={() => setActiveFilter("individual")}
                className={activeFilter === "individual" ? "bg-spb-600" : ""}
              >
                <Filter className="h-4 w-4 mr-2" />
                Индивидуальные
              </Button>
              <Button 
                variant={activeFilter === "bestseller" ? "default" : "outline"}
                onClick={() => setActiveFilter("bestseller")}
                className={activeFilter === "bestseller" ? "bg-spb-600" : ""}
              >
                <Filter className="h-4 w-4 mr-2" />
                Популярные
              </Button>
            </div>
          </div>
          
          {/* Список экскурсий */}
          {filteredTours.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">Экскурсии не найдены</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Попробуйте изменить параметры поиска или фильтры
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setActiveFilter(null);
                }}
                className="mt-4 bg-spb-600 hover:bg-spb-700"
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-spb-950 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Санкт-Петербург</h3>
              <p className="text-sm text-gray-400">
                Экскурсии по культурной столице России с профессиональными гидами
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Экскурсии</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/tours" className="hover:text-spb-300">Все экскурсии</a></li>
                <li><a href="/tours" className="hover:text-spb-300 cursor-pointer" onClick={() => setActiveFilter("group")}>Групповые</a></li>
                <li><a href="/tours" className="hover:text-spb-300 cursor-pointer" onClick={() => setActiveFilter("individual")}>Индивидуальные</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-spb-300">О нас</a></li>
                <li><a href="/about" className="hover:text-spb-300">Контакты</a></li>
                <li><a href="/about" className="hover:text-spb-300">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <address className="text-sm text-gray-400 not-italic">
                <p>Санкт-Петербург, Невский пр. 28</p>
                <p className="mt-2">Телефон: +7 (812) 123-45-67</p>
                <p>Email: info@spbtours.ru</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© 2023 Экскурсии по Санкт-Петербургу. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ToursPage;
