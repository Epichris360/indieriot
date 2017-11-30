import React, { Component } from 'react'

export default props => {
    return(
        <div className="col-sm-4">
            <div className="product-1">
                <div className="product__controls">
                    <div className="col-xs-3">
                        <label>Quantity:</label>
                    </div>
                    <div className="col-xs-6">
                        <input type="number" name="quantity" placeholder="QTY" />
                    </div>
                    <div className="col-xs-3 text-right">
                        <button className="checkmark checkmark--cross bg--error"></button>
                    </div>
                </div>
                <img alt="Image" src="img/product-small-8.png" />
                <div>
                    <h5>Canon 550D</h5>
                </div>
                <div>
                    <span className="h4 inline-block">$849 per Ticket</span>
                    <br/>
                    <span className="h4 inline-block">Total: qty*price</span>
                </div>
            </div>
        </div>
    )
}