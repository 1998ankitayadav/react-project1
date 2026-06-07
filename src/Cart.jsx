function Cart({ cart, removeFromCart, increaseQty, decreaseQty, darkMode}) {
  const totalPrice= cart.reduce(  //redue se pure cart me loop lagta hai 
    (total, item) => total + item.price * item.quantity, // item.price * item.quantity se product ka total price 
    0
  );
  
  return (
    <div style={{ textAlign: "center",
      color: darkMode ? "#fff" : "#000"
     }}>
      <h2>Cart Items</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
        {cart.map((item, index) => (
          <div key={index}
           
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90%",//responsice for mobile
            maxWidth: "450px",//for laptop no horizontal scroll
            margin: "10px auto",
            padding: "15px",
            background: darkMode ? "#333" : "#fff",
            color: darkMode ? "#fff" : "#000",
            borderRadius: "10px",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)"
          }}> 
      
            <div style={{
            textAlign: "left",
            width: "140px",
            // flex: "1",//left section ko available space dega
            }}>
            <h4 style={{ margin: "0" }}>
            {item.name}
            </h4>

            <p style={{
            margin: "5px 0",
            color: "green"
            }}>
            ₹{item.price}
            </p>

            <p style={{
            margin: 0,
            color: darkMode ? "#ddd" : "#666"
            }}>
            Qty: {item.quantity}
            </p>
            </div>
            
           <div style={{
           display: "flex",
           alignItems: "center",
           gap: "10px",
           flexWrap:"wrap",
           width: "140px",
           justifyContent: "center"  
          //  marginLeft: "30px"
           }}>
           <button onClick={() => decreaseQty(item.id)}>
            -
           </button>

           <span>{item.quantity}</span>

           <button onClick={() => increaseQty(item.id)}>
           +
           </button>

          <button onClick={() => removeFromCart(index)}>
           Remove
          </button>
          </div>
          </div>
          
        ))}

      <div 
      style={{
        marginTop:"20px",
        fontSize:"20px",
        fontWeight:"bold",
        color: darkMode ? "#fff" : "#0f172a"
        }}
        >
        Total: ₹{totalPrice}
      </div>
      </>
    )}
    </div>
    );     
    }

export default Cart;