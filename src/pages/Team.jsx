import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Subscribe from '../component/Subscribe';
import data from '../../public/database/data.json';

const Team = () => {
    return (
        <>
            <div className='team-page-container'>
                <section className='team-hero-section'>
            <Header/>
                    <div className='team-page-show'>
                        <h2>Team</h2>
                        <p>Home &gt; <span>Team</span></p>
                    </div>
                    <div className='color-div'>
                        <div className='color-div2'></div>
                    </div>
                </section>
                <section className='teamlist-section'>
                    <div className='tl-text'>
                        <div className='tl-text1'>
                            <p>Our Team Member</p>
                            <h3>Check our awesome team <br />members</h3>
                        </div>
                    </div>
                    <div className='tl-img'>
                        <div className='tl-img-div'>
                            <img src={data[2].img1} alt="image1" />
                            <p>{data[2].name1}</p>
                            <div className='tl-icon'>
                                <div className='tl-icon1'>
                                <img src="images/icons8-facebook-50.png"/>
                                <img src="images/icons8-twitter-50.png"/>
                                <img src="images/icons8-instagram-50.png"/>
                                </div>
                            </div>
                        </div>
                        <div className='tl-img-div'>
                            <img src={data[2].img2} alt="image2" />
                            <p>{data[2].name2}</p>
                            <div className='tl-icon'>
                                <div className='tl-icon1'>
                                <img src="images/icons8-facebook-50.png"/>
                                <img src="images/icons8-twitter-50.png"/>
                                <img src="images/icons8-instagram-50.png"/>
                                </div>
                            </div>
                        </div>
                        <div className='tl-img-div'>
                            <img src={data[2].img3} alt="image3" />
                            <p>{data[2].name3}</p>
                            <div className='tl-icon'>
                                <div className='tl-icon1'>
                                <img src="images/icons8-facebook-50.png"/>
                                <img src="images/icons8-twitter-50.png"/>
                                <img src="images/icons8-instagram-50.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Subscribe/>
            <Footer/>
            </div>  
        </>
    );
};

export default Team;