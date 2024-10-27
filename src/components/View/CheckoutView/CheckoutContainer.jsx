import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import ProductCardCheckout from './ProductCardCheckout/ProductCardCheckout'
import UserInfo from './UserInfo/UserInfo'
import './CheckoutContainer.css';

export default function CheckoutContainer() {
  const { cart, clear, createNewOrder } = useContext(CartContext);

  const handleClickClear = () => {
    clear();
  };

  return (
    <div className='checkout-container'>
      {cart.length !== 0 ? (
        <>
          <h1 className='checkout-title'>Carrito de Compras</h1>

          <ProductCardCheckout />

          <h2 className='checkout-total'>
            Total de la compra: ${cart.reduce((total, prod) => total + prod.price * prod.quantity, 0)}
          </h2>
          <div className='checkout-clear-cart-container'>
            <button className='checkout-clear-cart-button' onClick={handleClickClear}>
              Vaciar Carrito
            </button>
          </div>
          
          <UserInfo cart={cart} createNewOrder={createNewOrder}/>
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