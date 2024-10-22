import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
// import UserInfo from '../../UserInfo/UserInfo';
import './CheckoutContainer.css';

export default function CheckoutContainer() {
  const { cart, clear, removeItem, createNewOrder } = useContext(CartContext);

  const handleClickRemoveItem = (id) => {
    removeItem(id);
  };

  const handleClickClear = () => {
    clear();
  };

  return (
    <div className='checkout-container'>
      {cart.length !== 0 ? (
        <>
          <h1 className='checkout-title'>Carrito de Compras</h1>

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
                  <p className='checkout-item-price'><span>Precio por unidad:</span> $ {prod.price}</p>
                  <p className='checkout-item-quantity'><span>Cantidad:</span> {prod.quantity}</p>
                </div>
                <div className='checkout-item-actions'>
                  <p className='checkout-item-subtotal'>SubTotal: $ {precioTotalItem}</p>
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

          <h2 className='checkout-total'>
            Total de la compra: ${cart.reduce((total, prod) => total + prod.price * prod.quantity, 0)}
          </h2>
          <div className='checkout-clear-cart-container'>
            <button className='checkout-clear-cart-button' onClick={handleClickClear}>
              Vaciar Carrito
            </button>
          </div>
          {/* <UserInfo cart={cart} createNewOrder={createNewOrder}/> */}
        </>
      ) : (
        <>
          <h1 className='checkout-empty-cart-message'>¡¡¡Su carrito de compras está vacío!!!</h1>
          <Link to="/" className="checkout-return-home-button">Ir al Inicio</Link>
        </>
      )}
    </div>
  );
}