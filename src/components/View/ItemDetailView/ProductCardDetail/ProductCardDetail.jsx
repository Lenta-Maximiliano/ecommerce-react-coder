import Contador from '../Contador/Contador'
import './ProductCardDetail.css'

export default function ProductCardDetail ( { product } ){
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
			<Contador className='contador'/> 
			{/* <div className='item-detail__buy-button-container'> */}
        <button className='item-detail__buy-button'>Comprar</button>
      {/* </div> */}

      {/* {isAdded && (
        <Link to="/cart" className='item-detail__checkout-button'>
          Terminar mi compra
        </Link>
      )} */}
    </article>
	)
}