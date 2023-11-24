import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'

const Wishlist = () => {
  return (
   <>
     <Meta title={"Wishlist"} />
            <Breadcrumb title="Wishlist" />
            <div className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative bg-white ">
                                <img
                                    src="images/cross.svg" 
                                    alt="cross" 
                                    className="position-absolute cross img-fluid" 
                                />
                                <div className="wishlist-card-image ">
                                    <img 
                                    src="images/iwatch.png" 
                                    className='img-fluid w-100' 
                                    alt="watch" 
                                     />
                                </div>
                               <div className='py-3 px-3 '>
                               <h5 className='title'> 
                                   Milanese Loop Watch Band For 42mm/44mm Apple Watch
                                </h5>
                                <h6 className="price">$10.00</h6>
                               </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="wishlist-card position-relative bg-white">
                                <img
                                    src="images/cross.svg" 
                                    alt="cross" 
                                    className="position-absolute cross img-fluid" 
                                />
                                <div className="wishlist-card-image">
                                    <img 
                                    src="images/tab.jpg" 
                                    className='img-fluid w-100' 
                                    alt="watch" 
                                     />
                                </div>
                               <div className='py-3 px-3 '>
                               <h5 className='title'> 
                                    Honor TI 7.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                                </h5>
                                <h6 className="price">$ 100</h6>
                               </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="wishlist-card position-relative bg-white   ">
                                <img
                                    src="images/cross.svg" 
                                    alt="cross" 
                                    className="position-absolute cross img-fluid " 
                                />
                                <div className="wishlist-card-image ">
                                    <img 
                                    src="images/tab3.jpg" 
                                    className='img-fluid w-100 ' 
                                    alt="tab" 
                                     />
                                </div>
                               <div className='py-3 px-3 '>
                               <h5 className='title'> 
                                    Honor TI 7.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                                </h5>
                                <h6 className="price">$ 100</h6>
                               </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative  bg-white">
                                <img
                                    src="images/cross.svg" 
                                    alt="cross" 
                                    className="position-absolute cross img-fluid" 
                                />
                                <div className="wishlist-card-image">
                                    <img 
                                    src="images/headphone.jpg" 
                                    className='img-fluid w-100' 
                                    alt="watch" 
                                     />
                                </div>
                               <div className='py-3 px-3 '>
                               <h5 className='title'> 
                                    Honor TI 7.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                                </h5>
                                <h6 className="price">$ 100</h6>
                               </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
   </>
  )
}

export default Wishlist