import React, { Component } from 'react'
import Nav                  from './Nav'
import { Item, Footer, 
    WarningAlert }     from '../presentation'
import { connect }          from 'react-redux'
import actions              from '../../actions'

class SalesColumns extends Component{
    constructor(props){
        super(props)
        this.state = { err: false, errMessage:'' }
    }
    componentDidMount(){
        this.props.notTransparent()
        this.props.getConcerts({ isActive: 'true' })
        .then(data => {
            this.props.notTransparent()
            return
        })
        .then( () => {
            this.props.getCart({ user_id: this.props.user.id })
            .then(data => {
                this.props.notTransparent()
                return
            })
            this.props.notTransparent()
            return
        })
        .catch(err => {
            this.props.notTransparent()
            this.setState({ err:true, errMessage:err.message })
            return
        })
    } 
    addToCart(concert){
        console.log('super orig', this.props.cart.concerts)
        const origCart = Object.assign( {} ,this.props.cart, {})
        let cart = Object.assign( {}, this.props.cart, {} )
        cart.concerts.push(concert)
        console.log('origCart', origCart.concerts )
        console.log('cart',cart.concerts )
    }
    closeAlert(){
        this.setState({err: false, errMessage:'' })
    }
    render(){
        const concerts = this.props.concerts
        return(
            <div>
                <div style={{ height:'60px' }}></div>
                <div className="main-container" >

                    <section className="switchable switchable--switch space--xs">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="height-50 imagebg border--round" data-overlay="2">
                                        
                                        <div className="background-image-holder" 
                                            style={{ backgroundImage: "url('/dist/img/mix-img.jpg')", opacity: 1 }}>
                                            <img alt="background" src="/dist/img/mix-img.jpg" />
                                        </div>
                                        <div className="pos-vertical-center col-sm-6 col-md-5 col-md-offset-1">
                                            <h2>Need a Good Time? You've Got it!</h2>
                                            <p className="lead">
                                                Get Ready for it. Hurry up before they make it big, so you can say that you knew them before they were cool.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<!--end of row-->*/}
                        </div>
                        {/*<!--end of container-->*/}
                    </section>

                    <section className="space--sm">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    {
                                        this.state.err ? 
                                        <WarningAlert close={this.closeAlert.bind(this)} 
                                            errMessage={this.state.errMessage}/> : null
                                    }
                                    <div className="masonry masonry--tiles">
                                        <div className="masonry-filter-container">
                                            {/*<span>Category:</span>
                                            <div className="masonry-filter-holder">
                                                <div className="masonry__filters" data-filter-all-text="All Categories"></div>
                                            </div>*/}
                                        </div>
                                        <div className="row">
                                            <div className="masonry__container masonry--active"
                                                style={{position:'relative', height:'1130.12px'}} >
                                                <div className="masonry__item col-sm-4"></div>
                                                {
                                                    concerts.map( (con,i) => {
                                                        return(
                                                            <Item con={con} key={i} 
                                                                addToCart={this.addToCart.bind(this, con) }
                                                            />
                                                        )
                                                    })
                                                } 
                                            </div>
                                            {/*<!--end masonry container-->*/}
                                        </div>
                                    {/*<!--end of row-->*/}
                                    </div>
                                    {/*<!--end masonry-->*/}
                                </div>
                            </div>
                            {/*<!--end of row-->*/}
                        </div>
                        {/*<!--end of container-->*/}
                    </section>
                    
                    <Footer />

                </div>
            </div>
        )
    }
}

const stateToProps = state => {
    const { concerts, user, cart } = state
    return{
        concerts, user, cart
    }
}

const dispatchToProps = dispatch => {
    return{
        getConcerts: params => dispatch( actions.getAllConcertsActive(params) ),
        notTransparent: () => dispatch( actions.navBarNotTransparent() ),
        getCart: params => dispatch( actions.getCart(params) )
    }
} 

export default connect(stateToProps, dispatchToProps)(SalesColumns)