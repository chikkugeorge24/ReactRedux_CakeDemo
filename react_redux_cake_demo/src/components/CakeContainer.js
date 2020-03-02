import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buy_cake } from '../Redux/Cake/CakeAction';
class CakeContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { numOfCakes, buyCake } = this.props;
        console.log(numOfCakes)
        return (
            <div className="App">
                <h2> Number of Cakes -- {numOfCakes}</h2>
                <button onClick={buyCake}> BUY CAKE </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buy_cake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);