import { Tour } from "@/types/tour";
import { Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";

type TourCardProps = {
  tour: Tour;
};

const TourCard = ({ tour }: TourCardProps) => {
  const { addToCart, isInCart, removeFromCart } = useCart();
  const inCart = isInCart(tour.id);

  const handleCartAction = () => {
    if (inCart) {
      removeFromCart(tour.id);
    } else {
      addToCart(tour);
    }
  };

  return (
    <div className="tour-card">
      {tour.bestseller && (
        <div className="badge">Хит продаж</div>
      )}
      
      <div className="overflow-hidden">
        <img src={tour.image} alt={tour.title} className="tour-image" />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold">{tour.title}</h3>
        
        <div className="flex items-center justify-between mt-2 mb-3">
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-1" />
            <span>{tour.duration}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
            <span>{tour.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
          {tour.description}
        </p>
        
        <div className="flex items-center justify-between mt-4">
          <p className="font-bold text-lg text-spb-800 dark:text-spb-300">{tour.price} ₽</p>
          
          <Button
            onClick={handleCartAction}
            variant={inCart ? "outline" : "default"}
            className={inCart ? "border-spb-500 text-spb-500" : ""}
          >
            {inCart ? "Убрать из корзины" : "В корзину"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
