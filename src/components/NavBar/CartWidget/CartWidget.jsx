import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom'
import cartIcon from '/public/icon-cart-white.svg'
import './CartWidget.css'

export default function CartWidget (){
  const { cart } = useContext(CartContext);

  const totalItemsInCart = cart.reduce((total, prod) => total + prod.quantity, 0);
  
  return(
    <div className='cart-widget-container'>
      <Link to="/cart" className="cart-widget__icon">
        <img 
          src={cartIcon} 
          alt="cart icon" 
          className='cart-widget__icon-img' />
      </Link>
      {totalItemsInCart !== 0 && <p className="cart-widget__item-count">{totalItemsInCart}</p>}
    </div>
  )
}