import React from 'react';
import { Link } from 'react-router-dom';
import '../home/home.css'
const featuresData = [
    { title: 'Feature 1', description: 'This is a brief description of feature' },
    { title: 'Feature 2', description: 'This is a brief description of feature' },
    { title: 'Feature 3', description: 'This is a brief description of feature' }
];
const testimonialsData = [
    { name: 'John Doe', quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac odio vel est consequat tincidunt. Ut nec odio neque. Suspendisse potenti.' },
    { name: 'Jane Doe', quote: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi id velit ut tortor volutpat ultrices.' }
];
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
                {featuresData.map((feature, index) => (
                    <div className="feature" key={index}>
                        <h2>{feature.title}</h2>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </section>

            {/* section3 */}
            <section className="testimonials-section">
                {testimonialsData.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <div className="testimonial-content">
                            <h2>{`Testimonial ${index + 1}`}</h2>
                            <p>"{testimonial.quote}"</p>
                            <p>- {testimonial.name}</p>
                        </div>
                    </div>
                ))}
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