import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">MyReactSite</div>
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
            <a href="#comments">Clients</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <h1>Welcome to My React Website</h1>
        <p>Your one-stop solution for awesome web designs</p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam debitis voluptatum sed, ab aliquid cumque ut tempore, itaque ea temporibus dolorum ullam quae reprehenderit nam dicta voluptatibus doloribus sit odit ratione quisquam totam. Reprehenderit maiores ea odio laboriosam, nemo numquam qui nostrum? Accusamus, architecto? Temporibus sint molestias eveniet praesentium, maiores maxime nesciunt, corrupti molestiae saepe aspernatur quasi voluptates. Molestias asperiores sequi nisi, eum cum aut consectetur corporis alias voluptates doloremque rem tenetur sapiente iure ex vel quaerat eveniet placeat esse iste, reprehenderit eaque dignissimos ipsum. Provident iste nesciunt unde obcaecati odio possimus temporibus ducimus labore incidunt, qui hic libero voluptatem tenetur quo modi nobis ipsum maxime? Ad itaque assumenda doloribus reprehenderit corrupti id quidem corporis ducimus? Blanditiis accusamus sequi odio cumque deserunt voluptates voluptatibus, reiciendis aliquam ea delectus provident est consectetur et itaque odit illo, minus quasi dicta dolorum nam animi ipsa fugit atque? Ratione rem nihil amet. Nulla consequuntur ad praesentium? Quibusdam aperiam dolor, tenetur architecto officiis incidunt voluptatum nesciunt animi error consequuntur autem facere possimus reprehenderit repellat eos, quae rerum expedita pariatur odit quidem et ullam quo explicabo! Debitis, sunt nisi voluptate unde est tempore deserunt hic obcaecati. Id optio quasi corrupti dolorum ullam quidem blanditiis asperiores aperiam?
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <img src="https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?t=st=1732442486~exp=1732446086~hmac=3447c876fbeabf9085c3b6b1c8b3f8dd00b5874e79a898a610a51542df344430&w=996" alt="Web Design" />
            <h3>Web Design</h3>
            <p>Create beautiful and responsive websites.</p>
          </div>
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdxxNvX0UDxKRBuRe9U7UrwkonpRLGz0nuA&s" alt="Development" />
            <h3>Development</h3>
            <p>Build scalable and performant applications.</p>
          </div>
          <div className="card">
            <img src="https://img.freepik.com/free-vector/seo-optimization-banner_33099-1690.jpg?t=st=1732442558~exp=1732446158~hmac=6985cd1c1e262ebd7da209186ac19231e9c599851bf625a3401f71024d68b373&w=996" alt="SEO" />
            <h3>SEO</h3>
            <p>Optimize your website for search engines.</p>
          </div>
        </div>
      </section>

{/* Comments Section */}
<section className="comments">
  <h2>What Our Clients Say</h2>
  <div className="comment-carousel">
    <div className="comment-item">
      <p>"This service is outstanding! Highly recommend."</p>
      <h4>- John Doe</h4>
    </div>
    <div className="comment-item">
      <p>"Professional and reliable team. Exceptional work!"</p>
      <h4>- Jane Smith</h4>
    </div>
    <div className="comment-item">
      <p>"They exceeded my expectations in every way possible."</p>
      <h4>- Michael Lee</h4>
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
        <p>© 2024 My React Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
