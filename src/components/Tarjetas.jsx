import Card from "./Card"
import "./Tarjetas.css"
import chainsawman from "../assets/ChainsawmanTomo1.jpg"


//Array de objetos
const productos = [
    {
        id:1,
        nombre:"Chainsawman Tomo 1",
        precio: 4000,
        imagen: chainsawman
    },
    {
        id:2,
        nombre:"Chainsawman Tomo 1",
        precio: 4000 ,
        imagen: chainsawman
    },
    {
        id:3,
        nombre:"Chainsawman Tomo 1",
        precio: 4000,
        imagen: chainsawman
    },
    {
        id:4,
        nombre:"Chainsawman Tomo 1",
        precio: 4000 ,
        imagen: chainsawman
    }
]



const Tarjetas = () => {
  return (
    <div className="container d-flex justify-content-center aling-items-center">
        <div className="row">

            {/* cards es un array de objetos */}
            {productos.map(producto => (
                    <div className="col-md-4 text-center" key={(producto.id)}>
                        <Card titulo={(producto.nombre)} imagen={(producto.imagen)} precio={(producto.precio)} />
                    </div>))}


            {/* <div className="col-md-4 text-center">
                <Card/>
            </div>
            <div className="col-md-4">
                <Card/>
            </div>
            <div className="col-md-4">
                <Card/>
            </div>
            <div className="col-md-4">
                <Card/>
            </div>
            <div className="col-md-4">
                <Card/>
            </div>
            <div className="col-md-4">
                <Card/>
            </div> */}
        </div>
    </div>
  )
}

export default Tarjetas