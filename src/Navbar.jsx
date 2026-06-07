import {Link} from "react-router-dom";// page reload ke bina navigation
function Navbar({cartCount, darkMode}) {
    return(
        <div style={{
         display: "flex", //left-right layout
         justifyContent: "space-between", //dono ends
         padding: "10px 20px",
         alignItems: "center", // same line
         background: darkMode ? "#111" : "#0f172a",
         color: "white",
         position: "sticky",
         top: 0
         }}>
            <h2 style={{margin:0}}>MyShop</h2>

            <div style={{
                display:"flex",
                gap:"20px",
                alignItems:"center"
               }}>
                <Link to="/" style={{ color:"white", textDecoration:"none"}}>
                🏠 Home
                </Link>
                <Link
                 to="/cart" 
                style={{
                    color:"white", 
                    textDecoration:"none",
                    display:"flex",
                    gap:"8px",
                    alignItems:"center"
                    }}>
               🛒 Cart:
               <span 
                style={{
                background:"red",
                color:"white",
                borderRadius:"50%",
                minWidth:"22px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                fontSize:"12px"
               }}>
               {cartCount}
               </span>
               </Link>
               
            </div> 
         </div>
    );
}

export default Navbar;