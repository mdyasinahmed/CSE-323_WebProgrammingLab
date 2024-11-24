import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Blood Donation</div>
        <ul className="nav-links">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Donate Blood, Save Lives</h1>
          <p>Be a hero! Join our community of life-savers today.</p>
        </div>
        <div className="hero-form">
          <h2>Donor Membership</h2>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="Blood Group (e.g., A+)" required />
            <button type="submit">Join Now</button>
          </form>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          At LifeSaver Blood Donation, we are committed to a noble mission:
          saving lives through the power of community-driven blood donations.
          Every day, thousands of lives are saved thanks to the generosity of
          donors like you. Blood is essential for surgeries, cancer treatments,
          chronic illnesses, and traumatic injuries. Despite advancements in
          medicine, there’s no substitute for human blood, making donors a vital
          part of the healthcare system. We aim to bridge the gap between those
          in urgent need and those willing to help. By creating a safe,
          efficient, and transparent donation network, we ensure a steady supply
          of life-saving blood to hospitals and healthcare centers across the
          nation. Our mission goes beyond donations — we are dedicated to
          raising awareness, educating communities, and building a culture of
          compassion and selflessness. By joining us, you become part of a
          life-changing movement that transforms hope into reality. Let’s make a
          difference together. A single donation can save up to three lives —
          imagine the impact of a lifetime of giving. Together, we can turn
          every drop into a symbol of hope and life. Join us in our mission and
          be a hero to someone in need.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Blood Donation Camps</h3>
            <p>We organize regular blood donation events across the city.</p>
          </div>
          <div className="card">
            <h3>Emergency Blood Supply</h3>
            <p>Providing life-saving blood to hospitals and patients.</p>
          </div>
          <div className="card">
            <h3>Community Support</h3>
            <p>
              Building a community of dedicated blood donors and volunteers.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Blood Donation. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
