import { Link } from 'react-router-dom';
import './ProductsCard.css'

export default function ProductsCard ({image, title, price, itemId}) {

  return (
    <article className='product-card'>
      <h3 className='product-card__title'>{title}</h3>
      <img src={image} alt={`Image de ${title}`} className='product-card__image' />
      <p className='product-card__price'>$ {price}</p>
      <Link className='product-card__link'>
          Ver detalles
      </Link>
    </article>
  )
}
