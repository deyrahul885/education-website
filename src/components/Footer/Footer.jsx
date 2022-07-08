import React from 'react'
import '../Footer/footer.css'
import icon from '../../assests/images/online-course.png'

const Footer = () => {
  return (
    <>
    <footer className='footer-section'>
      <div className='container'>
        <div className='row justify-content-between'>
            <div className="col-sm-6 col-md-4 col-xl-3">
              <div className='single-footer-widget footer_1'>
                <a href='/'>
                <img src={icon} alt="" width="60" height="70" className="d-inline-block align-text-top"/>
                   Educare
                </a>
                <p>Online education is any type of learning that occurs through the internet </p>
                <p> Online Education Program Profiles can help you make the right decision.</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-3">
            <div className='single-footer-widget footer_2'>
                <h4>Newsletter</h4>
                <p>Provides current and useful news on education technology, including advice on how it should be used </p>
                <form action='#'>
                  <div className='input-group mb-3'>
                    <div className="search">
                      <input type="text" placeholder="Search" />
                      <button className="btn">Search</button>
                    </div>
                  </div>
                </form>       
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-3">
            <div className='single-footer-widget footer_2'>
                <h4>Contact Us</h4>
                <p><span>Address :</span> 32B Housing Colony</p>
                <p><span>Phone :</span>(+91) 8210231091</p>
                <p><span>Email :</span>educare@gmail.com</p>
              </div>
            </div>

        </div>
      </div>
      <hr/>
      <div className='row text-center'>
        <div className='col-lg-12'>
        <div className='copy-write text'>
        <p>
        Copyright ©2022 All rights reserved | This template is made by theMarkups
        </p>
      </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer