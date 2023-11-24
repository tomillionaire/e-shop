import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'

const Checkout = () => {
  return (
   <>
     {/* <Meta title={"Cart"} />
    <Breadcrumb title="Cart" /> */}
    <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="continer-xxl">
            <div className="row">
                <div className="col-7">
                    <div className="checkout-left-data">
                        <h3 className='website-name'>Tomillionaire</h3>
                        <nav 
                            style={{"--bs-breadcrumb-divider": '>'}}
                            aria-label="breadcrumb"
                        >
                            <ol className='breadcrumb'>
                                <li className="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                &nbsp;/
                                <li className="breadcrumb-item active" aria-current="page">
                                    Library
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="col-5"></div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Checkout