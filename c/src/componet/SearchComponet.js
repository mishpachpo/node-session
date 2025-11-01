 import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Card } from 'primereact/card';
// import { InputText } from "primereact/inputtext";
// import { FloatLabel } from 'primereact/floatlabel';
// import { Button } from 'primereact/button';
// import Axios from "axios"
// const SearchComponet = () => {

//     const [products, setProducts] = useState([]);
//       const [products1, setProducts1] = useState([]);
//     const [a, setA] = useState("");
//      const fetchData = async () => {
//         const { data } = await Axios.get("http://localhost:1004/api/product");
//         setProducts(data);
//     }

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const handleDelete = (a) => {
//         const updated = products.filter(product => product._id !== a);
//         setProducts1(updated); 
//         console.log("u"+products1);
//     };
 
  

//     console.log("products:", products);

//     return (
//         <>
//             <div
//                 style={{
//                     display: 'flex',
//                     flexWrap: 'wrap',
//                     justifyContent: 'center',
//                     gap: '20px',
//                     padding: '20px'
//                 }}
//             >
//                 {products.length === 0 && <i className="pi pi-spin pi-cog" style={{ fontSize: '2rem' }}></i>}
//                 {Array.isArray(products) && products.map((product) => (
//                     <div key={product._id} style={{ flex: '0 0 calc(33.33% - 20px)', maxWidth: 'calc(33.33% - 20px)' }}>
//                         <Card
//                             title={product.name}
//                             subTitle={`Code: ${product.codeProduct}`}
//                             header={
//                                 <Link to={`/all/${product._id}`}>
//                                     <img
//                                         src={`http://localhost:1004/uploads/${product.image}`}
//                                         alt={product.name}
//                                         style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }}
//                                     />
//                                 </Link>
//                             }
//                             style={{
//                                 textAlign: 'center',
//                                 backgroundColor: '#362C28',
//                                 color: 'white',
//                                 boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//                                 transition: 'transform 0.2s',
//                                 cursor: 'pointer'
//                             }}
//                             className="hover:scale-105 transition-transform"
//                         >
//                             <p>מחיר: ₪ {product.price}</p>
//                             <p>כמות: {product.count}</p>
//                             <p>משתמש: {product.user}</p>
//                         </Card>
//                     </div>
//                 ))}
//             </div>
//             <p>{a}</p>
//             <FloatLabel>
//                 <InputText id="username" value={a} onChange={(e) => setA(e.target.value)} />
//                 <label htmlFor="username">קוד משתמש</label>
//             </FloatLabel>
//            <Button onClick={() => handleDelete(a)} label="מחק" icon="pi pi-trash" className="p-button-danger mt-2" />

//         </>
//     );
// };

// export default SearchComponet;



// //import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { Card } from 'primereact/card';
// // import { InputText } from "primereact/inputtext";
// // import { FloatLabel } from 'primereact/floatlabel';
// // import { Button } from 'primereact/button';

// // const SearchComponet = ({ products: initialProducts = [] }) => {
// //     const [products, setProducts] = useState(initialProducts);
// //     const [a, setA] = useState("");
// //     const [err, setErr] = useState("");
// //     // const [ps, setPs] = useState(props.product)
// //     useEffect(() => {
// //         setProducts(initialProducts);
// //     }, [initialProducts]);

// //     const handleDelete = (id) => {
// //         if (a === "") {
// //             setErr("no");
// //             console.log(err);
// //         }

// //         // console.log(id);
// //         // console.log(props.product);
// //         // setProducts(props.product)
// //         const updated = products.filter(product => product.code !== id);
// //         // setPs(updated);
// //                setProducts(initialProducts);
// //         setA(" ")
// //     };

// //     return (
// //         <>
// //             <p>{a}</p>
// //             <FloatLabel>
// //                 <InputText id="username" value={a} onChange={(e) => setA(e.target.value)} />
// //                 <label htmlFor="username">קוד משתמש</label>
// //             </FloatLabel>
// //             <Button
// //                 onClick={() => handleDelete(a)}
// //                 label="חפש"
// //                 icon="pi pi-trash"
// //                 className="p-button-danger mt-2"
// //             />
// //         </>
// //     );
// // };

// // export default SearchComponet;

// // // import React, { useState, useEffect } from 'react';
// // // import { InputText } from "primereact/inputtext";
// // // import { FloatLabel } from 'primereact/floatlabel';
// // // import { Button } from 'primereact/button';

// // // const SearchComponent = ({ products = [] }) => {
// // //     const [code, setCode] = useState("");
// // //     const [foundProduct, setFoundProduct] = useState(null);
// // //     const [error, setError] = useState("");
// // // const handleSearch = () => {
// // //     const trimmed = code.trim();
// // //     console.log("Looking for code:", trimmed);
// // //     console.log("Available codes:", products.map(p => p.code));

// // //     const product = products.find(p => String(p.code) === trimmed);

// // //     if (product) {
// // //         setFoundProduct(product);
// // //         setError("");
// // //     } else {
// // //         setFoundProduct(null);
// // //         setError("לא נמצא מוצר עם הקוד הזה");
// // //     }
// // // };


// // //     return (
// // //         <div style={{ padding: '1rem' }}>
// // //             <FloatLabel>
// // //                 <InputText
// // //                     id="code"
// // //                     value={code}
// // //                     onChange={(e) => setCode(e.target.value)}
// // //                 />
// // //                 <label htmlFor="code">קוד מוצר</label>
// // //             </FloatLabel>

// // //             <Button label="חפש" icon="pi pi-search" onClick={handleSearch} className="p-button-info mt-2" />

// // //             {error && <p style={{ color: 'red' }}>{error}</p>}

// // //             {foundProduct && (
// // //                 <div style={{ marginTop: '1rem' }}>
// // //                     <h4>מוצר שנמצא:</h4>
// // //                     <p>שם: {foundProduct.name}</p>
// // //                     <p>קוד: {foundProduct.code}</p>
// // //                     <p>מחיר: ₪{foundProduct.price}</p>
// // //                     <p>כמות: {foundProduct.count}</p>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default SearchComponent;
// // import React, { useState } from 'react';
// // import { InputText } from "primereact/inputtext";
// // import { FloatLabel } from 'primereact/floatlabel';
// // import { Button } from 'primereact/button';

// // const SearchComponent = ({ products = [] }) => {
// //     const [code, setCode] = useState("");
// //     const [foundProduct, setFoundProduct] = useState(null);
// //     const [error, setError] = useState("");

// //     const handleSearch = () => {
// //         const trimmed = code.trim();

// //         const product = products.find(p => String(p.code) === trimmed);

// //         if (product) {
// //             setFoundProduct(product);
// //             setError("");
// //         } else {
// //             setFoundProduct(null);
// //             setError("לא נמצא מוצר עם הקוד הזה");
// //         }

// //         setCode("");
// //     };

// //     return (
// //         <div style={{ padding: '1rem' }}>
// //             <FloatLabel>
// //                 <InputText
// //                     id="code"
// //                     value={code}
// //                     onChange={(e) => setCode(e.target.value)}
// //                 />
// //                 <label htmlFor="code">קוד מוצר</label>
// //             </FloatLabel>

// //             <Button
// //                 label="חפש"
// //                 icon="pi pi-search"
// //                 onClick={handleSearch}
// //                 className="p-button-info mt-2"
// //             />

// //             {error && <p style={{ color: 'red' }}>{error}</p>}

// //             {foundProduct && (
// //                 <div style={{ marginTop: '1rem' }}>
// //                     <h4>מוצר שנמצא:</h4>
// //                     <p>שם: {foundProduct.name}</p>
// //                     <p>קוד: {foundProduct.code}</p>
// //                     <p>מחיר: ₪{foundProduct.price}</p>
// //                     <p>כמות: {foundProduct.count}</p>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default SearchComponent;import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';
import Axios from "axios";

const SearchComponent = () => {
    const [products, setProducts] = useState([]);
    const [deleteId, setDeleteId] = useState("");

    // הבאת מוצרים מהשרת
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await Axios.get("http://localhost:1004/api/product");
                setProducts(data);
            } catch (error) {
                console.error("שגיאה בהבאת מוצרים:", error);
            }
        };

        fetchData();
    }, []);

    // פונקציית מחיקה לפי id
    const handleDelete = (id) => {
        const updated = products.filter(product => product.codeProduct === id);
        setProducts(updated);
        console.log(updated);
        
    };

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px',
                    padding: '20px'
                }}
            >
                {products.length === 0 && (
                    <i className="pi pi-spin pi-cog" style={{ fontSize: '2rem' }}></i>
                )}

                {products.map((product) => (
                    <div key={product._id} style={{ flex: '0 0 calc(33.33% - 20px)', maxWidth: 'calc(33.33% - 20px)' }}>
                        <Card
                            title={product.name}
                            subTitle={`Code: ${product.codeProduct}`}
                            header={
                                <Link to={`/all/${product._id}`}>
                                    <img
                                        src={`http://localhost:1004/uploads/${product.image}`}
                                        alt={product.name}
                                        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }}
                                    />
                                </Link>
                            }
                            style={{
                                textAlign: 'center',
                                backgroundColor: '#362C28',
                                color: 'white',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                transition: 'transform 0.2s',
                                cursor: 'pointer'
                            }}
                            className="hover:scale-105 transition-transform"
                        >
                            <p>מחיר: ₪ {product.price}</p>
                            <p>כמות: {product.count}</p>
                            <p>משתמש: {product.user}</p>
                        </Card>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center', padding: '1rem' }}>
                <FloatLabel>
                    <InputText
                        id="deleteId"
                        value={deleteId}
                        onChange={(e) => setDeleteId(e.target.value)}
                    />
                    <label htmlFor="deleteId">קוד מזהה למחיקה</label>
                </FloatLabel>

                <Button
                    onClick={() => handleDelete(deleteId)}
                    label="מחק"
                    icon="pi pi-trash"
                    className="p-button-danger mt-2"
                />
            </div>
        </>
    );
};

export default SearchComponent;

