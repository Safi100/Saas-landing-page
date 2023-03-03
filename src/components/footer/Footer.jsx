import React from 'react';
import './footer.css'
import Messenger from '../../assets/025-messenger.png'
import Linkedin from '../../assets/052-linkedin.png'
import Twitter from '../../assets/096-twitter.png'
import Twoo from '../../assets/097-twoo.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="wrapper">
                <div className="grid">
                    <div>
                        <div className="heading"><span className='square'></span> Financy</div>
                        <p className='footer_paragraph'>Finance helps companies manage payments easily.</p>
                        <div className="social">
                            <img src={Linkedin} alt="Linkedin logo" />
                            <img src={Messenger} alt="Messenger" />
                            <img src={Twitter} alt="Twitter" />
                            <img src={Twoo} alt="Twoo" />
                        </div>
                    </div>
                    <div>
                        <div className='heading'>Company</div>
                        <ul>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div>
                        <div className="heading">Product</div>
                        <ul>
                            <li>Invoicing</li>
                            <li>Contract</li>
                            <li>Accounting</li>
                            <li>Proposal</li>
                        </ul>
                    </div>
                    <div>
                        <div className="heading">Resources</div>
                        <ul>
                            <li>Proposal Template</li>
                            <li>Ivoice Template</li>
                            <li>Tuturoial</li>
                            <li>How to write a contract</li>
                        </ul>
                    </div>
                    <div className='span'>
                        <div className="heading">Join Our Newsletter</div>
                        <form className='footer_form'>
                            <input type="text" placeholder='Your email address' required/>
                            <button className='button'>Subscribe</button>
                        </form>
                        <p className='update_paragraph'>* Will send you weekly updates for your better finance management.</p>
                    </div>
                </div>
                <ul className='social_profile'>
                    <li>Twitter</li>
                    <li>Dribble</li>
                    <li>Instagram</li>
                    <li>YouTube</li>
                    <li>Slack</li>
                </ul>
                <ul className='contact'>
                    <li>2022 All Rights Reserved</li>
                    <span className='line'></span>
                    <li>shakir260@gmail.com</li>
                    <span className='line'></span>
                    <li>+92 300 848 9895</li>
                </ul>
                <p className='copyright'>Made with <span className='heart'>&#10084;</span> by <a href="https://github.com/Safi100" target={'_blank'}>Safi Nafi</a></p>
            </div>
        </div>
    );
}

export default Footer;
