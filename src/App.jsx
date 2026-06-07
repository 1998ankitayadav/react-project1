import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart): [];
  });
 const[darkMode, setDarkMode] = useState(false);
  const addToCart =(product)=>{
    const existingItem = cart.find((item) => item.id === product.id
  );//fin() product cart me pehle se hai ya nhi 
  if (existingItem){
    setCart(
      cart.map((item) =>
        item.id === product.id
      ? {...item,quantity: item.quantity + 1}
      :item//quantity count maintain karega
    )
    );
  }else{
    setCart([
      ...cart,{
        ...product,
        quantity:1
      }
    ]);
  }

  };
  const removeFromCart = (index) => {
    setCart(cart.filter((_,i)=> i !== index));

  };
  const increaseQty = (id) => {
    setCart(
      cart.map((item)=>
      item.id === id ? {...item, quantity: item.quantity + 1}
      :item
    )
    );
  };
  const decreaseQty = (id)=>{
    setCart(
      cart
      .map((item)=> 
      item.id === id?{//item.id = kaunsa product update karna hai ,uski id
        ...item,quantity: item.quantity -1}
        :item
      )
      .filter((item)=> item.quantity > 0) //qty 0 to product cart se remove ho jayega 
    );
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  },[cart]);
  
  return(
    <BrowserRouter>
    <Navbar cartCount={cart.length}
    darkMode={darkMode}/>
     {/* main fix wrapper div  */}
     <div style ={{
      padding:"20px",
      minHeight:"100vh",
      backgroundColor: darkMode ? "#222" : "#fff",
      color: darkMode ? "#fff" : "#000"

     }}>
    <Routes>
      <Route path="/" element={<Home 
      addToCart={addToCart}
       darkMode={darkMode}
      setDarkMode={setDarkMode} />} />
      <Route path="/cart" element={<Cart 
      cart={cart}
      removeFromCart={removeFromCart}
      increaseQty={increaseQty} 
      decreaseQty={decreaseQty}
        darkMode={darkMode}
       />
       }
      />
    </Routes> 
    </div>
    </BrowserRouter>
  );
}
export default App;