import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom'
import cartIcon from '/public/icon-cart-white.svg'
import './CartWidget.css'

export default function CartWidget (){
  const { cart } = useContext(CartContext);
  
  return(
    <div className='cart-widget-container'>
      <Link to="/" className="cart-widget__icon">
        <img 
          src={cartIcon} 
          alt="cart icon" 
          className='cart-widget__icon-img' />
      </Link>
      {cart.length !== 0 && <p className="cart-widget__item-count">{cart.length}</p>}
    </div>
  )
}