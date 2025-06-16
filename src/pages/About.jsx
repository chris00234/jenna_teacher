import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import headshot from '../assets/headshot.jpg';
import '../styles/pages/About.css';

export default function About() {
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>About Me – Jenna Cho</title>
        <meta
          name="description"
          content="Learn about my background, teaching philosophy, and classroom approach."
        />
      </Helmet>

      {/* Hero / Intro */}
      <section className="about__hero">
        <img
          src={headshot}
          alt="Jenna Cho headshot"
          className="about__photo"
          onClick={() => setLightboxOpen(true)}
          style={{ cursor: 'pointer' }}
        />
        <div className="about__intro">
          <h1>Hi, I’m Jenna Cho</h1>
          <p>
            Hello! My name is Jenna Cho, and I am a passionate and adaptable educator committed to creating inclusive, engaging, and standards-based learning experiences for all students. I earned my Bachelor of Arts in Liberal Studies through the Integrated Teacher Education Program and hold a Preliminary California Multiple Subject Teaching Credential from California State University, Northridge.
          </p>
        </div>
      </section>

      {/* Teaching Priortize */}
      <section className="about__section">
        <h2>As a teacher, I prioritize:</h2>
        <ul>
            <li>Differentiated instruction to meet the diverse needs of students, including English Learners and students with autism</li>
            <li>Data-informed teaching, using tools like iReady to tailor instruction and track growth</li>
            <li>Collaborative practices, working closely with staff and families to support the whole child</li>
            <li>Creative and integrated curriculum design, connecting subjects like ELA with art, SEL, and science through hands-on learning</li>
        </ul>
      </section>

      {/* Experience Timeline */}
      <section className="about__section about__timeline">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Feburary 2025 – Present:</strong> K - 3rd Grade Long-Term Substitute Teacher, Tustin Connect K-12, Tustin Unified School District
          </li>
          <li>
            <strong>December 2024 – Present:</strong> Substitute Teacher, Irvine Unified School District (IUSD)
          </li>
          <li>
            <strong>September 2024 – December 2024:</strong> 3rd Grade Teacher Long-Term Substitute, Irvine International Academy
          </li>
          <li>
            <strong>October 2023 – June 2024:</strong> Resident Substitute Teacher, El Cerrito Elementary School, La Habra City School District
          </li>
        </ul>
      </section>

      {/* Skills / Tools */}
        <section className="about__section">
        <h2>Skills &amp; Tools</h2>
        <ul className="about__skills">
            {/* Instructional Design */}
            <li>Differentiated &amp; Standards-Based Instruction</li>
            <li>GATE-Aligned ELA &amp; Math Planning</li>
            <li>Project-Based Learning (Scratch, Robotics, Minecraft)</li>
            <li>Depth &amp; Complexity Questioning</li>

            {/* Assessment & Data */}
            <li>Data-Driven Instruction (iReady, Formative/Summative)</li>
            <li>MTSS/Tiered Intervention Support</li>
            <li>Hybrid Grading &amp; Progress Tracking</li>

            {/* Curriculum & Tech */}
            <li>Words Their Way Phonics Program</li>
            <li>Mystery Science Curriculum</li>
            <li>Google Classroom &amp; G Suite</li>
            <li>SEL Integration &amp; Classroom Management</li>

            {/* Communication & Languages */}
            <li>Parent Conferences &amp; Progress Reports</li>
            <li>Languages:<br />English (Native),<br /> Korean (Native),<br /> Chinese (Basic)</li>

            {/* Credentials */}
            <li>Preliminary Multiple Subject Credential</li>
            <li>CSET Korean Subtest III &amp; V</li>
            <li>Google Certified Educator I</li>
        </ul>
        </section>


      {/* Call to Action */}
      <section className="about__cta">
        <p>Want to see my lesson plans and projects?</p>
        <Link to="/portfolio" className="btn btn-primary">
          View Portfolio
        </Link>
      </section>
      {/* lightbox modal */}
      {isLightboxOpen && (
        <div
          className="lightbox"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="lightbox__content"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="lightbox__close"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close full-size image"
            >
              ×
            </button>
            <img
              src={headshot}
              alt="Full-size Jenna Cho headshot"
            />
          </div>
        </div>
      )}
    </>
  );
}
