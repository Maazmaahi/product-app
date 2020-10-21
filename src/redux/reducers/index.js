import SHOP_DATA from "../../constants/productList";

const initialState = {
    collections: SHOP_DATA,
    cartNumber: 0,
    isLoading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const updateId = action.payload;
            const updateCollections = state.collections.map(collection => {
                if(collection.id === updateId) {
                    collection.isAdd = false;
                    return collection;
                }
                return collection;
            })
            return {
                cartNumber: state.cartNumber + 1,
                collections: updateCollections,
            }
        case 'DECREMENT':
            const id = action.payload;
            const updateDcCollections = state.collections.map(collection => {
                if(collection.id === id) {
                    collection.isAdd = true;
                    return collection;
                }
                return collection;
            })
            return {
                cartNumber: state.cartNumber - 1,
                collections: updateDcCollections,
            }
        default:
            return state
    }
}
export default reducer;
