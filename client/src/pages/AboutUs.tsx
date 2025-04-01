import React from "react";
import "../css/AboutUs.css";
import gino from "../../public/vite.svg";

function AboutUs() {
  return (
    <div className="about-us-container">
      <section className="hero">
        <h1>About Dogwood Collars</h1>
        <p>
          Our mission is to provide stylish, durable, and safe collars for your
          beloved canine companions.
        </p>
      </section>

      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Dogwood Collars was founded in 2019 by Sara Dawson, a lifelong dog
          lover with a passion for creating high-quality, unique accessories. It
          all started when she was searching for a unique collar for her dog
          Gino. After spending countless hours searching the interwebs, she
          decided to create her own line of collars that combined style,
          durability, and safety.
        </p>
        <img src={gino} alt="Dog wearing a Dogwood Collar" />
      </section>

      <section className="our-values">
        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Quality:</strong> We use only the finest materials to ensure
            our collars are built to last.
          </li>
          <li>
            <strong>Safety:</strong> Your dog's safety is our top priority. Our
            collars are designed to be a slip collar to help prevent pulling by
            your dog and to ensure that the collar does not come off.
          </li>
          <li>
            <strong>Style:</strong> We believe that dog collars can be both
            functional and fashionable.
          </li>
        </ul>
      </section>

      <section className="our-team">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <img src={gino} alt="Team Dogwood" />
          <h3>The Dogwood Team</h3>
          <p>
            [Brief bio about the team - their roles, experience, and love for
            dogs.]
          </p>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Ready to find the perfect collar for your pup?</h2>
        <p>
          Explore our collection and discover stylish, durable, and safe collars
          that will make your dog look and feel their best.
        </p>
        <a href="/products" className="button">
          Shop Now
        </a>
      </section>

      <section className="contact-information">
        <h2>Contact Us</h2>
        <p>Have questions or need assistance? We'd love to hear from you!</p>
        <p>Email: support@dogwoodcollars.com</p>
        <p>Phone: (555) 123-4567</p>
      </section>
    </div>
  );
}

export default AboutUs;
