// import { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { InputText } from 'primereact/inputtext';
// import { Button } from 'primereact/button';
// import Axios from "axios";
// import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// import { FloatLabel } from 'primereact/floatlabel';
// import { useMountEffect } from 'primereact/hooks';
// import { Messages } from 'primereact/messages';
// import 'primeflex/primeflex.css';
// import { Dropdown } from 'primereact/dropdown';
// import { ChevronDownIcon } from 'primereact/icons/chevrondown';
// import { ChevronRightIcon } from 'primereact/icons/chevronright';
// import UpdateProudct from "./UpdateProudct";
// import { Dialog } from 'primereact/dialog';
// import { jwtDecode } from "jwt-decode"

// const AddProductComponent = (props) => {
//     const [name, setName] = useState('');
//     const [code, setCode] = useState();
//     const [price, setPrice] = useState();
//     const [image, setImage] = useState('');
//     const msgs = useRef(null);
//     const [visible, setVisible] = useState(false);
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const categoris = [
//         { name: 'שוקולאב', code: "sb.webp" },
//         { name: 'מגשי פירות', code: "fruits.webp" },
//         { name: 'כלים ומפות', code: "kam.jpeg" },
//         { name: 'מארזי אירועים', code: "ttt.webp" }
//     ]
//     const footerContent = (
//         <div>
//             <Button
//                 label="בטול"
//                 icon="pi pi-times"
//                 onClick={() => {
//                     setVisible(false);
//                     update(false);
//                 }}
//                 className="p-button-text"
//             />

//             <Button
//                 label="אישור"
//                 icon="pi pi-check"
//                 onClick={() => {
//                     setVisible(false);
//                     update(true);
//                 }}
//                 autoFocus
//             />
//         </div>
//     );
//     const update = async (reasult) => {
//         if (reasult === true) {
//             await Axios.put("http://localhost:1004/api/product", {
//                 name,
//                 code,
//                 price,
//                 image,
//                 category: selectedCategory?.name
//             });
       

//         const { data: data1 } = await Axios.get("http://localhost:1004/api/product");
//         let findId;
//         for (let index = 0; index < data1.length; index++) {
//             if (data1[index].code === code) {
//                 findId = data1[index]._id;
//                 break;
//             }
//         }

//         const token = localStorage.getItem("usernow");
//         if (!token) {
//             return;
//         }

//         const { data } = await Axios.get("http://localhost:1004/api/shoppingCart", {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });

//         for (let index = 0; index < data.length; index++) {
//             if (data[index].codeProduct === findId) {
//                 await Axios.put(
//                     "http://localhost:1004/api/shoppingCart/a",
//                     {
//                         codeProduct: findId,
//                         name,
//                         price,
//                         image,
//                         category: selectedCategory?.name
//                     },
//                     {
//                         headers: {
//                             Authorization: `Bearer ${token}`
//                         }
//                     }
//                 );
//                 setVisible(false)
//                 navigate("/");
//             }
//         }
//     };
//  }
//     const selectedCategoryTemplate = (option, props) => {
//         if (option) {
//             return (
//                 <div className="flex align-items-center">
//                     <img alt={option.name} src={`http://localhost:1004/uploads/${option.code}`} className={`mr-2 flag flag-${option.code}`} style={{ width: '18px' }} />
//                     <div>{option.name}</div>
//                 </div>
//             );
//         }

//         return <span>{props.placeholder}</span>;
//     };

//     const categoryOptionTemplate = (option) => {
//         return (
//             <div className="flex align-items-center">
//                 <img alt={option.name} src={`http://localhost:1004/uploads/${option.code}`} className={`mr-2 flag flag-${option.code}`} style={{ width: '18px' }} />
//                 <div>{option.name}</div>
//             </div>
//         );
//     };

//     const panelFooterTemplate = () => {
//         return (
//             <div className="py-2 px-3">
//                 {selectedCategory ? (
//                     <span>
//                         <b>{selectedCategory.name}</b> נבחר.
//                     </span>
//                 ) : (
//                     'לא נמצאה קטגוריה'
//                 )}
//             </div>
//         );
//     };
//     const navigate = useNavigate();

//     const sendForm = async (e) => {
//         e.preventDefault();
//         try {
//             await Axios.post("http://localhost:1004/api/product", { name, code, price, image, category: selectedCategory?.name });
//             navigate("/");
//         } catch (error) {
//             if (error.response?.status === 400) {
//                 setVisible(true);
//             } else if (msgs.current) {
//                 msgs.current.clear();
//                 msgs.current.show([
//                     {
//                         severity: 'error',
//                         summary: 'שגיאה',
//                         detail: error.response?.data?.message || "שגיאה כללית בשליחת הטופס",
//                         life: 3000
//                     }
//                 ]);
//             }

//         }
//     }


//     return (
//         <>
//             <div className="p-fluid p-formgrid p-grid" style={{ width: '300px', margin: 'auto', marginTop: '50px' }}>
//                 <form onSubmit={sendForm}>
//                     <div className="p-field gap-2 p-3">
//                         <FloatLabel>
//                             <label htmlFor="name">הכנס שם מוצר</label>
//                             <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} required />
//                         </FloatLabel>
//                     </div>
//                     <Messages ref={msgs} />
//                     <div className="p-field gap-2 p-3">
//                         <FloatLabel>
//                             <label htmlFor="code">הכנס קוד מוצר</label>
//                             <InputText id="code" value={code} onChange={(e) => setCode(Number(e.target.value))} required />
//                         </FloatLabel>
//                     </div>
//                     <div className="p-field gap-2 p-3">
//                         <FloatLabel>
//                             <label htmlFor="price">הכנס מחיר</label>
//                             <InputText id="price" value={price} onChange={(e) => setPrice(Number(e.target.value))} required />
//                         </FloatLabel>
//                     </div>
//                     <div className="p-field gap-2 p-3">
//                         <FloatLabel>
//                             <label htmlFor="image">הכנס נתיב לתמונה</label>
//                             <InputText id="image" value={image} onChange={(e) => setImage(e.target.value)} required />
//                         </FloatLabel>
//                     </div>
//                     <div className="p-field gap-2 p-3">
//                         <Dropdown
//                             value={selectedCategory}
//                             onChange={(e) => setSelectedCategory(e.value)}
//                             options={categoris}
//                             optionLabel="name"
//                             placeholder="בחר קטגוריה"
//                             valueTemplate={selectedCategoryTemplate}
//                             itemTemplate={categoryOptionTemplate}
//                             panelFooterTemplate={panelFooterTemplate}
//                             dropdownIcon={(opts) => {
//                                 return opts.iconProps['data-pr-overlay-visible'] ? <ChevronRightIcon {...opts.iconProps} /> : <ChevronDownIcon {...opts.iconProps} />;
//                             }}
//                         />
//                     </div>
//                     <Button type="submit" label="שלח" icon="pi pi-check" className="p-button-success" />
//                 </form>
//             </div>


//             <Dialog
//                 header="עדכון מוצר"
//                 visible={visible}
//                 style={{ width: '50vw' }}
//                 onHide={() => setVisible(false)}
//                 footer={footerContent}
//             >
//                 <p className="m-0">
//                     <h1> המוצר קיים</h1>
//                     <p>האם ברצונך לערוך  שינויים?</p>
//                 </p>
//             </Dialog>
//         </>
//     );

// }

// export default AddProductComponent;


import { useEffect, useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { Messages } from "primereact/messages";
import { Card } from "primereact/card";
import Axios from "axios";

const AddProductComponent = () => {
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [price, setPrice] = useState(null);
    const [image, setImage] = useState("");
    const [categoris, setCategoris] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [visible, setVisible] = useState(false);
    const msgs = useRef(null);

    useEffect(() => {
        Axios.get("http://localhost:1004/api/category")
            .then(res => setCategoris(res.data))
            .catch(err => console.error("Error fetching categories:", err));
    }, []);
        const categoryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src={`http://localhost:1004/uploads/${option.code}`} className={`mr-2 flag flag-${option.code}`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    const panelFooterTemplate = () => {
        return (
            <div className="py-2 px-3">
                {selectedCategory ? (
                    <span>
                        <b>{selectedCategory.name}</b> נבחר.
                    </span>
                ) : (
                    'לא נמצאה קטגוריה'
                )}
            </div>
        );
    };

    const sendForm = async (e) => {
        e.preventDefault();

        if (!name || !code || !price || !image || !selectedCategory) {
            msgs.current.show({ severity: 'error', summary: 'שגיאה', detail: 'אנא מלא את כל השדות', life: 3000 });
            return;
        }

        try {
            const product = {
                name,
                code,
                price,
                image,
                category: selectedCategory
            };

            await Axios.post("http://localhost:1004/api/products", product);
            msgs.current.show({ severity: 'success', summary: 'הצלחה', detail: 'המוצר נוסף בהצלחה', life: 3000 });

            setName(""); setCode(""); setPrice(null); setImage(""); setSelectedCategory(null);
            setVisible(false);

        } catch (err) {
            msgs.current.show({ severity: 'error', summary: 'שגיאה', detail: 'שגיאה בעת שליחת הנתונים', life: 3000 });
        }
    };

    return (
        <div className="p-4">
            <Messages ref={msgs} />

            <Button label="הוסף מוצר" icon="pi pi-plus" onClick={() => setVisible(true)} className="mb-3" />

            <Dialog
                header="הוספת מוצר חדש"
                visible={visible}
                onHide={() => setVisible(false)}
                className="w-full md:w-30rem"
                draggable={false}
                modal
            >
                <Card className="p-fluid">
                    <form onSubmit={sendForm} className="p-fluid flex flex-column gap-4">

                        <span className="p-float-label">
                            <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                            <label htmlFor="name">שם מוצר</label>
                        </span>

                        <span className="p-float-label">
                            <InputText id="code" value={code} onChange={(e) => setCode(e.target.value)} required />
                            <label htmlFor="code">קוד מוצר</label>
                        </span>

                        <span className="p-float-label">
                            <InputNumber
                                id="price"
                                value={price}
                                onValueChange={(e) => setPrice(e.value)}
                                mode="currency"
                                currency="ILS"
                                locale="he-IL"
                                required
                            />
                            <label htmlFor="price">מחיר</label>
                        </span>

                        <span className="p-float-label">
                            <InputText id="image" value={image} onChange={(e) => setImage(e.target.value)} required />
                            <label htmlFor="image">קישור לתמונה</label>
                        </span>

                        {image && (
                            <img
                                src={image}
                                alt="תצוגה מקדימה"
                                className="w-full border-round shadow-1"
                                style={{ maxHeight: '150px', objectFit: 'contain' }}
                            />
                        )}

                        <span className="p-float-label">
                            <Dropdown
                                inputId="category"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.value)}
                                options={categoris}
                                optionLabel="name"
                                placeholder="בחר קטגוריה"
                            />
                            <label htmlFor="category">קטגוריה</label>
                        </span>

                        <div className="flex justify-content-between mt-3">
                            <Button label="ביטול" icon="pi pi-times" className="p-button-secondary" type="button" onClick={() => setVisible(false)} />
                            <Button label="שלח" icon="pi pi-check" type="submit" />
                        </div>
                    </form>
                </Card>
            </Dialog>
        </div>
    );
};

export default AddProductComponent;
