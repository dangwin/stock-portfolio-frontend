import React, {Component} from 'react';
import { connect } from 'react-redux';


class PortfolioTotal extends Component {

computeBalance = (stocks) => {
    return stocks.reduce((total, stock) =>
    total + (stock.current_price * stock.quantity), 0);
}

    render(){
        return (
            <div id = 'Portfolio-Total'>

                 <h1> Portfolio Total: ${this.computeBalance(this.props.stocks).toFixed(2)} </h1>
            
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        stocks: state.stocks.stocks
    };
}

export default connect(mapStateToProps)(PortfolioTotal);