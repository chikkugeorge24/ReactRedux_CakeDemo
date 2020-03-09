import { BUY_ICECREAM } from "./IceCreamTypes";

const initialState = {
    numOfIceCreams: 20
}

const IceCreamReducer = (state = initialState, action) => {
    const { type } = action;
    switch(type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams -1
            };
        default: return state;
    }
}
export default IceCreamReducer;