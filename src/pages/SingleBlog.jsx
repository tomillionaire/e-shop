import React from 'react'
import {HiOutlineArrowLeft} from 'react-icons/hi'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import blog from '../images/blog-1.jpg'


const SingleBlog = () => {
  return (
<>
<Meta title={"Dynamic Blog Name"} />
<Breadcrumb title="Dynamic Blog Name" />

<div className="blog-wrapper home-wrapper-2 py-5 ">
        <div className="container-xxl">
            <div className="row">
             <div className="col-12">
                <div className="single-blog-card">
                    <Link to='/blog'>
                        <HiOutlineArrowLeft/>Go back to Blogs
                    </Link>
                    <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
                    <img 
                        src={blog}
                        className='img-fluid w-100 my-4'
                        alt="blog" 
                    />
                    <p>
                        You're only as good as your last collection, 
                        which is an normous pressure. I think there is something about luxury - it's not something people need, but it's what they want. It really pulls at their heart. 
                        I have a fantastic relationship with money. Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Ullam dolores quod obcaecati alias, 
                        nihil sunt quas ipsum atque velit consectetur!
                    </p>
                </div>
             </div>
            </div>
        </div>
    </div>
</>
  )
}

export default SingleBlog