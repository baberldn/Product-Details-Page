import { useLocation, Link } from 'react-router-dom';

export default function ProductDetails() {
  const location = useLocation(); 
  const { product } = location.state || {}; 

  if (!product) {
    return  
  }


  return (
    <div>
         <Link to="/" >Back home</Link> 
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>${product.id}</h3>
          <img src={product.image} width='100' />
        </div>
      )}
    </div>
  )
}
