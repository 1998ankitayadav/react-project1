import {useState} from "react"; //search text store karne ke liye
import ProductCard from "./ProductCard";

const products =[
    {
     id: 1,
     name:"iphone 15",
     price:80000,
     category:"mobile",
     rating:4.8,
     image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
     id:2,
     name:"Nike Shoes",
     price:5000,
     category:"footwear",
     rating:4.5,
     image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
     id: 3,
     name: "Watch",
     price: 2000,
     category:"watch",
     rating:4.8,
     image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    }
    
];

function Home({addToCart,darkMode, setDarkMode}){
    const [search, setSearch] = useState("");//search:user ky search kar raha,setsearch : search update karta hai
    const [category, setCategory] = useState("All"); //selected category store karega
    const [sortOrder, setSortOrder] = useState("default");
   
    return(
        <div style={{
            textAlign:"center",
            minHeight:"100vh",
            padding:"20px"

            }}>
            <button onClick={() => setDarkMode(!darkMode)}
            style={{marginLeft:"-1px",
                marginTop:"10px",
                padding:"0px",
                cursor:"pointer"
                // ,marginBottom:"1px"
            }}
            >
            {darkMode ? "☀️" : "🌙"}
            </button>
            <h2 style={{
             color:darkMode ? "#c08e8e" : "#8f5858",
            fontFamily:"monospace" //Montserrat,Helvetica,Arial,sans-serif,monospace

            }}>Products</h2>
            <div
            style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            gap:"20px",
            flexWrap:"wrap",
            marginBottom:"20px"

            }}
            >

            
            <input 
            type="text"
            placeholder="Search products..."
            value={search}//input ko state se connect
            onChange={(e) => setSearch(e.target.value)}//type karte sate change
            style={{
                padding:"10px",
                width:"250px",
                border:"1px solid #f0eaea",
                borderRadius:"8px"
              
            }}
            />
            <select 
            value={sortOrder}
            onChange={(e)=> setSortOrder(e.target.value)}
            style={{
                padding: "10px",
                borderRadius: "8px"

            }}
            >
                <option value="default">Default</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>

            </select>
            </div>
            <div style={{
                display:"flex",
                justifyContent:"center",
                gap:"20px",
                marginBottom:"20px",
                flexWrap:"wrap"
            }}
            > 
                <button onClick={() => setCategory("All")}>All</button>
                <button onClick={() => setCategory("mobile")}>Mobile</button>
                <button onClick={() => setCategory("footwear")}>Footwear</button>
                <button onClick={() => setCategory("watch")}>Watch</button>
            </div>
        
            <div style={{
                display:"flex",//cards ko row me rakhta hai 
                justifyContent:"center", //  center align
                flexWrap:"wrap",//mobile pe next line me bhejega
                gap:"30px", //equal spacing
                padding:"20px"
            
            }}
            >
                {products
                .filter(
                    (item) => //search ke according product chunega
                item.name
                .toLowerCase()
                .includes(search.toLowerCase()) && 
                (category === "All" ||
                item.category === category))
                //include=check karta hai product name me search word hai ya nhi 
                //filter()=matching product rakhta hai 
                //includes()=search text check karta hai 
               // toLowerCase()= capital/small ignore
               .sort((a,b) => {
                   if(sortOrder === "low-high") {
                    return a.price - b.price;
                   }
                   if(sortOrder === "high-low"){
                    return b.price - a.price;
                   }
                   return 0;
               })
                .map((item) => (        //har product ke liye ek productCard bnata hai
                    <ProductCard
                    key={item.id}//unique id degga react ko
                    name={item.name}//product name ko productcard ko bhejega
                    price={item.price}//price bhejega
                    image={item.image}//img bhejega/////productcard render ho rhe hain
                    category={item.category}//category bhejega
                    rating={item.rating}//rating bhejega
                    onAdd={() => addToCart(item)}//add to cart karne par current product app.jsx ko bhejta hai
                    darkMode={darkMode}//dark mode state bhejega
               />

                ))}
             </div>
        </div>
    );
}
export default Home;