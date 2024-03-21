import React from 'react';
import { Link } from 'react-router-dom';
import '../home/home.css'
const HeroSection = () => {

    return (
        <>
            <section>
                <div className="hero-section">
                    <div className="hero-content">
                        <h1>Welcome to Our Website</h1>
                        <p>Discover amazing content and services.</p>
                        <Link to="/blog">
                            <button >Get Started</button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* section2 */}
            <section className="features-section">
                <div className="feature">
                    <h2>Feature 1</h2>
                    <p>This is a brief description of feature 1.</p>
                </div>
                <div className="feature">
                    <h2>Feature 2</h2>
                    <p>This is a brief description of feature 2.</p>
                </div>
                <div className="feature">
                    <h2>Feature 3</h2>
                    <p>This is a brief description of feature 3.</p>
                </div>
            </section>

            {/* section3 */}
            <section className="testimonials-section">
                <div className="testimonial">
                    <h2>Testimonial 1</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac odio vel est consequat tincidunt. Ut nec odio neque. Suspendisse potenti."</p>
                    <p>- John Doe</p>
                </div>
                <div className="testimonial">
                    <h2>Testimonial 2</h2>
                    <p>"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi id velit ut tortor volutpat ultrices."</p>
                    <p>- Jane Doe</p>
                </div>
            </section>
            {/* <section><Test name="chandu" /></section> */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-column">
                        <h3>About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac odio vel est consequat tincidunt.</p>
                    </div>
                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/Home">Home</Link></li>
                            <li><Link to="/Blog">About</Link></li>
                            <li><Link to="/Service">Services</Link></li>
                            <li><Link to="/ContactForm">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Contact Us</h3>
                        <p>Email: info@example.com</p>
                        <p>Phone: +1234567890</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Chandu Varma.K. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default HeroSection;