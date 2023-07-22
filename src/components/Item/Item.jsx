import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img, stock }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <h3>{nombre} </h3>
            <p>Precio: ${precio} </p>
            <p>Stock: {stock} unidades </p>
            <Link to={`/item/${id}`}>Ver detalles</Link>
        </div>
    )
}

export default Item