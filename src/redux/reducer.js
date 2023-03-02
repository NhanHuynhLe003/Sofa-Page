const initState = {
  search: '',
  myCart: [],
  productData: [],
  MyBill: []
};

const rootReducer = (state = initState, action) => {
  

  switch (action.type) {
    case "Add_To_Cart":
      console.log(action)
      console.log(state.myCart)
      action.payload.amount = 1;
      for (let i = 0; i < state.myCart.length; i++) {
        if (state.myCart[i].id === action.payload.id) {
          state.myCart[i].amount++
          return {
            ...state,
            myCart: [...state.myCart],
          };
        }
      }
      return {
        ...state,
        myCart: [...state.myCart, action.payload],
      };

    case "Remove_In_Cart":
      const cart = [...state.myCart];
      return cart.filter((product, index) => product.id !== action.payload);
    
    case "Search_Product_Text":
        return {
            ...state,
            search: action.payload
        }
    case "Add_To_My_Bill":
        return {
            ...state,
            MyBill: [...state.MyBill, action.payload]
        }
    default:
      return state;
  }
};
export default rootReducer;
