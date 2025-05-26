// src/pages/TeachingPhilosophy.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/pages/TeachingPhilosophy.css';

export default function TeachingPhilosophy() {
  return (
    <>
      <Helmet>
        <title>Teaching Philosophy – Jenna Cho</title>
        <meta
          name="description"
          content="Jenna Cho’s teaching philosophy: goals, purpose, and influences."
        />
      </Helmet>

      <section className="philo__container">
        <h1>My Teaching Philosophy</h1>

        <div className="philo__section">
          <h2>My Goal as an Educator</h2>
          <p>
            As an elementary school teacher, I strive to foster a nurturing and dynamic environment
            that sparks curiosity and cultivates a lifelong love of learning through interactive,
            interdisciplinary methods. I prioritize inclusivity and support students’ emotional and
            social growth by honoring each child’s unique background and experiences. By collaborating
            with families and community partners, I enrich students’ educational journeys and promote
            their overall well-being.
          </p>
        </div>

        <div className="philo__section">
          <h2>My Goals for Student Learning</h2>
          <p>
            I aim to ensure that every student reaches their highest potential by designing
            differentiated instruction tailored to diverse learning needs. Through engaging,
            hands-on lessons, I encourage active participation and inquisitiveness. Additionally,
            I integrate social-emotional learning strategies so students become empathetic,
            resilient, and responsible members of our community.
          </p>
        </div>

        <div className="philo__section">
          <h2>The Purpose of Teaching</h2>
          <p>
            I believe teaching is about empowering learners to become independent thinkers and
            compassionate individuals ready to navigate and contribute to the world. Beyond
            transmitting knowledge, teaching should inspire curiosity, nurture a growth mindset,
            and guide students to discover their strengths in a supportive environment.
          </p>
        </div>

        <div className="philo__section">
          <h2>Influential Educational Philosopher</h2>
          <p>
            Lev Vygotsky’s emphasis on social interaction and the Zone of Proximal Development
            (ZPD) deeply resonates with my approach. By scaffolding instruction and facilitating
            collaborative exploration, I help students bridge the gap between their current abilities
            and their potential, creating meaningful, lasting learning experiences.
          </p>
        </div>
      </section>
    </>
  );
}
