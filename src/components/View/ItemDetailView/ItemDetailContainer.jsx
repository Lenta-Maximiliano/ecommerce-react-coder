import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import app from '../../../firebaseConfig'
import { CartContext } from '../../../context/CartContext';
// import Contador from '../../Contador/Contador.jsx';
import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null); 
  // const [quantity, setQuantity] = useState(1); 
  // const [isAdded, setIsAdded] = useState(false); 
  const { itemId } = useParams(); 
  // const { addItem } = useContext(CartContext);

  useEffect(() => {
    const db = getFirestore(app);
    const productRef = doc(db, 'products', itemId);

    getDoc(productRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      } else {
        console.log('El producto no existe');
        setProduct(null);
      }
    }).catch((error) => {
      console.error('Error al obtener el producto:', error);
      setProduct(null);
    });
  }, [itemId]);


  if (product === null) {
    return <p>Cargando producto...</p>;
  }

  return (
    <article className='item-detail'>
      <h4 className='item-detail__title'>
        {product.title}
      </h4>
      <img src={product.image} alt={product.title} className='item-detail__image' />
      <div className='item-detail__info'>
        <p><span>Precio por unidad:</span> $ {product.price}</p>
        <p><span>Descripción:</span> {product.description}</p>
        <p><span>Categoría:</span> {product.categoryId}</p>
      </div>
      {/* <Contador onQuantityChange={handleQuantityChange} />  */}
      {/* <div className='item-detail__buy-button-container'>
        <button className='item-detail__buy-button' onClick={handleClick}>Comprar</button>
      </div> */}

      {/* {isAdded && (
        <Link to="/cart" className='item-detail__checkout-button'>
          Terminar mi compra
        </Link>
      )} */}
    </article>
  );
}
