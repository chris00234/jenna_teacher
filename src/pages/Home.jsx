import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Card from '../components/Card';
import lesson1Img from '../assets/lg1.png';
import lesson2Img from '../assets/in3.png';
import headshot from '../assets/headshot.jpg';
import '../styles/pages/Home.css';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home – Jenna Cho</title>
        <meta
          name="description"
          content="Welcome to my teaching portfolio. Explore my lesson plans, teaching philosophy, and more."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__hero-content">
          <img src={headshot} alt="Jenna Cho" className="home__hero-photo" />  {/* ← new */}
          <div className="home__hero-text">
            <h1>Hello, I am Jenna Cho</h1>
            <p>
              Passionate educator specializing in Project-Based Learning and STEM integration.
            </p>
            <div className="home__hero-cta">
              <Link to="/about" className="btn btn-primary">
                About Me
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="home__about-preview">
        <h2>My Teaching Philosophy</h2>
        <p>
          I believe that every student learns best by doing. Through hands-on projects,
          collaborative problem-solving, and real-world applications, I foster curiosity
          and critical thinking in the classroom.
        </p>
        <Link to="/teaching-philosophy" className="btn btn-secondary">
          Learn More
        </Link>
      </section>

      {/* Portfolio Preview */}
      <section className="home__portfolio-preview">
        <h2>Featured Work Samples</h2>
        <div className="home__cards">
           <div className="card-wrapper-big">
          <Card title="Code with Lego" image={lesson1Img}>
            Students design and build working Logo Coding models.
          </Card>
            </div>
            <div className="card-wrapper-big">
          <Card title="Geometry in Art" image={lesson2Img}>
            Exploring geometrical cloud differenciations.
          </Card>
          </div>
        </div>
        <Link to="/student-work" className="btn btn-primary">
          See All Projects
        </Link>
      </section>
    </>
  );
}
