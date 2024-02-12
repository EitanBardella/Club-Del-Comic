import { createContext, useState } from "react";

//Contexto del carrito
const CartContext = createContext();


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const agregarProducto = (productoNuevo)=>{

        const condicion = productoEnElCarrito(productoNuevo.id)

        if(condicion){
            //Cambiar solamente la cantidad
            //C/prod del cart tiene el nombre de prodCart
            const prodMod=cart.map((prodCart)=>{
                //Condicion para ver que prod tiene igual id, y mod su cant
                if (prodCart.id === productoNuevo.id){
                    return{...prodCart, cantidad:prodCart.cantidad + productoNuevo.cantidad}
                } else {
                    return prodCart
                }
            })
            setCart(prodMod)
        } else{
            //Añadirlo como un producto nuevo
            setCart([...cart, productoNuevo])
        }

        console.log(productoNuevo)
    }

    const productoEnElCarrito = (idProducto)=>{
        //.some evalua una condicion y si en algun momento se cumple devuelve true
        const rta = cart.some((producto)=>producto.id === idProducto)
        return(rta)
    }



    //Contador de la cantidad total
    const cantidadTotal = ()=>{
        //Reduce suma las cantidades de los objetos iterando
        //Total es el ac
        //producto individual
        //El valor final 0 es el valor inicial de total
        return cart.reduce((total, product) => total + product.cantidad, 0);

    }

    const clearProducto = (idProducto) => {
        const productosFiltrados = cart.filter((producto)=> producto.id !== idProducto)
        setCart(productosFiltrados)
    }

    //PRecio separado
    //Precio total
        

    const precioTotal=()=>{
        return cart.reduce((total, producto)=> total + (producto.cantidad * producto.precio) , 0 )
    }
    //FUncion para limpiar el carrito
    const clear = ()=>{
        setCart([])
    }

    console.log(cart)
    console.log(cantidadTotal())
    return(
        //.Provider es para proveer funciones y componentes
        <CartContext.Provider  value={{cart, agregarProducto,cantidadTotal, clear, clearProducto,precioTotal,}}>
            { children }
        </CartContext.Provider>
    )
}
export {CartContext,CartProvider};