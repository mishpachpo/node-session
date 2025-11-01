import React, { useState } from "react";
import { jwtDecode } from "jwt-decode"
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';
import 'primeflex/primeflex.css';
import { Dialog } from 'primereact/dialog';
import { Password } from 'primereact/password';
import { useDispatch } from "react-redux";
const LoginComponet = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [flag, setFlag] = useState(false);
    const [err, setErr] = useState("")
    const [products, setProducts] = useState([])
    const navigate = useNavigate();



    const [visible, setVisible] = useState(false);

    const login = async (e) => {
        e.preventDefault();
        try {
            const res = await Axios.post("http://localhost:1004/api/auth/login", { username, password })
            const token = res.data.accessToken
            localStorage.setItem('usernow', token)
            console.log(token);
            Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
            const token1 = localStorage.getItem("usernow");
            const decodedToken = jwtDecode(token1);
            console.log(decodedToken);

            const { data } = await Axios.get("http://localhost:1004/api/shoppingCard/singel", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("userNow")}`
                }
            })
            setProducts(data)

            let zover = 0;
            for (let i = 0; i < data.length; i++) {
                zover += data[i].price * data[i].count;
            }
            dispatch({ type: "set", payload: zover });
            setVisible(false)
            navigate("/")

        } catch (error) {
            if (error.response?.status === 401)
                setErr(" משתמש לא פעיל");

            if (error.response?.status === 405) {
                setErr("משתמש לא חוקי");
                navigate("/register")
            } else {
                setErr("שגיאה כללית");
            }

        }
    }




    return (
        <div className="card flex justify-content-center">
            <Button label="Login" icon="pi pi-user" onClick={() => setVisible(true)} />
            <Dialog
                visible={visible}
                modal
                onHide={() => { if (!visible) return; setVisible(false); }}
                content={({ hide }) => (
                    <div className="flex flex-column px-5 py-4 gap-12" style={{ borderRadius: '30px', backgroundImage: 'linear-gradient(135deg, #C89A42 3%, white 20%, white 80%, #C89A42 100%)' }}>
                        <img width="150" height="35" viewBox="0 0 35 35" fill="none" src="http://localhost:1004/uploads/logo.png" className="block mx-auto" />
                        <g mask="url(#mask0_2642_713)"> </g>
                        <form onSubmit={login}>
                            <h2>הרשמה</h2>
                            <div className=" flex flex-column  p-2">
                                <FloatLabel>
                                    <InputText required id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    <label htmlFor="username">קוד משתמש</label>
                                </FloatLabel>
                            </div>
                            <div className="flex flex-column  p-2">
                                <FloatLabel>
                                    <Password value={password} onChange={(e) => setPassword(e.target.value)} toggleMask feedback={flag} required />
                                    <label htmlFor="password">password </label>
                                </FloatLabel>
                            </div>
                            <Button type="submit" label="Send" text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>

                        </form>
                        <div className="flex align-items-center gap-2">

                        </div>
                    </div>
                )}
            ></Dialog>
        </div>
    )
}




export default LoginComponet;