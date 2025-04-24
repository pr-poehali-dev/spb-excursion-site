import { Trash2, ShoppingCart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import { useCart } from "@/hooks/useCart";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  
  const totalPrice = cart.reduce((sum, tour) => sum + tour.price, 0);
  
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
        
        <h1 className="text-3xl font-bold mb-6">Корзина</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
              <ShoppingCart className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Ваша корзина пуста</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Добавьте экскурсии, чтобы оформить заказ
            </p>
            <Button asChild>
              <Link to="/tours">Выбрать экскурсии</Link>
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cart.map((tour) => (
                  <div key={tour.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex items-start">
                    <div className="w-24 h-24 flex-shrink-0 rounded overflow-hidden mr-4">
                      <img 
                        src={tour.image} 
                        alt={tour.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{tour.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        Длительность: {tour.duration}
                      </p>
                      <p className="font-bold text-spb-700 dark:text-spb-300">
                        {tour.price} ₽
                      </p>
                    </div>
                    
                    <Button 
                      variant="ghost"
                      size="icon"
                      className="text-gray-500 hover:text-destructive"
                      onClick={() => removeFromCart(tour.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>
              
              {cart.length > 0 && (
                <Button 
                  variant="outline" 
                  className="mt-6"
                  onClick={clearCart}
                >
                  Очистить корзину
                </Button>
              )}
            </div>
            
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 sticky top-20">
                <h2 className="text-xl font-semibold mb-4">Сводка заказа</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Количество экскурсий</span>
                    <span>{cart.length}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Итого</span>
                    <span>{totalPrice} ₽</span>
                  </div>
                </div>
                
                <Button className="w-full">Оформить заказ</Button>
                
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Нажимая кнопку "Оформить заказ", вы соглашаетесь с условиями предоставления услуг
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
