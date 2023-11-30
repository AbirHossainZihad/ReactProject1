import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Subscribe from '../component/Subscribe';
import data from "../../public/database/data.json";

const Service = () => {
    return (
        <>
            <div className='service-page-container'>
                <section className='service-hero-section'>
                    <Header />
                    <div className='service-page-show'>
                        <h2>Our Services</h2>
                        <p>Home &gt; <span>Our Services</span></p>
                    </div>
                    <div className='color-div'>
                        <div className='color-div2'></div>
                    </div>
                </section>
                <section className='service-section'>
                    <div className='service-text-div'>
                        <p>Our All Services</p>
                        <h3>We Provide BestWeb design <br />services</h3>
                    </div>
                    <div className='service-img-div sid1'>
                        <div className='st-txt'>
                            <h3>BUILD & LAUNCH WITHOUT PROBLEMS</h3>
                            <p>Increase your team's productivity and save time with a bot that answers and fields customer inquiries</p>
                        </div>
                        <div className='st-img'>
                            <img src={data[3].img1} alt="" className='st1'/>
                            <img src={data[3].img2} alt="" className='st2'/>
                            <img src={data[3].img3} alt="" className='st3'/>
                            <img src={data[3].img4} alt="" className='st4'/>
                        </div>
                    </div>
                    <div className='service-img-div sid2'>
                        <div className='st-txt'>
                            <h3>BUILD & LAUNCH WITHOUT PROBLEMS</h3>
                            <p>Increase your team's productivity and save time with a bot that answers and fields customer inquiries</p>
                        </div>
                        <div className='st-img'>
                            <img src={data[3].img5} alt="" className='st1'/>
                            <img src={data[3].img6} alt="" className='st2'/>
                            <img src={data[3].img7} alt="" className='st3'/>
                            <img src={data[3].img8} alt="" className='st4'/>
                        </div>
                    </div>
                    <div className='service-img-div sid3'>
                        <div className='st-txt'>
                            <h3>BUILD & LAUNCH WITHOUT PROBLEMS</h3>
                            <p>Increase your team's productivity and save time with a bot that answers and fields customer inquiries</p>
                        </div>
                        <div className='st-img'>
                            <img src={data[3].img9} alt="" className='st1'/>
                            <img src={data[3].img10} alt="" className='st2'/>
                            <img src={data[3].img11} alt="" className='st3'/>
                            <img src={data[3].img12} alt="" className='st4'/>
                        </div>
                    </div>
                    <div className='service-img-div sid4'>
                        <div className='st-txt'>
                            <h3>BUILD & LAUNCH WITHOUT PROBLEMS</h3>
                            <p>Increase your team's productivity and save time with a bot that answers and fields customer inquiries</p>
                        </div>
                        <div className='st-img'>
                            <img src={data[3].img13} alt="" className='st1'/>
                            <img src={data[3].img14} alt="" className='st2'/>
                            <img src={data[3].img15} alt="" className='st3'/>
                            <img src={data[3].img16} alt="" className='st4'/>
                        </div>
                    </div>
                </section>
                <Subscribe/>
                <Footer />
            </div>
        </>
    );
};

export default Service;