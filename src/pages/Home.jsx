import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import '../../public/style/index.css'
import Subscribe from '../component/Subscribe';
import data from '../../public/database/data.json';

const Home = () => {
    return (
        <div className='container'>
            <section className='hero-section'>
            <Header/>
                    <div className='hero-text'>
                        <div className='header-text-content'>
                            <h1>Increase Your <br/>Customers Loyalty <br/>and Satisfaction</h1>
                            <p>We help businesses like yours earn more customers, standout from competitors,  make more money</p>
                        </div>
                        <div className='header-cta'>
                            <button>Get Started</button>
                        </div>
                    </div>
                    <div className='hero-img'>
                        <img src="images/Rectangle 1241.png" alt="rectangle1241" />
                        <img src="images/Rectangle 1242.png" alt="rectangle1242" />
                        <img src="images/Rectangle 1243.png" alt="rectangle1243" />
                        <img src="images/Rectangle 1244.png" alt="rectangle1244" />
                    </div>
                    <div className='hero-partner'>
                        <div className='hero-partner-group'>
                            <img src="images/logos_google.png" alt="google logo" />
                            <img src="images/Trello-logo-blue 1.png" alt="trello logo" />
                            <img src="images/logos_monday.png" alt="monday logo" />
                            <img src="images/Notion.png" alt="notion logo" />
                            <img src="images/Slack.png" alt="slack logo" />
                        </div>
                    </div>
            </section>
            <section className='worklist-section'>
                <div className='worklist-parent'>
                    <div className='worklist-text'>
                        <p>WORK LIST</p>
                        <h2>We provide the Perfect Solution to your business growth</h2>
                    </div>
                    <div className='worklist-icons'>
                        <div className='wli-div'>
                            <div className='wli-text'>
                                <div className='wli-img'>
                                    <img src="images/Activity.png" alt="activity logo" />
                                </div>
                                <div className='wli-text-div'>
                                <h3>Grow Your Business</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, molestiae!</p>
                                </div>
                            </div>
                            <div className='wli-btn-div'>
                            <a>Learn More <img src="images/Vector.png" alt="arrow logo" /></a>
                            </div>
                        </div>
                        <div className='wli-div'>
                            <div className='wli-text'>
                                <div className='wli-img'>
                                    <img src="images/Heart.png" alt="heart logo" />
                                </div>
                                <div className='wli-text-div'>
                                <h3>Improve brand loyalty</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, molestiae!</p>
                                </div>
                            </div>
                            <div className='wli-btn-div'>
                            <a>Learn More <img src="images/Vector.png" alt="arrow logo" /></a>
                            </div>
                        </div>
                        <div className='wli-div'>
                            <div className='wli-text'>
                                <div className='wli-img'>
                                    <img src="images/Work.png" alt="work logo" />
                                </div>
                                <div className='wli-text-div'>
                                <h3>Improve Bussiness Model</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, molestiae!</p>
                                </div>
                            </div>
                            <div className='wli-btn-div'>
                            <a>Learn More <img src="images/Vector.png" alt="arrow logo" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='starlist-section'>
                <div className='starlist-parent'>
                    <div className='starlist'>
                        <div className='stl-prnt'>
                        <div className='starlist-text'>
                            <div className='stl-img'>
                            <img src="images/Group 3.png" alt="group logo" />
                            </div>
                            <h3>{data[0].followers}</h3>
                            <p>Followers</p>
                        </div>
                        </div>
                    </div>
                    <div className='starlist'>
                        <div className='stl-prnt'>
                        <div className='starlist-text stl2'>
                            <div className='stl-img'>
                            <img src="images/Like.png" alt="like logo" />
                            </div>
                            <h3>{data[0].projects}</h3>
                            <p>Solved Problems</p>
                        </div>
                        </div>
                    </div>
                    <div className='starlist'>
                        <div className='stl-prnt'>
                        <div className='starlist-text stl2'>
                            <div className='stl-img'>
                            <img src="images/Happy 1.png" alt="happy logo" />
                            </div>
                            <h3>{data[0].happyCustomers}</h3>
                            <p>Happy Customers</p>
                        </div>
                        </div>
                    </div>
                    <div className='starlist'>
                        <div className='stl-prnt'>
                        <div className='starlist-text'>
                            <div className='stl-img'>
                            <img src="images/Scan 3.png" alt="scan logo" />
                            </div>
                            <h3>{data[0].projects}</h3>
                            <p>Projects</p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='feature-section'>
                    <p className='ft-text1'>Featured Project</p>
                    <h3 className='ft-text2'>We provide the Perfect Solution <br />to your business growth</h3>
                <div className='frame'>
                    <div className='frame-parent'>
                        <div className='big-frame fs1'>
                            <img src={data[1].img1} alt="mask image" />
                            <span>App Design - June 20, 2022</span>
                            <h4>App Redesign</h4>
                        </div>
                        <div className='fs-parent'>
                            <div className='frame-same fs2'>
                                <img src={data[1].img2} alt="mask image" />
                                <span>App Design - June 20, 2022</span>
                                <h4>Redesign channel website landng page</h4>
                            </div>
                            <div className='frame-same fs3'>
                                <img src={data[1].img3} alt="mask image" />
                                <span>App Design - June 20, 2022</span>
                                <h4>Redesign channel website landng page</h4>
                            </div>
                            <div className='frame-same fs4'>
                                <img src={data[1].img4} alt="mask image" />
                                <span>App Design - June 20, 2022</span>
                                <h4>Redesign channel website landng page</h4>
                            </div>
                            <div className='frame-same fs5'>
                                <img src={data[1].img5} alt="mask image" />
                                <span>App Design - June 20, 2022</span>
                                <h4>Redesign channel website landng page</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Subscribe/>
            <Footer/>
        </div>
    );
};

export default Home;