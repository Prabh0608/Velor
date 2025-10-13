import { createContext, useState, useEffect } from 'react';

const addCartItems = (cartItems, productToAdd) => {
    const exsistingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if (exsistingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const exsistingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if (exsistingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
}

const deleteCartItem = (cartItems, cartItemToDelete) => {
    const exsistingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToDelete.id);

    if (exsistingCartItem) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToDelete.id)
    }
}

export const CartContext = createContext(
    {
        isCartOpen: false,
        setIsCartOpen: () => { },
        cartItems: [],
        addItemToCart: () => { },
        removeItemFromCart: () => { },
        deleteItemFromCart: () => { },
        cartTotal: 0,
        cartCount: 0,
    }
);

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setcartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) =>
            total + cartItem.quantity
            , 0)
        setcartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) =>
            total + cartItem.quantity * cartItem.price, 0
        )
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItems(cartItems, productToAdd));
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const deleteItemFromCart = (cartItemToDelete) => {
        setCartItems(deleteCartItem(cartItems, cartItemToDelete));
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, deleteItemFromCart, cartTotal };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
};