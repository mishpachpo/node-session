import React, { useRef, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from 'primereact/floatlabel';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import 'primeflex/primeflex.css';
import { Dialog } from 'primereact/dialog';
import { Password } from 'primereact/password';
import { Messages } from 'primereact/messages';

const RegisterComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [active, setActive] = useState(true);
  
    const [err, setErr] = useState('');
    const [flag, setFlag] = useState(false);
    const toastTopLeft = useRef(null);
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const msgs = useRef(null);

    const sendForm = async (e) => {
     

 
     
        e.preventDefault();
        try {
            await Axios.post("http://localhost:1004/api/auth/register", {
                username,
                password,
                name,
                email,
                phone,
                active
            });
            navigate("/login");
        } catch (error) {
            if (msgs.current) {
                msgs.current.clear();
                msgs.current.show([
                    {
                        severity: 'error',
                        summary: 'שגיאה',
                        detail: error.response?.data?.message || "שגיאה כללית בשליחת הטופס",
                        life: 3000
                    }
                ]);
            }
        }
    };

    return (
        <div className="">
            {err && <p style={{ color: "red" }}>{err}</p>}
            <Button label="Login" icon="pi pi-user" onClick={() => setVisible(true)} />
            <Dialog
                visible={visible}
                modal
                onHide={() => setVisible(false)}
                content={({ hide }) => (
                    <div className="flex flex-column px-5 py-4 gap-12" style={{ borderRadius: '30px', backgroundImage: 'linear-gradient(135deg, #C89A42 3%, white 20%, white 80%, #C89A42 100%)' }}>
                        <img width="150" height="35" src="http://localhost:1004/uploads/logo.png" className="block mx-auto" />
                        <form onSubmit={sendForm} className="flex flex-column">
                            <Toast ref={toastTopLeft} position="top-left" />
                            <div className="flex flex-column p-2">
                                <FloatLabel>
                                    <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                    <label htmlFor="username">שם משתמש</label>
                                </FloatLabel>
                                <Messages ref={msgs} />
                            </div>
                            <div className="flex flex-column w-4 p-2">
                                <FloatLabel>
                                    <Password value={password} onChange={(e) => setPassword(e.target.value)} toggleMask feedback={flag} required />
                                    <label htmlFor="password">password </label>
                                </FloatLabel>
                            </div>
                            <div className="flex flex-column p-2">
                                <FloatLabel>
                                    <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                                    <label htmlFor="name">שם משתמש</label>
                                </FloatLabel>
                            </div>
                            <div className="flex flex-column p-2">
                                <FloatLabel>
                                    <InputText id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <label htmlFor="email">מייל</label>
                                </FloatLabel>
                            </div>
                            <div className="flex flex-column p-2">
                                <FloatLabel>
                                    <InputText id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    <label htmlFor="phone">טלפון</label>
                                </FloatLabel>
                            </div>
                            <div className="flex align-items-center gap-2">
                                <Checkbox inputId="active" checked={active} onChange={(e) => setActive(e.checked)} />
                                <label htmlFor="active">משתמש פעיל</label>
                            </div>
                            <Button type="submit" label="send" text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10" />
                        </form>
                        <div className="flex align-items-center gap-2">

                        </div>
                    </div>
                )}
            />
        </div>
    );
};

export default RegisterComponent;
