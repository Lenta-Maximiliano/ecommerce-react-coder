import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import app from '../../../firebaseConfig'
import { CartContext } from '../../../context/CartContext';
// import Contador from '../../Contador/Contador.jsx';
import ProductCardDetail from './ProductCardDetail/ProductCardDetail';
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
    <>
      <ProductCardDetail product={ product }/>
    </>
  );
}
