import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Clock, Users, Award } from "lucide-react";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>О нас | Экскурсии по Санкт-Петербургу</title>
      </Helmet>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <section className="mb-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-spb-700 dark:text-spb-300 mb-4">О нашей компании</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Мы организуем незабываемые экскурсии по Санкт-Петербургу более 10 лет
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-spb-600 dark:text-spb-400 mb-4">Наша миссия</h2>
                <p className="mb-6 text-muted-foreground">
                  Мы стремимся раскрыть все грани великолепия культурной столицы России, делая историю доступной, 
                  интересной и запоминающейся для каждого гостя. Нашей главной задачей является создание 
                  уникального и персонализированного опыта для каждого туриста.
                </p>

                <h2 className="text-2xl font-bold text-spb-600 dark:text-spb-400 mb-4">Почему выбирают нас</h2>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Award className="h-5 w-5 mr-2 text-spb-500 flex-shrink-0 mt-1" />
                    <span>Профессиональные гиды с многолетним опытом и глубокими знаниями</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 mr-2 text-spb-500 flex-shrink-0 mt-1" />
                    <span>Персонализированный подход к каждой группе туристов</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 mr-2 text-spb-500 flex-shrink-0 mt-1" />
                    <span>Гибкий график и возможность организации эксклюзивных маршрутов</span>
                  </li>
                </ul>

                <Button className="bg-spb-600 hover:bg-spb-700">
                  Связаться с нами
                </Button>
              </div>

              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/placeholder.svg" 
                  alt="Наша команда" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          <section className="py-12 bg-spb-50 dark:bg-spb-900/40 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-spb-700 dark:text-spb-300 mb-8">Наши преимущества</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-spb-800 p-6 rounded-lg shadow-md">
                <div className="bg-spb-100 dark:bg-spb-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-spb-600 dark:text-spb-300" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Маленькие группы</h3>
                <p className="text-center text-muted-foreground">
                  Мы проводим экскурсии в малых группах до 12 человек, чтобы каждый участник получил персональное внимание гида.
                </p>
              </div>

              <div className="bg-white dark:bg-spb-800 p-6 rounded-lg shadow-md">
                <div className="bg-spb-100 dark:bg-spb-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-spb-600 dark:text-spb-300" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Опытные гиды</h3>
                <p className="text-center text-muted-foreground">
                  Наши гиды — аккредитованные специалисты с историческим образованием и безграничной любовью к городу.
                </p>
              </div>

              <div className="bg-white dark:bg-spb-800 p-6 rounded-lg shadow-md">
                <div className="bg-spb-100 dark:bg-spb-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-spb-600 dark:text-spb-300" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Удобное расписание</h3>
                <p className="text-center text-muted-foreground">
                  Предлагаем экскурсии в различное время суток, включая вечерние и ночные программы.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center text-spb-700 dark:text-spb-300 mb-8">Контактная информация</h2>
            <div className="max-w-3xl mx-auto bg-white dark:bg-spb-800/60 rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-spb-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Адрес</h3>
                      <p className="text-muted-foreground">Невский проспект, 28, Санкт-Петербург, 191186</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-spb-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Телефон</h3>
                      <p className="text-muted-foreground">+7 (812) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-spb-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">info@spbtours.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-3 text-spb-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Часы работы</h3>
                      <p className="text-muted-foreground">Пн-Вс: 9:00 - 20:00</p>
                    </div>
                  </div>
                </div>
                
                <div className="h-[300px] bg-gray-200 dark:bg-gray-700 rounded-lg">
                  {/* Здесь можно добавить карту или изображение офиса */}
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    Карта с расположением офиса
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <footer className="bg-spb-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p>© {new Date().getFullYear()} Экскурсии по Санкт-Петербургу. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutPage;
