// src/pages/TeachingExperience.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/pages/TeachingExperience.css';

export default function TeachingExperience() {
  return (
    <>
      <Helmet>
        <title>Teaching Experience – Jenna Cho</title>
        <meta
          name="description"
          content="Overview of Jenna Cho’s varied teaching roles, from K–3 long-term subs to student teaching and beyond."
        />
      </Helmet>

      <section className="teachexp__container">
        <h1>Teaching Experience</h1>
        {/* Download Resume button */}
        <a
            href="src\assets\Jenna Cho- Resume.pdf"
            download
            className="teachexp__download-btn"
        >
            📄 Download Resume
        </a>

        <section className="teachexp__section">
          <h2>K – 3rd Grade Long-Term Substitute Teacher</h2>
          <h3>Tustin Connect K-12, Tustin Unified School District — Tustin, CA</h3>
          <p className="teachexp__dates">February 2025 – Present</p>
          <ul>
            <li>Led differentiated, standards-based instruction in a self-contained K–3 multi-grade classroom.</li>
            <li>Delivered daily GATE-aligned ELA instruction incorporating Depth &amp; Complexity thinking tools.</li>
            <li>Integrated Words Their Way, SEL, Mystery Science, plus standards-based music, art &amp; science tied to weekly themes.</li>
            <li>Managed in-person and hybrid grading across K–6, including data tracking and online assignment input.</li>
          </ul>
        </section>

        <section className="teachexp__section">
          <h2>Long-Term Substitute 3rd Grade Teacher</h2>
          <h3>Irvine International Academy — Irvine, CA</h3>
          <p className="teachexp__dates">September 2024 – January 2025</p>
          <ul>
            <li>Crafted &amp; executed dynamic, standards-based ELA &amp; Math curricula in an engaging, highly organized environment.</li>
            <li>Used iReady data to boost reading proficiency from 27%→45% and math from 21%→29%.</li>
            <li>Implemented small-group instruction to enhance comprehension &amp; problem-solving skills.</li>
            <li>Communicated progress in parent conferences using diagnostic &amp; formative data.</li>
            <li>Collaborated with colleagues to ensure seamless curriculum alignment.</li>
          </ul>
        </section>

        <section className="teachexp__section">
          <h2>Substitute Teacher</h2>
          <h3>Irvine Unified School District (IUSD) — Irvine, CA</h3>
          <p className="teachexp__dates">June 2024 – August 2024</p>
          <ul>
            <li>Delivered high-quality instruction across TK–12, maintaining strong classroom management.</li>
            <li>Adapted lessons to diverse needs and collaborated with staff to align with district standards.</li>
          </ul>
        </section>

        <section className="teachexp__section">
          <h2>2nd-Grade Summer School Lead Teacher</h2>
          <h3>E-Plex Education Complex — Buena Park, CA</h3>
          <p className="teachexp__dates">June 2024 – August 2024</p>
          <ul>
            <li>Developed engaging English, Writing &amp; Math lesson plans, integrating robotics for STEM learning.</li>
            <li>Assessed performance via observations, assignments &amp; tests; collaborated on progress reports.</li>
            <li>Designed &amp; taught a basic sewing class, fostering creativity &amp; fine motor skills.</li>
          </ul>
        </section>

        <section className="teachexp__section">
          <h2>Korean Teacher</h2>
          <h3>E-Plex Education Complex — Buena Park, CA</h3>
          <p className="teachexp__dates">January 2024 – August 2024</p>
          <ul>
            <li>Created &amp; taught Korean basics to grades 1–6, from alphabet to sentence creation.</li>
            <li>Managed testing data; strategies raised individual scores by 95%.</li>
          </ul>
        </section>

        <section className="teachexp__section">
          <h2>2nd-Grade Afterschool Teacher</h2>
          <h3>E-Plex Education Complex — Buena Park, CA</h3>
          <p className="teachexp__dates">January 2024 – August 2024</p>
          <ul>
            <li>Designed literacy, math &amp; social studies lessons aligned to Common Core.</li>
            <li>Implemented open-door policy to involve parents in feedback &amp; collaboration.</li>
            <li>Boosted reading &amp; math comprehension by 40% via daily “Genius Packets.”</li>
          </ul>
        </section>

        <section className="teachexp__section">
          <h2>Short-Term Kindergarten Teacher</h2>
          <h3>El Cerrito Elementary School — La Habra, CA</h3>
          <p className="teachexp__dates">March 2024 – March 2024</p>
          <ul>
            <li>Designed differentiated, standards-based lessons for individual student needs.</li>
            <li>Organized an Open House showcasing student work &amp; classroom activities.</li>
            <li>Built classroom management systems to engage students in a positive learning environment.</li>
          </ul>
        </section>

        <section className="teachexp__section">
          <h2>Resident Substitute Teacher</h2>
          <h3>El Cerrito Elementary School — La Habra, CA</h3>
          <p className="teachexp__dates">October 2023 – June 2024</p>
          <ul>
            <li>Supported “Code to the Future” coding &amp; CS program with Scratch, robotics &amp; Minecraft.</li>
            <li>Worked across grades K–6, including autism-spectrum classes; provided tailored support.</li>
            <li>Served as MTSS Assistant: mentored students, modeled strategies &amp; led leveled small groups.</li>
            <li>Organized a 4th-grade field trip (29 students) to a Class Act Youth Concert.</li>
          </ul>
        </section>

        <section className="teachexp__section">
          <h2>Substitute Teacher</h2>
          <h3>La Habra City School District — La Habra, CA</h3>
          <p className="teachexp__dates">August 2023 – October 2023</p>
          <ul>
            <li>Delivered instruction TK–8 in absence of regular teachers, ensuring continuity.</li>
            <li>Participated in planning meetings &amp; provided structured feedback on classroom experiences.</li>
            <li>Earned repeat requests from staff due to organized, reflective practice.</li>
          </ul>
        </section>

        <section className="teachexp__section">
          <h2>Full-Time Student Teacher (2nd &amp; 5th Grade)</h2>
          <h3>Tulsa St. &amp; Darby Ave. Elementary Schools — Granada Hills, CA</h3>
          <p className="teachexp__dates">January 2022 – December 2022</p>
          <ul>
            <li>Crafted CA Standards-aligned lessons across Math, ELA, PE, Music, Social Science &amp; Science.</li>
            <li>Provided RtI and individualized support via Benchmark Advance, Eureka &amp; CGI Math.</li>
            <li>Delivered targeted small-group instruction to boost below-grade-level student progress.</li>
          </ul>
        </section>

        <section className="teachexp__section">
          <h2>Teacher &amp; President</h2>
          <h3>Korean School — Northridge, CA</h3>
          <p className="teachexp__dates">July 2013 – 2018</p>
          <ul>
            <li>Taught Korean language &amp; culture to grades 5–12; prepared weekly lesson plans.</li>
            <li>Maintained detailed student records (scores, attendance); led educator meetings.</li>
            <li>Achieved 98% pass rate on SAT Korean &amp; ACTFL assessments.</li>
          </ul>
        </section>
      </section>
    </>
  );
}
