import React from 'react';
import './homepage.css'; // External CSS for styling
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="intro-container">
      <header className="intro-header">
        <h1>Welcome to ChatGPT</h1>
        <p>An advanced AI language model at your service.</p>
      </header>
      <section className="intro-section">
        <div className="intro-feature">
          <h2>Understand & Respond</h2>
          <p>
            ChatGPT can comprehend your queries and provide accurate, natural-sounding responses. Whether it’s casual questions, technical topics, or creative writing, we’ve got you covered.
          </p>
        </div>
        <div className="intro-feature">
          <h2>Learn & Create</h2>
          <p>
            Explore your creativity with ChatGPT. Draft emails, write stories, or learn something new. The possibilities are endless.
          </p>
        </div>
        <div className="intro-feature">
          <h2>Available Anytime</h2>
          <p>
            ChatGPT is always here to assist you. Get real-time responses anytime, anywhere.
          </p>
        </div>
      </section>
      <footer className="intro-footer">
        <p>
          Ready to experience the future of AI? Start exploring ChatGPT now!
        </p>
        <button className="cta-button"><Link to="/chatpage" className="sign-up-link">Get Started</Link></button>
      </footer>
    </div>
  );
};

export default HomePage;
