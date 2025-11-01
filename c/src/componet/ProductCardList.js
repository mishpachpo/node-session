import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';
import DealeteProuductComponet from './DealeteProuducComponet';
import AddSoppingCart from './AddSoppingCart';

const ProductCardList = ({ products, onDelete, showAddToCart = false, showCount = false }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px',
                padding: '20px'
            }}
        >
            {products.length === 0 && <i className="pi pi-spin pi-cog" style={{ fontSize: '2rem' }}></i>}
            {products.map((product) => (
                <div key={product._id} style={{ flex: '0 0 calc(33.33% - 20px)', maxWidth: 'calc(33.33% - 20px)' }}>
                    <Card
                        title={product.name}
                        subTitle={`Code: ${product.code || product.codeProduct}`}
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
                        {showCount && <p>כמות: {product.count}</p>}
                        if (a===5) 
                        <DealeteProuductComponet id={product._id} onDelete={onDelete} />
                        {showAddToCart && <AddSoppingCard product={product} onDelete={onDelete} />}
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default ProductCardList;
