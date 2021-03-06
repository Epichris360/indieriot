import React, { Component } from 'react'
import { Link }             from 'react-router-dom'

export default props => {
    return(
        <div className="main-container">
            <section className="height-100 bg--dark text-center">
                <div className="container pos-vertical-center">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="h1--large">404</h1>
                            <p className="lead">
                                The page you were looking for was not found.
                            </p>
                            <Link to="/" >Go back to home page</Link>
                        </div>
                    </div>
                    {/*<!--end of row-->*/}
                </div>
                {/*<!--end of container-->*/}
            </section>
        </div>
    )
}