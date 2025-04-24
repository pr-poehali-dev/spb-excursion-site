import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { useCart } from "@/hooks/useCart";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-spb-700 dark:bg-spb-950 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            <span className="text-spb-300">Санкт-</span>Петербург
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            <NavLinks />
            <div className="flex items-center gap-2">
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-spb-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </Button>
              </Link>
              <ThemeToggle />
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-spb-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Button>
            </Link>
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Общие ссылки для десктопа и мобильной версии
const NavLinks = ({ mobile = false, onClick = () => {} }) => {
  const linkClass = mobile 
    ? "py-2 block hover:text-spb-300 transition-colors" 
    : "hover:text-spb-300 transition-colors";
  
  return (
    <>
      <Link to="/" className={linkClass} onClick={onClick}>Главная</Link>
      <Link to="/tours" className={linkClass} onClick={onClick}>Экскурсии</Link>
      <Link to="/about" className={linkClass} onClick={onClick}>О нас</Link>
      <Link to="/chat" className={linkClass} onClick={onClick}>Чат с ассистентом</Link>
    </>
  );
};

export default Navbar;
