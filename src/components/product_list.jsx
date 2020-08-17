import React, { useState, createContext } from "react";

export const productContext = createContext();

export const ProductList = (props) => {
  const [products] = useState([
    {
      name: "Ceramik White 60",
      price: (80.0).toFixed(2),
      image: require("../images/k1.png") /* {
        first: require("../images/k1.png"),
        second: require("../images/k5.png"),
      }, */,
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
    },
    {
      name: "Salmon Peach 60",
      price: (70.0).toFixed(2),
      image: require("../images/k2.png"),
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
    },
    {
      name: "KIWI 60",
      price: (70.0).toFixed(2),
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      image: require("../images/k3.png"),
    },
    {
      name: "Sandstone 60",
      price: (70.0).toFixed(2),
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      image: require("../images/k4.png"),
    },
    {
      name: "Pomegranate 60",
      price: (70.0).toFixed(2),
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      image: require("../images/k10.png"),
    },
    {
      name: "Pastel 60 sdfsdfafsdfasfas",
      price: (70.0).toFixed(2),
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      image: require("../images/k11.png"),
    },
    {
      name: "Hubba Bubba Powder",
      price: (70.0).toFixed(2),
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      image: require("../images/k12.png"),
      featured: true,
    },
    {
      name: "Teal Grape",
      price: (70.0).toFixed(2),
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      image: require("../images/k13.png"),
      featured: true,
    },
  ]);
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
    /* setCart([...cart, { ...product }]); */
  };
  const quantityIncrease = (product, amount) => {
    const newCart = [...cart];
    amount = newCart.find((item) => product.name === item.name);
    amount.quantity++;
    setCart(newCart);
  };
  const quantityDecrease = (product, amount) => {
    const newCart = [...cart];
    amount = newCart.find((item) => product.name === item.name);
    amount.quantity--;
    setCart(newCart);
  };
  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;
    setCart(newCart);
  };
  return (
    <productContext.Provider
      value={{
        products,
        cart,
        setCart,
        addToCart,
        quantityIncrease,
        quantityDecrease,
        setQuantity,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};