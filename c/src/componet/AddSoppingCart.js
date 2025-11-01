import { Button } from 'primereact/button';
import Axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState } from 'react';
import 'primeicons/primeicons.css';
import { InputNumber } from 'primereact/inputnumber';
import 'primeflex/primeflex.css';
import { useDispatch } from "react-redux";

const AddSoppingCart = (props) => {
   const dispatch = useDispatch(); 
    const [err, setErr] = useState("")
    const [value, setValue] = useState(1);

    
    const addProduct = async () => {
        const token = localStorage.getItem("usernow");
        if (!token) {
            setErr(" No token found in localStorage");
            return;
        }

        const decoded = jwtDecode(token);



        try {
            const { data } = await Axios.get("http://localhost:1004/api/shoppingCart", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

         const productes_id = data.filter(product => product.user.toString() === decoded._id);
         const find = productes_id.find(product => product.codeProduct.toString() === props.product._id);
           
             

            if (!find) {
                await Axios.post("http://localhost:1004/api/shoppingCart", {
                    name: props.product.name,
                    codeProduct: props.product._id,
                    price: props.product.price,
                    image: props.product.image,
                    count: value
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("usernow")}`
                    }
                });
         dispatch({ type: "add", payload: props.product.price * value });
          setValue(1)
            props.setDegel(true)

            }
            else
                await Axios.put("http://localhost:1004/api/shoppingCart", {
                    codeProduct: props.product._id,
                    count: value
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("usernow")}`
                    }
                })
         dispatch({ type: "add", payload: props.product.price * value });
             setValue(1)
             props.setDegel(true)
        } catch (error) {


        }
       
   
}




   return (
        <>
            {/* <div className="card flex justify-content-center"> */}
            {/* {degel?<Toast ref={toastCenter} position="center" />:<></>} */}
           {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}> */}
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem' }}>

           <InputNumber
        inputId="vertical-buttons"
        value={value}
        onValueChange={(e) => setValue(e.value)}
        showButtons
        buttonLayout="vertical"
        step={1}
        incrementButtonClassName="my-increment"
        decrementButtonClassName="my-decrement"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        mode="decimal"
        inputStyle={{
            width: '100%',
            textAlign: 'center',
            height: '1.5rem', 
            fontSize: '0.75rem', 
            padding: '0.1rem'
        }}
        style={{
            width: '1.5rem',
           marginLeft:"10px"
          
        }}
    />
     <div  style={{paddingBottom:"6px"}}>
    <Button onClick={addProduct} icon="pi pi-shopping-cart" className="p-button-rounded" style={{ backgroundColor: '#C89A42',color:"white", borderColor: 'white' }}  />
    </div>
</div>
            {/* </div> */}


        </>
    )
}
export default AddSoppingCart


// import { Button } from 'primereact/button';
// import Axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import { useState } from 'react';
// import 'primeicons/primeicons.css';
// import { InputNumber } from 'primereact/inputnumber';
// import 'primeflex/primeflex.css';

// const AddSoppingCart = (props) => {
//     const [err, setErr] = useState("");
//     const [value, setValue] = useState(1);
//     const [sum, setSum] = useState(0);

//     const addProduct = async () => {

//         // setSum(prevSum => prevSum + props.product.price * value);
//         // console.log(sum);
        

//         const token = localStorage.getItem("usernow");
//         if (!token) {
//             setErr("No token found in localStorage");
//             return;
//         }

//         const decoded = jwtDecode(token);

//         try {
//             const { data } = await Axios.get("http://localhost:1004/api/shoppingCart", {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });

//             const userProducts = data.filter(product => product.user === decoded._id);
//             const found = userProducts.find(product => product.codeProduct === props.product._id);

//             if (!found) {
//                 await Axios.post("http://localhost:1004/api/shoppingCart", {
//                     name: props.product.name,
//                     codeProduct: props.product._id,
//                     price: props.product.price,
//                     image: props.product.image,
//                     count: value
//                 }, {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });
//             } else {
//                 await Axios.put("http://localhost:1004/api/shoppingCart", {
//                     codeProduct: props.product._id,
//                     count: value
//                 }, {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });
//             }
//         } catch (error) {
//             console.error("שגיאה בהוספת מוצר לעגלה:", error);
//             setErr("אירעה שגיאה. נסה שוב.");
//         }
//     };

//     return (
//         <>
//             <Button onClick={addProduct} label="הוסף לעגלה" className="p-button-danger mt-2">
//                 <h1>🛒</h1>
//             </Button>
//             <div className="card flex justify-content-center">
//                 <InputNumber value={value} onValueChange={(e) => setValue(e.value)} showButtons buttonLayout="vertical"
//                     style={{ width: '4rem' }}
//                     decrementButtonClassName="p-button-secondary"
//                     incrementButtonClassName="p-button-secondary"
//                     incrementButtonIcon="pi pi-plus"
//                     decrementButtonIcon="pi pi-minus"
//                 />
//             </div>
//             {err && <p style={{ color: 'red' }}>{err}</p>}
//         </>
//     );
// };

// export default AddSoppingCart;

