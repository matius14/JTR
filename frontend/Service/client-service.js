
const listaProductos = () => fetch("http://127.0.0.1:8000/reserva/producto/").then((respuesta) => respuesta.json());




export const clientService = {
    listaProductos,
};
