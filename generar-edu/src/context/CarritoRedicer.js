export const initialCarrito = {
  productos: [],
};

export const actionTypes = {
  AGREGAR_AL_CARRITO: "AGREGAR_AL_CARRITO",
  QUITAR_DEL_CARRITO: "QUITAR_DEL_CARRITO",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR_AL_CARRITO":
      return {
        ...state,
        productos: [...state.productos, action.item],
      };
    case "QUITAR_DEL_CARRITO":
      const index = state.productos.findIndex(
        (productosItem) => productosItem.id === action.id
      );
      let newProductos = [...state.productos];
      if (index >= 0) {
        newProductos.splice(index, 1);
      } else {
        console.log("No se pudo eliminar");
      }
      return {
        ...state,
        productos: newProductos,
      };
    default:
      return console.log(state);
  }
};

export default reducer;
