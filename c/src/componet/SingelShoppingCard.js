import Axios from "axios"
import DealeteShoppingCart from "./DealeteShoppingCart"
import { useState, useEffect } from "react"
import { Dialog } from 'primereact/dialog';
import DealeteProuducComponet from "./DealeteProuducComponet";
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import AddSoppingCart from "./AddSoppingCart";
import { Link } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { useDispatch, useSelector } from "react-redux";

const SingelShoppingCard = () => {
    const dithpatch=useDispatch()
    const sum=useSelector(x=>x.sum.sum)
    console.log(sum+"sum");
    
    const [products, setProducts] = useState([])
    const [visible, setVisible] = useState(false);
    const fetchData = async () => {
        try {
            console.log("aaa");
            const { data } = await Axios.get("http://localhost:1004/api/shoppingCart/singel",
               {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("usernow")}`
                    }
                
         } )
            setProducts(data)
        } catch (error) {
            console.error("שגיאה בקבלת נתונים מהשרת", error)
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    const handleDelete = (id) => {
        setProducts(prev => prev.filter(product => product._id !== id));
    }
    let roles
    const token = jwtDecode(localStorage.getItem("usernow"))
    if (token.roles === "מנהל")
        roles = true
    else
        roles = false
    return (

        <div style={{ position: 'relative', minHeight: '100vh' }}>
            {sum>0?<h1 style={{ color: "#C89A42", paddingLeft: "15%" }}>:המוצרים שלי</h1>:<p>לא נמצאו מוצרים בעגלת הקהיות</p>}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column', 
                    padding: '20px',
                    maxWidth: '600px', 
                    margin: '0 auto'  
                }}
            >
                {products.map((product) => (
                    <div key={product._id} >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row-reverse",
                                alignItems: "center",
                                gap: "1rem",
                                width: "100%"
                            }}
                        >
                            <img
                                src={`http://localhost:1004/uploads/${product.image}`}
                                alt={product.name}
                                style={{
                                    width: '120px',
                                    height: '120px',
                                    objectFit: 'cover',
                                    borderRadius: '4px',
                                    flexShrink: 0
                                }}
                            />
                            <div
                                style={{
                                    flexGrow: 1,
                                    minWidth: 0, 
                                }}
                            >
                                <p
                                    style={{
                                        color: "#C89A42",
                                        fontSize: "20px",
                                        margin: 0,
                                        wordBreak: 'break-word',
                                        whiteSpace: 'normal',
                                    }}
                                >
                                    {product.name}
                                </p>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row-reverse",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}
                        >
                            <DealeteShoppingCart id={product._id} onDelete={handleDelete} price={product.price*product.count}/>
                            <p style={{ fontSize: "15px" }}>{product.count}×{product.price}₪</p>
                        
                        </div>
                        <hr style={{ borderTop: '1px solid black', marginTop: '10px', paddingRight: "0px" }} />
                    </div>
                ))}
            </div> 
             {sum>0? <h1 style={{ color: "#C89A42", paddingLeft: "15%" }}>{sum}:סכום ביניים </h1>:<></>}
        </div>
    );
   
 
}
export default SingelShoppingCard