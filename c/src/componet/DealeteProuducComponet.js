import Axios from "axios"
import AllProudactComponet from "./AllProudactComponet";
import { Button } from 'primereact/button';
import 'primeflex/primeflex.css';
import { jwtDecode } from "jwt-decode";


const DealeteProuductComponet = (props) => {
    
    const dealet = async () => {
        console.log(props.id);
        await Axios.delete(`http://localhost:1004/api/product/${props.id}`);
        props.onDelete(props.id);
        const token = localStorage.getItem("usernow");
              if (!token) {
                  return;
              }
       const decoded = jwtDecode(token);
        const { data } = await Axios.get("http://localhost:1004/api/shoppingCart", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        for (let index = 0; index < data.length; index++) {
            if(data[index].codeProduct===props.id)
           {
            const res1 = await Axios.delete(`http://localhost:1004/api/shoppingCart/${data[index]._id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            props.onDelete(props.id)
           }
            
        }
        
        

    }

    return (
        <>
             <Button onClick={dealet} icon="pi pi-trash" className="p-button-rounded" style={{ backgroundColor: '#C89A42',color:"white", borderColor: 'white' }}  />
        </>
    )

}
export default DealeteProuductComponet