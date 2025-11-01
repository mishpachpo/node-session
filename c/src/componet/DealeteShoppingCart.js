import Axios from "axios"
import { Button } from 'primereact/button';

import { useDispatch } from "react-redux";

const DeleteShoppingCard = (props) => { 
    const dithpatch = useDispatch()
    const delet = async () => {
        const token = localStorage.getItem("userNow")
       
   dithpatch({type:"subtract",payload:props.price})

        await Axios.delete(`http://localhost:1004/api/shoppingCart/${props.id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        props.onDelete(props.id)

    }

    return (
        <>
            <Button onClick={delet} label="מחק" icon="pi pi-trash" className="p-button-danger mt-2" />
        </>
    )
}
export default DeleteShoppingCard