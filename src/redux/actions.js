export const addToCart = newProduct => {
    return {
        type: 'Add_To_Cart',
        payload: newProduct
    }
}

export const setProductData = data => {
    return {
        type: 'Set_Product_Data',
        payload: data
    }
}

export const removeInCart = productId => {
    return {
        type: 'Remove_In_Cart',
        payload: productId
    }
}

export const searchProductText = text => {
    return {
        type: 'Search_Product_Text',
        payload: text
    }
}

export const addToMyBill = listProduct => {
    return {
        type: 'Add_To_My_Bill',
        payload: listProduct,
    }
}

