import { useState, useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';
import { Link } from 'react-router-dom';
import Contador from '../Contador/Contador'
import './ProductCardDetail.css'

export default function ProductCardDetail ( { product } ){
  const [quantity, setQuantity] = useState(1); 
  const [isAdded, setIsAdded] = useState(false); 
  const { addItem } = useContext(CartContext);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleClick = () => {
    if (product) {
      addItem({ ...product, quantity }); 
      setIsAdded(true);
    }
  };

	return (
		<>
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

				<Contador onQuantityChange={handleQuantityChange} /> 
				<button className='item-detail__buy-button' onClick={handleClick}>Comprar</button>
			</article>
			<div className='item-detail__checkout-button__container'>
				{isAdded && (
					<Link to="/cart" className='item-detail__checkout-button'>
						Terminar mi compra
					</Link>
				)}
			</div>
		</>
	)
}