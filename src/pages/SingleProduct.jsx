import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from 'react-rating-stars-component'
import { useState } from 'react'
import ReactImageZoom from 'react-image-zoom'
import watch from '../'
import Color from '../components/Color'
import {TbGitCompare} from 'react-icons/tb'
import {AiOutlineHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom'



const SingleProduct = () => {
    const props = { 
        width: 400, 
        height: 600, 
        zoomWidth: 600, 

        img:"https://m-cdn.phonearena.com/images/articles/364699-image/large-1.jpg"
    }

    const [orderedProduct, setOrderedProduct] = useState(true)
    return (
        <>
            <Meta title={"Product Name"} />
            <Breadcrumb title="Product Name" />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15 ">
                                <div><img src="https://m-cdn.phonearena.com/images/articles/364699-image/large-1.jpg" className='img-fluid' alt="" /></div>
                                <div><img src="https://m-cdn.phonearena.com/images/articles/364699-image/large-1.jpg" className='img-fluid' alt="" /></div>
                                <div><img src="https://m-cdn.phonearena.com/images/articles/364699-image/large-1.jpg" className='img-fluid' alt="" /></div>
                                <div><img src="https://m-cdn.phonearena.com/images/articles/364699-image/large-1.jpg" className='img-fluid' alt="" /></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className='border-bottom '>
                                <h3 className='title'>Kids Headphones Bulk 10 Pack Multi Colored For Students</h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">$ 100</p>
                                    <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className="mb-0 t-review"> (2 Reviews)</p>
                                    </div>
                                    <a className='review-btn' href="#review">Write a Review</a>
                                </div>
                                <div className="border-bottom py-3">
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Type :</h3> 
                                        <p className='product-data'>Smartwatch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Brand :</h3> 
                                        <p className='product-data'>Apple</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Category :</h3> 
                                        <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Tags :</h3>
                                        <p className='product-data'>Smartwatch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Availability :</h3>
                                        <p className='product-data'>In Stock</p>
                                    </div>
                                    <div className='d-flex gap-10 flex-column  mt-2 mb-3'>
                                        <h3 className='product-heading'>Size :</h3>
                                       <div classname='d-flex flex-wrap gap-15'>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                                       </div>
                                    </div>
                                    <div className='d-flex gap-10 flex-column  mt-2 mb-3'>
                                        <h3 className='product-heading'>Color :</h3>
                                        <Color/>
                                    </div>
                                    <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                                        <h3 className='product-heading'>Quantity :</h3>
                                        <div className=''>
                                            <input
                                             type="number" 
                                             name="" 
                                             min={1}
                                             max={10}
                                             className='form-control'
                                             style={{width: '70px'}} 
                                             id="" 
                                             />
                                        </div>
                                        <div className='d-flex align-items-center gap-30 ms-5'>
                                        <button className='button border-0' type='submit' >Add to Cart</button>
                                        <button className='button signup'>Buy It Now</button>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-15'>
                                        <div>
                                            <a href=""> <TbGitCompare fs-5 me-2 />Add to Compare</a>
                                        </div>
                                        <div>
                                            <a href=""> <AiOutlineHeart fs-5 me-2 />Add to Wishlist</a>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Shipping & Returns </h3> 
                                        <p className='product-data'>
                                            Free shipping and returns available on all orders! <br />
                                             We ship all US domestic orders within <b>5-10 business days!</b>
                                        </p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Copy Product Link </h3> 
                                        <p className='product-data'>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                        <h4>Description</h4>
                            <div className='bg-white p-3'>
                                <p>
                                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                  Consectetur deserunt voluptatum asperiores rerum nulla soluta
                                   maiores eaque, aut sed reprehenderit repudiandae aperiam officiis
                                    recusandae porro adipisci? Sapiente beatae blanditiis veritatis quia
                                     corporis assumenda quis molestiae. Velit veritatis laborum facilis optio 
                                     expedita fuga nulla? Reiciendis,
                                   quibusdam iure? Natus voluptatum aspernatur placeat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section  className='reviews-wrapper home-wrapper-2'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 id='review'>Reviews</h3>
                           <div className="review-inner-wrapper">
                           <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4  className='mb-2'>Customer Reviews</h4>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>Based on 2 Reviews</p>
                                    </div>
                                </div> 
                               {orderedProduct && (
                                 <div>
                                    <a className='text-dark text-decoration-underline' href="">Write a Review</a>
                                 </div>
                                )}
                            </div>
                            <div  className="review-form py-4">
                                <h4>Write a Review</h4>
                            <form action="" className='d-flex flex-column gap-15'>
                                <div>
                                <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={true}
                                            activeColor="#ffd700"
                                        />
                                </div>
                  
                  <div>
                    <textarea 
                      name="" 
                      id="" 
                      className='w-100 form-control' 
                      cols="30" 
                      rows="4"
                      placeholder='Comments'
                    ></textarea>
                  </div>

                  <div className="d-flex justify-content-end">
                    <button className='button border-0'>Submit Review</button>
                  </div>
                </form>
                            </div>
                            <div className="reviews mt-4">
                                <div className="review ">
                                <div className='d-flex gap-10 align-items-center'>
                                    <h6 className='mb-0' >Meelorla</h6>
                                    <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        /> 
                                </div>
                                <p className='mt-3'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                     Reiciendis, possimus voluptates aliquam sit ducimus sed quae natus ex quis 
                                     ipsam animi corrupti omnis mollitia officiis
                                      earum debitis rerum aperiam sint!
                                </p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='section-heading'>Our Popular Products</h3>
                        </div>

                    </div>
                    <div className="row">

                        <ProductCard />

                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct