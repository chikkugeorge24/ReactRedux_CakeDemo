import React from "react";
import { useSelector, useDispatch} from 'react-redux';
import { buy_cake } from "../Redux/Cake/CakeAction";
function HooksCakeContainer (){
    const numOfCakes = useSelector( state => state.numOfCakes);
    const dispatch = useDispatch();
    return(
        <div className="App">
            <h2>Number Of Cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buy_cake())}>BUY CAKE </button>
        </div>
    );

}
export default HooksCakeContainer;