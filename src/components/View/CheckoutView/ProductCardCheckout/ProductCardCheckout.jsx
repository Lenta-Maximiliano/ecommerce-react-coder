import { useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';
import './ProductCardCheckout.css';

export default function CheckoutContainer() {
  const { cart, removeItem } = useContext(CartContext);

  const handleClickRemoveItem = (id) => {
    removeItem(id);
  };

  return (
    <>
      {cart.map((prod) => {
        const precioTotalItem = prod.price * prod.quantity;
        return (
          <article className='checkout-item' key={prod.id}>
            <div className='checkout-item-image-container'>
              <img className='checkout-item-image' src={prod.image} alt={prod.title} />
            </div>
            <div className='checkout-item-description'>
              <h2 className='checkout-item-title'>{prod.title}</h2>
              <p className='checkout-item-detail'><span>Descripción:</span> {prod.description}</p>
              <p className='checkout-item-price'><span>Precio por unidad:</span>&nbsp;$&nbsp;{prod.price}</p>
              <p className='checkout-item-quantity'><span>Cantidad:</span> {prod.quantity}</p>
            </div>
            <div className='checkout-item-actions'>
              <p className='checkout-item-subtotal'><span>SubTotal:</span> $ {precioTotalItem}</p>
              <button
                className='checkout-item-remove-button'
                onClick={() => handleClickRemoveItem(prod.id)}
              >
                Eliminar
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
}