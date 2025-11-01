import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';
import Axios from "axios";
import { jwtDecode } from "jwt-decode";
import DealeteShoppingCart from "./DealeteShoppingCart";
import 'primeflex/primeflex.css';

const AllSoppingCart = () => {
    const [products, setProducts] = useState([]);
    const [err, setErr] = useState("");
    const [sum, setSum] = useState(0)
        const [a, setA] = useState(0)
    const fetchData = async () => {
        try {
            const token = localStorage.getItem("usernow");
            if (!token) {
                setErr(" No token found in localStorage");
                return;
            }

            const decoded = jwtDecode(token);

            const { data } = await Axios.get("http://localhost:1004/api/shoppingCart", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const filtered = data.filter(product => product.user === decoded._id);
            setProducts(filtered);
            console.log("🛒 Filtered shopping cart:", filtered);
            let total = 0;
            for (let index = 0; index < filtered.length; index++) {
                total += filtered[index].price * filtered[index].count;
            }
            setSum(total);


        } catch (err) {
            setErr(" Error fetching shopping cart:", err.response?.data || err.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    const handleDelete = (id) => {
        if (products.length == 1)
            setProducts([])
        setProducts(products.filter(product => product._id !== id));
        if(products.length == 0)
            console.log("kkk");
            
            setA("no")
    }
return(
        <>
           <div className="to-right flex justify-content-center">
        </div>
            <div>
                {products.map((prod) => (
                    <div>
                        <h4>{prod.name}</h4>
                        <p>מחיר: {prod.price}</p>
                        <p>כמות:{prod.count}</p>
                        {a}
                        <img src={`http://localhost:1004/uploads/${prod.image}`} alt={prod.name} width="100" />
                        <DealeteShoppingCart id={prod._id} onDelete={handleDelete}/>
                    </div>
                ))}
            </div>
            <p>סה"כ לתשלום:{sum}</p>   
        </>
)
            }

export default AllSoppingCart;
