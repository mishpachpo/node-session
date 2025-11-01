// import { NavLink } from "react-router-dom";
// import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// import { useState, useEffect } from "react";
// import { jwtDecode } from "jwt-decode";


// const Header = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const tokenString = localStorage.getItem("usernow");
//     if (tokenString) {
//       try {
//         const decoded = jwtDecode(tokenString);
//         setUser(decoded);
//         console.log(decoded);
//       } catch (error) {
//         console.error("Invalid token:", error);
//         setUser(null);
//       }
//     }
//   }, []);

//   return (
//     <div className="a">
//       <img className="logo" src="http://localhost:1004/uploads/logo.png" alt="Logo" />
//       <nav>
//         <NavLink to="/all">מגשי פירות</NavLink>
//         <NavLink to="/register">
//           <i className="pi pi-user" style={{ fontSize: '2.5rem' }}></i>
//         </NavLink>
//         {user?.roles === "מנהל" && <NavLink to="/add">הוספת מוצר</NavLink>}
//         <NavLink to="/login " >התחברות </NavLink>
//         <NavLink to="/cart">🛒</NavLink>
//         <NavLink to="/out " className="pi pi-sign-out"></NavLink>
//         <NavLink to="/category" state={{ title: "מארזי אירועים" }}>מארזי אירועים</NavLink>
//         <NavLink to="/category" state={{ title: "מגשי פירות" }}>מגשי פירות </NavLink>
//         <NavLink to="/category" state={{ title: "שוקולאב" }}>שוקולאב </NavLink>
//         <NavLink to="/category" state={{ title: " כלים ומפות" }}>כלים ומפות </NavLink>
//       </nav>
//     </div>
//   );
// };

// export default Header;



import { Navigate, NavLink } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar'
import React from "react";
import RegisterComponent from "./RegisterComponent";
const Header = () => {

  const centerContent = (
    <div className="flex flex-wrap align-items-center gap-3">
      <NavLink to="/">
        <i className="pi pi-home" style={{ color: '#C89A42' }}></i>
      </NavLink>
      <RegisterComponent />
      <NavLink to="/login">
    <NavLink to="/login">
  try {
    <NavLink to="/cart">
      <i className="pi pi-shopping-cart" />
    </NavLink>
  } catch (error) {
    Navigate("/login")
  }

  <i className="pi pi-user" />
</NavLink>

      
        <i className="pi pi-user" style={{ color: '#C89A42' }}></i>
      </NavLink>
      <NavLink to="/add">
        <i className="pi pi-plus" style={{ color: '#C89A42' }}></i>
      </NavLink>
      <NavLink to="/out">
        <i className="pi pi-sign-out" style={{ color: '#C89A42' }}></i>
      </NavLink>
         <NavLink to="/">
        <i className="pi pi-sign-out" style={{ color: '#C89A42' }}></i>
      </NavLink>
      <NavLink to="/category" style={{ color: '#C89A42' }} state={{ title: "מארזי אירועים" }}>מארזי אירועים</NavLink>
      <NavLink to="/category" style={{ color: '#C89A42' }} state={{ title: "מגשי פירות" }}>מגשי פירות </NavLink>
      <NavLink to="/category" style={{ color: '#C89A42' }} state={{ title: "שוקולאב" }}>שוקולאב </NavLink>
    
     <NavLink to="/category" style={{ color: '#C89A42' }} state={{ title: " כלים ומפות" }}>כלים ומפות </NavLink>
    </div>
  );


  return (
    <>

    <Toolbar left={centerContent} className=" shadow-2" style={{ borderRadius: '2rem', backgroundColor: '#362C28' }} />
</>
  );
};

export default Header;


// import { NavLink, useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
// import { Toolbar } from 'primereact/toolbar';
// import { Avatar } from 'primereact/avatar';
// import React, { useRef, useState } from "react";
// import RegisterComponent from "./RegisterComponent";
// import { Tooltip } from "primereact/tooltip";
// import LoginComponet from "./LoginComponet";
// import { useSelector } from "react-redux";
// import { Toast } from 'primereact/toast';
// import { Button } from "primereact/button";
// import { all } from "axios";
// import { Dialog } from "primereact/dialog";

