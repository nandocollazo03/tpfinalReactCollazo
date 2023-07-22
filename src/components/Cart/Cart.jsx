import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to="/" className="iratienda"> Ir a tienda de productos </Link>
            </>
        )
    }
    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3>Monto total: $ {total} </h3>
            <h3> Cantidad de productos : {cantidadTotal}  </h3>
            <button onClick={() => vaciarCarrito()} > Vaciar el carrito </button>
            <Link to="/checkout" className="finalizar"> Finalizar la compra </Link>
        </div>
    )
}

export default Cart