import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Subscribe from '../component/Subscribe';
import data from "../../public/database/data.json"

const Project = () => {
    return (
        <>
            <div className='project-page-container'>
                <section className='project-hero-section'>
                <Header />
                    <div className='project-page-show'>
                        <h2>All Project</h2>
                        <p>Home &gt; <span>All Project</span></p>
                    </div>
                    <div className='color-div'>
                        <div className='color-div2'></div>
                    </div>
                </section>   
                <section className='project-section'>
                    <div className='pro-txt-div'>
                        <p>ALL PROJECT</p>
                        <h3>Better Agency/SEO Solution At Your Fingertips</h3>
                    </div>
                    <div className='pro-img-div pt1'>
                        <img src={data[4].img1} alt="" />
                        <p>Lorem ipsum dolor sit consectutar</p>
                    </div>
                    <div className='pro-img-div pt2'>
                        <img src={data[4].img2} alt="" />
                        <p>Lorem ipsum dolor sit consectutar</p>
                    </div>
                    <div className='pro-img-div pt3'>
                        <img src={data[4].img3} alt="" />
                        <p>Lorem ipsum dolor sit consectutar</p>
                    </div>
                    <div className='pro-img-div pt4'>
                        <img src={data[4].img4} alt="" />
                        <p>Lorem ipsum dolor sit consectutar</p>
                    </div>
                    <div className='pro-img-div pt5'>
                        <img src={data[4].img5} alt="" />
                        <p>Lorem ipsum dolor sit consectutar</p>
                    </div>
                    <div className='pro-img-div pt6'>
                        <img src={data[4].img6} alt="" />
                        <p>Lorem ipsum dolor sit consectutar</p>
                    </div>
                </section>
            <Subscribe/>
            <Footer/>
            </div>
        </>
    );
};

export default Project;