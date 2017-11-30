import React, { Component } from 'react'
import { connect }          from 'react-redux'
import actions              from '../../actions'
import { CartItem }         from '../presentation'

class Cart extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    componentDidMount(){
        this.props.notTransparent()
    }
    render(){
        const cartConcerts = this.props.cart.concerts || []
        return(
            <div className="main-container">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1>Cart Overview</h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <form className="cart-form">
                            <div className="row">
                               {
                                   cartConcerts.map( (con, i) => {
                                       return(
                                           <CartItem key={i} />
                                       )
                                   })
                               }ertex/indieriot-lkn1xb
                            </div>
                            <div className="row mt--2">
                                <div className="col-sm-12">
                                    <div className="boxed boxed--border cart-total">
                                        <div>
                                            <div className="col-xs-6">
                                                <span className="h5">Cart Total:</span>
                                            </div>
                                            <div className="col-xs-6 text-right">
                                                <span>$989.98</span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <div className="col-xs-6">
                                                <span className="h5">Total:</span>
                                            </div>
                                            <div className="col-xs-6 text-right">
                                                <span className="h5">$989.98</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/*<!--end of row-->*/}
                            <div className="row">
                                <div className="col-md-2 col-md-offset-10 text-right text-center-xs">
                                    <button type="submit" className="btn btn--primary">Proceed &raquo;</button>
                                </div>
                            </div>
                            {/*<!--end of row-->*/}
                        </form>
                        {/*<!--end cart form-->*/}
                    </div>
                    {/*<!--end of container-->*/}
                </section>
            </div>
        )
    }
}

const stateToProps = state => {
    //get items from cart collection for this user
    const { user, cart } = state
    return{
        user, cart
    }
}

const dispatchToProps = dispatch => {
    return{
        notTransparent: () => dispatch( actions.navBarNotTransparent() )
    }
}

export default connect(stateToProps, dispatchToProps)(Cart)