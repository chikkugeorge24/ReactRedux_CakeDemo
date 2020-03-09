import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buy_icecream } from '../Redux/IceCreams/IceCreamActions';
class IceCreamContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { numOfIceCreams, buyIceCream } = this.props;
        return (
            <div className="App">
                <h2> Number of IceCreams -- {numOfIceCreams}</h2>
                <button onClick={buyIceCream}> BUY ICECREAM </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        numOfIceCreams: state.icecream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buy_icecream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer);