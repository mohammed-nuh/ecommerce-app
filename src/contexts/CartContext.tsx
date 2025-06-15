import { createContext, useContext, useState, type ReactNode } from "react";

type CartItem = {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    quantity: number;
}

type Item = {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
}

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: Item) => void;
    clearCart: () => void;
}

let CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

type CartProviderProps = {
  children: ReactNode;
};


export const CartProvider = ({ children }: CartProviderProps) => {
    let [cart, setCart] = useState<CartItem[]>([]);
    let addToCart = (item: Item) => {
        setCart((currentCart) => {
            const isProductAlreadyInCart = currentCart.find((product) => product.id == item.id);
            if(isProductAlreadyInCart){
                return currentCart.map((product) => product.id == item.id? {...product, quantity: product.quantity + 1} : product);
            }
            return [...currentCart, {...item, quantity: 1}];
        })
    }
    let clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{cart, addToCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
