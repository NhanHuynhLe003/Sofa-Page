
let productSelected = localStorage.getItem('productSelected');

const initState = {
  search: '',
  myCart: {
    isEdit: -1,
    listProduct: [],
  },
  productData: [],
  MyBill: productSelected ? JSON.parse(productSelected):{
    user: {
      name: 'Nhan Huynh',
      address: 'abc Street, quan 6, Ho Chi Minh',
      phone: '0789941210'
    },
    userBill: [],
  }
};

const rootReducer = (state = initState, action) => {
  

  switch (action.type) {

    case "Add_To_Cart":
      console.log(state.myCart.listProduct);
      action.payload.amount = 1;
      for (let i = 0; i < state.myCart.listProduct.length; i++) {
        if (state.myCart.listProduct[i].id === action.payload.id) {
          state.myCart.listProduct[i].amount++
          return {
            ...state,
            myCart: {
              ...state.myCart,
              listProduct: [...state.myCart.listProduct]
            },
          };
        }
      }
      return {
        ...state,
        myCart: {
          ...state.myCart,
          listProduct: [...state.myCart.listProduct, action.payload]
        },
      };

    case "Remove_In_Cart":
      const cart = [...state.myCart.listProduct];
      return cart.filter((product, index) => product.id !== action.payload);
    
    case "Search_Product_Text":
        return {
            ...state,
            search: action.payload
        }
    case "Add_To_My_Bill":
        //them key chua bi xoa
        const newBill = {
            ...state,
            MyBill: {
              ...state.MyBill,
              userBill: [...state.MyBill.userBill, action.payload]
            },
            myCart: {
              ...state.myCart,
              listProduct: []
            }
        }
        console.log('userBill:',state.MyBill.userBill);
        localStorage.setItem('productSelected', JSON.stringify(newBill.MyBill));
        return newBill
      case "Edit_My_Bill":
        const curBillSelect = state.MyBill.userBill[action.payload];

        return {
          ...state,
          myCart: {
            ...state.myCart,
            isEdit: action.payload, //chua index cua product
            listProduct: curBillSelect.listProduct
          }
        }

      case "Submit_Edited":
        const billEdited = [...state.MyBill.userBill];
        if(state.myCart.isEdit !== -1){
          billEdited[state.myCart.isEdit] = state.myCart;
        } 
        console.log(billEdited);
        return{
          ...state,
          MyBill: {
            ...state.MyBill,
            userBill: billEdited
          },
          myCart: {
            ...state.myCart,
            isEdit: -1,
            listProduct: []
          },
        }
      case "Delete_Bill":
        let billDeleted = state.MyBill.userBill;
        billDeleted = billDeleted.filter((bill,index) => {
          return index !== action.payload;
        })
        
        const billRemove = {
          ...state,
          MyBill: {
            ...state.MyBill,
            userBill: billDeleted
          }
        }
        localStorage.setItem('productSelected', JSON.stringify(billRemove.MyBill));
        return billRemove
    default:
      return state;
  }
};
export default rootReducer;
