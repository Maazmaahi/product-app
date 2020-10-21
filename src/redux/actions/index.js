export const incrementCart = id => {
    return {
        type: 'INCREMENT',
        payload: id
    }
}
export const decrementCart = id => {
    return {
        type: 'DECREMENT',
        payload: id
    }
}
