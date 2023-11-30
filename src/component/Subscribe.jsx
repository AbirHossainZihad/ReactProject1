import React from 'react';

const Subscribe = () => {
    return (
        <>
            <section className='subscribe-section'>
                <div className='subscribe-parent'>
                    <div className='sub-text'>
                        <div className='sbt1'>
                            <p>SUBSCRIBE</p>
                            <h3>Subscribe to get the latest <br /> news about us</h3>
                        </div>
                        <span>Please drop your email below to get daily update about what we do</span>
                    </div>
                    <div className='sub-input'>
                        <div className='si-div'>
                            <input type="email" name="" id="" placeholder='Enter Your Email Address'/>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default Subscribe;