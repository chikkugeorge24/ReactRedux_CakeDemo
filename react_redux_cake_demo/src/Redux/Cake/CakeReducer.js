import { BUY_CAKE } from "./CakeTypes";

const initialState = {
    numOfCakes: 10
}

const CakeReducer = (state = initialState, action) => {
    const { type } = action;
    switch(type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes -1
            };
        default: return state;
    }
}
export default CakeReducer;