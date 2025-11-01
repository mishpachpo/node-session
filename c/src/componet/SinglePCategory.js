import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Card } from "primereact/card";
import DealeteProuducComponet from "./DealeteProuducComponet";
import AddSoppingCart from "./AddSoppingCart";
import AllSoppingCart from "./AllSoppingCart";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { classNames } from 'primereact/utils';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { useLocation } from "react-router-dom";


const SinglePCategory = () => {
  const location = useLocation();
  const title = location.state?.title;
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await Axios.get("http://localhost:1004/api/product");
        console.log(data);

        const filtered = data.filter(product => product.category === title);
        setProducts(filtered);
        console.log("filtered:", filtered);
      } catch (e) {
        console.error("שגיאה בהבאת מוצרים:", e);
      }
    };
    //     const handleDelete = (id) => {
    //     setProducts((prev) => prev.filter((p) => p._id !== id));
    // };


    if (title) {
      fetchProducts();
    }
  }, [title]);

// const isAdmin = user?.roles === "מנהל"

  const listItem = (product, index) => {
    return (
      <div className="col-12" key={product.id}>
        <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
          <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-center gap-3">
              <div className="text-2xl font-bold text-900" >{product.name}</div>
              <div className="text-center mt-2">
                <Rating value={product.rating} readOnly cancel={false} />
              </div>
              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{product.category}</span>
                </span>
                <Tag value={product.inventoryStatus}></Tag>
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              {/* <span className="text-2xl font-semibold">{product.count}</span> */}
              <span className="text-2xl font-semibold">{product.price}</span>
              <Button icon="pi pi-shopping-cart" className="p-button-rounded"></Button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (

    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          padding: '20px'
        }}
      >
        {products.map((product) => (
          <div key={product._id} style={{ flex: '0 0 calc(33.33% - 20px)', justifyContent: "space-around", maxWidth: 'calc(25% - 20px)' }}>
            <Card
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
                cursor: 'pointer',
                height: '300px',
                border: '1.5px solid #C89A42',

              }}
              className="hover:scale-105 transition-transform"
            >
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ paddingTop: "80px" }}>
              <DealeteProuducComponet id={product._id}  /> 
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                  <p style={{ fontSize: "10px", color: "#C89A42" }}>מק"ט: {product.code}</p>
                  <h3> {product.name}</h3>
                  <p> {product.price}$</p>
                </div>
                <div style={{ paddingTop: "20px" }}>
                  <AddSoppingCart product={product} />
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

 
      <Button
        onClick={() => setVisible(true)}
        icon="pi pi-shopping-cart"
        className="p-button-rounded"
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          backgroundColor: '#C89A42',
          color: 'white',
          borderColor: 'white',
          zIndex: 999,
          height: "50px",
          width: "50px",
          border: "2px solid white"
        }}
      />

      <Dialog
        dismissableMask
        position="left"
        visible={visible}
        style={{ width: '20vw', height: "100vh" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <AllSoppingCart />
      </Dialog>
    </div>
  );
}

export default SinglePCategory;
