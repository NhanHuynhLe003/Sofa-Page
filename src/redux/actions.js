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


export const editMyBill = index => {
    return {
        type: 'Edit_My_Bill',
        payload: index
    }
}

export const submitEditMyBill = () => {
    return {
        type: 'Submit_Edited',
    }
}

export const deleteBill = index => {
    return {
        type: 'Delete_Bill',
        payload: index
    }
}



export const deleteProductSelected = (keysCheckBox) => {
    return{
        type: 'Delete_Product_Selected',
        payload: keysCheckBox
    }
}

