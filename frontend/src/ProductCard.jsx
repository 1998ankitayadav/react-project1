import { useState} from "react";
function ProductCard ({name, price, image, category, rating, onAdd, darkMode}){
    const [hover, setHover] = useState(false);
    return(
        <div onMouseEnter={()=> setHover(true)}
        onMouseLeave={()=> setHover(false)}
        style={{
            background: darkMode ? "#333" : "#fff",
            color: darkMode ? "#fff" : "#000",
            borderRadius: "12px",
            overflow:"hidden",
            boxShadow: hover 
            ? "0px 8px 20px rgba(0, 0, 0, 0.2)"
            : "0px 4px 12px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            cursor:"pointer",
            transition:"0.3s",
            transform: hover ? "translateY(-3px)":"translateY(0)",
            width:"100%",
            maxWidth:"250px"
        }}>
            <img 
            src={image} 
            alt={name} 
            style={{width:"100%",
                 height:"150px", 
                 objectFit:"cover"
                }} 
            />
            <h3 style={{margin: "10px 0"}}>{name}</h3>

            <p style={{color:"green", fontWeight:"bold"}}>
            ₹{price}
            </p>

            <p style = {{color:"#666"}}>
                {category}
            </p>
            <p style={{color:"#f59e0b"}}>
               ⭐{rating}
            </p>
        
            <button 
            onClick={onAdd}
            style = {{
                background:"#14b8a6",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                marginBottom:"10px",
                cursor: "pointer"
            }}
            > 
            Add to Cart
            </button>
        </div>
    );
}
export default ProductCard;