import { Link } from "react-router-dom";
import { Map, Compass, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";

const Index = () => {
  // Выбираем только популярные экскурсии для главной страницы
  const popularTours = tours.filter(tour => tour.bestseller).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero section */}
      <section className="bg-spb-800 dark:bg-spb-950 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Открой для себя красоту Санкт-Петербурга
            </h1>
            <p className="text-lg md:text-xl mb-8 text-spb-100">
              Экскурсии с профессиональными гидами по самым интересным местам культурной столицы России
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-spb-500 hover:bg-spb-600">
                <Link to="/tours">Выбрать экскурсию</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-spb-300 text-spb-100">
                <Link to="/about">О нас</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Map />}
              title="Уникальные маршруты"
              description="Мы разрабатываем необычные маршруты, которые покажут вам не только известные, но и секретные места города"
            />
            <FeatureCard 
              icon={<Compass />}
              title="Профессиональные гиды"
              description="Наши гиды — историки и краеведы с многолетним опытом проведения экскурсий"
            />
            <FeatureCard 
              icon={<Clock />}
              title="Гибкий график"
              description="Выбирайте удобное время для экскурсии, включая вечерние и ночные часы"
            />
            <FeatureCard 
              icon={<ShieldCheck />}
              title="Гарантия качества"
              description="Мы вернем деньги, если вам не понравится экскурсия — но такого еще не случалось!"
            />
          </div>
        </div>
      </section>
      
      {/* Popular tours section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Популярные экскурсии</h2>
            <Button asChild variant="outline">
              <Link to="/tours">Все экскурсии</Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-spb-700 dark:bg-spb-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Наш виртуальный ассистент поможет вам выбрать подходящую экскурсию и ответит на все ваши вопросы
          </p>
          <Button asChild size="lg" className="bg-white text-spb-800 hover:bg-spb-100">
            <Link to="/chat">Начать чат с ассистентом</Link>
          </Button>
        </div>
      </section>
      
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
                <li><Link to="/tours" className="hover:text-spb-300">Все экскурсии</Link></li>
                <li><Link to="/tours" className="hover:text-spb-300">Групповые</Link></li>
                <li><Link to="/tours" className="hover:text-spb-300">Индивидуальные</Link></li>
                <li><Link to="/tours" className="hover:text-spb-300">Тематические</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-spb-300">О нас</Link></li>
                <li><Link to="/about" className="hover:text-spb-300">Контакты</Link></li>
                <li><Link to="/about" className="hover:text-spb-300">FAQ</Link></li>
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

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-spb-100 dark:bg-spb-900 text-spb-700 dark:text-spb-300 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

export default Index;