// const Header = () => {
//     const navigate = useNavigate();
//     const toast = useRef(null);

//     const roles = useSelector(state => state.sum.roles);
//     // const enter = (res) => {
//     //     if (res)
//     //         navigate("/Register")
//     //     else
//     //         navigate("/")
//     // }
//     const [visible, setVisible] = useState(false);
//     const enter = (res) => {
//         if (res){
//             setVisible(false);
//             navigate("/register"); }
//         else{
//             setVisible(false);
//             navigate("/")}
//     };
    
//     const footerContent = (
//         <div>
//             <Button label="ביטול" icon="pi pi-times" onClick={() => enter(false)} className="p-button-text" />
//             <Button label="התחברות" icon="pi pi-user" onClick={() => enter(true)} autoFocus />
//         </div>
//     )

//     const goToCart = () => {
//         try {
//             const token = localStorage.getItem("userNow");
//             if (!token) throw new Error("יש להתחבר לפני שניתן לצפות בעגלה");
//             navigate("/allSCard");
//         } catch (err) {
//             console.log("פתיחת דיאלוג שגיאה");  // לבדוק שהקוד מגיע לכאן
//             setVisible(true);
//         }
//     }

//     const leftContent = (
//         <div className="flex flex-wrap align-items-center gap-3">
//             <NavLink to="/">
//                 <i className="pi pi-home" style={{ color: '#C89A42' }}></i>
//             </NavLink>

//             <i
//                 className="pi pi-shopping-cart"
//                 style={{ color: '#C89A42', cursor: 'pointer' }}
//                 onClick={goToCart}
//             ></i>

//             <RegisterComponent />
//             <LoginComponet />

//             {roles ? (
//                 <NavLink to="/add">
//                     <i className="pi pi-plus" style={{ color: '#C89A42' }}></i>
//                 </NavLink>
//             ) : null}

//             <NavLink to="/out">
//                 <i className="pi pi-sign-out" style={{ color: '#C89A42' }}></i>
//             </NavLink>
//         </div>
//     );

//     const centerContent = (
//         <div className="flex flex-wrap align-items-center gap-3">
//             <NavLink to="/category" style={{ textDecoration: 'none', color: '#C89A42' }} state={{ title: "שוקולאב בר" }}>
//                 שוקולאב בר
//             </NavLink>
//             <NavLink to="/category" style={{ textDecoration: 'none', color: '#C89A42' }} state={{ title: "מגשי פירות" }}>
//                 מגשי פירות
//             </NavLink>
//             <NavLink to="/category" style={{ textDecoration: 'none', color: '#C89A42' }} state={{ title: "כלים ומפות" }}>
//                 כלים ומפות
//             </NavLink>
//             <NavLink to="/category" style={{ textDecoration: 'none', color: '#C89A42' }} state={{ title: "מארזי אירועים" }}>
//                 מארזי אירועים
//             </NavLink>
//         </div>
//     );

//     return (<>
//         <div
//             style={{
//                 backgroundColor: '#362C28',
//                 borderRadius: '2rem',
//                 padding: '10px',
//                 margin: '10px',
//                 overflow: 'hidden'
//             }}
//         >
//             <Toast ref={toast} />

//             <div style={{ textAlign: 'center', marginBottom: '10px', paddingLeft: "10%" }}>
//                 <img
//                     src="http://localhost:1004/uploads/logo.png"
//                     style={{ height: '40px' }}
//                     alt="logo"
//                 />
//             </div>

//             <Toolbar
//                 left={leftContent}
//                 center={centerContent}
//                 style={{
//                     backgroundColor: 'transparent',
//                     boxShadow: 'none',
//                     border: 'none',
//                     height: '30px',
//                     minHeight: 'unset',
//                     padding: '0 0rem'
//                 }}
//             />

//         </div>
//         <Dialog
//             header="שגיאה בגישה לעגלה"
//             visible={visible}
//             modal={true}
//             style={{ width: '40vw', zIndex: 1000 }}
//             onHide={() => setVisible(false)}
//             footer={footerContent}
//         >
//             <p>כדי לצפות בעגלת הקניות יש להתחבר למערכת.</p>
//         </Dialog>

//     </>
//     );
// };

// export default Header;