import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Subscribe from '../component/Subscribe';
import data from "../../public/database/data.json";

const Testimonial = () => {
    return (
        <>
            <div className='testimonial-page-container'>
                <section className='testimonial-hero-section'>
                <Header />
                    <div className='testimonial-page-show'>
                        <h2>Testimonial List</h2>
                        <p>Home &gt; <span>Testimonial List</span></p>
                    </div>
                    <div className='color-div'>
                        <div className='color-div2'></div>
                    </div>
                </section>   
                <section className='testimonial-section'>
                    <div className='tes-txt-div'>
                        <p>Testimonial List</p>
                        <h3>Better Agency/SEO Solution At Your Fingertips</h3>
                    </div>
                    <div className='tes-img-div tt1'>
                        <img src={data[5].img1} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                        <h4>Alice Bradley</h4>
                        <span>Backend Developer</span>
                    </div>
                    <div className='tes-img-div tt2'>
                        <img src={data[5].img2} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                        <h4>Alice Bradley</h4>
                        <span>Backend Developer</span>
                    </div>
                    <div className='tes-img-div tt3'>
                        <img src={data[5].img3} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                        <h4>Alice Bradley</h4>
                        <span>Backend Developer</span>
                    </div>
                    <div className='tes-img-div tt4'>
                        <img src={data[5].img4} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                        <h4>Alice Bradley</h4>
                        <span>Backend Developer</span>
                    </div>
                    <div className='tes-img-div tt5'>
                        <img src={data[5].img5} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                        <h4>Alice Bradley</h4>
                        <span>Backend Developer</span>
                    </div>
                    <div className='tes-img-div tt6'>
                        <img src={data[5].img6} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                        <h4>Alice Bradley</h4>
                        <span>Backend Developer</span>
                    </div>
                </section>
            <Subscribe/>
            <Footer/>
            </div>
        </>
    );
};

export default Testimonial;