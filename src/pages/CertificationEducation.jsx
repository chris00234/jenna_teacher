import React from 'react';
import { Helmet } from 'react-helmet';
import credentialImg from '../assets/credential.png';
import csunLogo from '../assets/csun_logo.png';
import googleCert from '../assets/google.png';
import '../styles/pages/CertificationEducation.css';

export default function CertificationEducation() {
  return (
    <>
      <Helmet>
        <title>Certification, Education &amp; Professional Identity – Jenna Cho</title>
        <meta
          name="description"
          content="Jenna Cho’s teaching credentials and academic background, including coursework at CSUN."
        />
      </Helmet>



      <section className="certedu__container">
        <h1>Certification, Education &amp; Professional Identity</h1>
        {/* Certification Section */}
        <h2>Certification</h2>
        <h3>Preliminary Multiple Subject Credential</h3>
        <div className="certedu__image-wrapper">
          <img
            src={credentialImg}
            alt="Multiple Subject Teaching Credential verification"
          />
        </div>
        <h3>Google Certified Educator Level 1</h3>
        <div className="certedu__image-wrapper">
          <img
            style={{ width: '500px' }}
            src={googleCert}
            alt="Multiple Subject Teaching Credential verification"
          />
        </div>

        {/* Divider */}
        <hr className="certedu__divider" />

        {/* Education Section */}
        <h2>Education</h2>
        <div className="certedu__education-grid">
          <div className="certedu__edu-left">
            <img src={csunLogo} alt="CSUN Department of Elementary Education logo" />
          </div>
          <div className="certedu__edu-right">
            <h3>California State University, Northridge</h3>
            <p className="certedu__edu-dates">August 2018 – December 2022</p>
            <p className="certedu__edu-degree">
              Bachelor of Arts in Liberal Studies – Integrated Teacher Education Program
            </p>
          </div>
        </div>

        <h3 className="certedu__courses-title">
          Courses I have taken at CSUN as a Liberal Studies major in the Integrated Teacher Education Program
        </h3>
        <ul className="certedu__courses">
            <li>
                <strong>Teacher Preparation Experience (3 units)</strong>
                <ul>
                <li>LRS 300/F Interdisciplinary Approaches for Future Teachers and Field Study (2/1)</li>
                </ul>
            </li>
            <li>
                <strong>Psychological Foundations (3 units)</strong>
                <ul>
                <li>EPC 315 Psychological Foundations of Learning and Teaching (3)</li>
                </ul>
            </li>
            <li>
                <strong>Visual Arts, Performing Arts and the Child (12 units)</strong>
                <ul>
                <li>ART 380/L Children’s Art and Lab (2/1)</li>
                <li>KIN 314/L Creative Dance for Children and Lab (2/1)</li>
                <li>MUS 361/L Music Literature for Children and Lab (2/1)</li>
                <li>TH 371/L Creative Drama and Lab (2/1)</li>
                </ul>
            </li>
            <li>
                <strong>Introduction to Language, Grammar and Linguistics for Teachers (3 units)</strong>
                <ul>
                <li>ENGL 303/L Language, Grammar and Linguistics for Teachers and Lab (2/1)</li>
                </ul>
            </li>
            <li>
                <strong>Physical Education for Children (3 units)</strong>
                <ul>
                <li>KIN 470/L Physical Education for Children and Lab (2/1)</li>
                </ul>
            </li>
            <li>
                <strong>Basic Concepts of Geometry, Probability and Statistics (3 units)</strong>
                <ul>
                <li>MATH 310 Basic Concepts of Geometry, Probability and Statistics (3)</li>
                </ul>
            </li>
            <li>
                <strong>Basic Algebraic Concepts (3 units)</strong>
                <ul>
                <li>MATH 312 Basic Algebraic Concepts (3)</li>
                </ul>
            </li>
            <li>
                <strong>Math Curriculum and Methods (3 units)</strong>
                <ul>
                <li>EED 472 Mathematics Curriculum and Methods (3)</li>
                </ul>
            </li>
            <li>
                <strong>Language Development and Acquisition (3 units)</strong>
                <ul>
                <li>LING 417 Language Development and Acquisition (3)</li>
                </ul>
            </li>
            <li>
                <strong>Health Science (1 unit)</strong>
                <ul>
                <li>HSCI 465ELM Teaching Health in the Elementary School Classroom (1)</li>
                </ul>
            </li>
            <li>
                <strong>Social and Cultural Context: The Child (3 units)</strong>
                <ul>
                <li>CAS 410 The Central American Child (3)</li>
                </ul>
            </li>
            <li>
                <strong>Children’s Literature (3 units)</strong>
                <ul>
                <li>ENGL 428 Children’s Literature (3)</li>
                </ul>
            </li>
            <li>
                <strong>Literacy Instruction: A (3 units)</strong>
                <ul>
                <li>EED 477A Reading Instruction for Diverse Learners (3)</li>
                </ul>
            </li>
            <li>
                <strong>Literacy Instruction: B (3 units)</strong>
                <ul>
                <li>EED 477B Literacy Instruction and English Language Development for Diverse Learners (3)</li>
                </ul>
            </li>
            <li>
                <strong>Student Teaching (3 units)</strong>
                <ul>
                <li>EED 578A Student Teaching I (3)</li>
                </ul>
            </li>
            <li>
                <strong>Student Teaching Seminar (2 units)</strong>
                <ul>
                <li>EED 579A Student Teaching Seminar (2)</li>
                </ul>
            </li>
            <li>
                <strong>Differentiated Instruction and Collaboration (3 units)</strong>
                <ul>
                <li>SPED 420 Designing Equitable Learning Through Universal Design (3)</li>
                </ul>
            </li>
            <li>
                <strong>Science/Social Science Curriculum and Methods (5 units)</strong>
                <ul>
                <li>EED 480 Science/Social Science Curriculum Methods (4)</li>
                <li>EED 579D Student Teaching Seminar (1)</li>
                </ul>
            </li>
            <li>
                <strong>Student Teaching (6 units)</strong>
                <ul>
                <li>EED 578D Student Teaching II (6)</li>
                </ul>
            </li>
            </ul>
    <hr className="certedu__divider" />
      </section>
      
      {/* Professional Identity Section */}
    <section className="certedu__container">
    <h2>How My Professional Identity Has Been Formed</h2>
    <p>
        My professional identity has been shaped through a deep commitment to equity,
        inclusion, and student-centered instruction. From the start of my teaching career,
        I have believed that all students—regardless of ability, language proficiency, or
        background—deserve access to meaningful and rigorous education. This belief has
        guided my instructional decisions, professional development, and classroom practices.
    </p>
    <p>
        Currently, as a K–3 Long-Term Substitute Teacher at Tustin Connect, I lead a
        multi-grade, self-contained classroom where I design and implement differentiated,
        standards-based lessons. I incorporate tools such as Depth and Complexity thinking
        icons, Words Their Way, and Mystery Science to promote engagement and critical
        thinking across content areas. My classroom also integrates SEL activities and
        art-based learning to support the whole child. I regularly use anchor charts,
        visual aids, and manipulatives to make learning accessible to all students,
        including English Learners and students with special needs.
    </p>
    <p>
        During my time as a 3rd Grade Long-Term Substitute at Irvine International Academy,
        I used iReady diagnostic data to inform instruction and significantly improved
        student achievement in both reading and math. I provided differentiated small-group
        instruction, developed customized work for students with autism and English
        Learners, and maintained open communication with families through data-informed
        conferences. These efforts ensured that every student received the support
        necessary to grow academically and feel successful in the classroom.
    </p>
    <p>
        My work as a Resident Substitute Teacher at El Cerrito Elementary School further
        shaped my identity as an equity-minded educator. I supported three autism-focused
        classrooms, where I applied visual strategies, hands-on learning, and consistent
        routines to meet individual needs. I also served as an MTSS Assistant, mentoring
        students and leading small-group instruction aligned to their intervention goals.
        Organizing and hosting an Open House on behalf of a teacher demonstrated my
        ability to build relationships with families and advocate for students in
        inclusive, respectful ways.
    </p>
    <p>
        Moreover, my professional development has always included a focus on equity and
        inclusion. For example, I completed the Elementary School Classroom Management
        assessment, where I scored proficient, and used the insights gained to create a
        more equitable classroom. This included establishing classroom norms that promoted
        respect and understanding among students from different backgrounds.
    </p>
    <p>
        In summary, my professional identity as an equity-minded educator has been shaped
        by my hands-on experiences with diverse learners, my commitment to culturally
        responsive teaching, and my ongoing professional development focused on
        inclusivity. These elements have collectively driven my passion for ensuring that
        all students receive the support and respect they need to thrive academically and socially.
    </p>
    </section>

    </>
  );
}
