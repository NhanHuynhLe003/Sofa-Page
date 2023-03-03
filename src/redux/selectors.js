//trong useSelector se co san tham so la state
export const myCartSelector = (state) => {return state.myCart};

export const setProductDataSelector = (state) => {
    return state.productData;
}
export const searchProductSelector = (state) => state.search;

export const myBillSelector = state => {
    return state.MyBill;
}