import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Card from '../components/Card';
import '../styles/pages/StudentWork.css';

import stretchy1   from '../assets/stretchy1.png';
import stretchy2   from '../assets/stretchy2.png';
import st1        from '../assets/st1.png';
import st2        from '../assets/st2.png';
import pt1       from '../assets/pt1.png';
import pt2       from '../assets/pt2.png';
import care1     from '../assets/care1.png';
import care2     from '../assets/care2.png';
import vote1    from '../assets/vote1.png';
import vote2    from '../assets/vote2.png';
import formal1  from '../assets/formal1.png';
import formal2  from '../assets/formal2.png';
import rp1      from '../assets/rp1.png';
import rp2      from '../assets/rp2.png';
import ss1     from '../assets/ss1.png';
import ss2     from '../assets/ss2.png';
import fm1     from '../assets/fm1.png';
import fm2     from '../assets/fm2.png';
import ms    from '../assets/ms.png';
import in1   from '../assets/in1.png';
import in2   from '../assets/in2.png';
import in3  from '../assets/in3.png';
import ela1 from '../assets/ela1.png';
import ela2 from '../assets/ela2.png';
import m1 from '../assets/m1.png';
import m2 from '../assets/m2.png';
import mail from '../assets/mail.png';
import police from '../assets/police.png';
import fire from '../assets/fire.png';
import lg1 from '../assets/lg1.png';
import lg2 from '../assets/lg2.png';
import a1 from '../assets/a1.png';
import a2 from '../assets/a2.png';

export default function StudentWork() {
    const [lightbox, setLightbox] = useState({ isOpen: false, src: '', alt: '' });
    const openLightbox = (src, alt) => {
        setLightbox({ isOpen: true, src, alt });
    };
    const closeLightbox = () => {
        setLightbox({ isOpen: false, src: '', alt: '' });
    };
  return (
    <>
      <Helmet>
        <title>Student Work Samples – Jenna Cho</title>
        <meta
          name="description"
          content="A gallery of student-created artifacts showcasing learning across subjects."
        />
      </Helmet>

      {/* Intro */}
      <section className="studentwork__intro">
        <h1>Student Work Samples</h1>
        <p>Here are some of the amazing projects and creations from my students.</p>
      </section>
      {/* Tustin Connect, Tustin Unified School District */}
      <section className="studentwork__section">
        <h2>🌎 Earth Day & Poetry Month: Integrated ELA with Author’s Craft</h2>
        <p>To celebrate both Earth Day and National Poetry Month, I designed and implemented an integrated ELA unit that combined environmental awareness with poetic expression. This cross-curricular project offered students a meaningful opportunity to engage with literature while reflecting on their relationship with the planet.
           <br /><br />
            Throughout the unit, I introduced students to key author’s craft tools such as alliteration, rhyme, imagery, and personification. Students learned to identify these elements in mentor texts and were then guided to apply them creatively in their own Earth-themed poems. These lessons not only supported writing development but also encouraged critical thinking and an appreciation for language.
            <br /><br />
            To meet the needs of all learners, I developed customized worksheets tailored for each grade level from Kindergarten to 3rd grade. Each worksheet was designed to align with grade-appropriate standards and provide engaging, scaffolded activities that supported both reading comprehension and original poetry writing.
            <br /><br />
            The student samples presented here showcase their ability to thoughtfully apply poetic techniques while expressing their care and concern for the environment.</p>
      </section>

      {/* Stretchy Sentence Fun! */}
      <section className="studentwork__section">
        <h2>📏Stretchy Sentence Fun!</h2>
        <div className="studentwork__grid">
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(stretchy1, 'Student Sample Work')}
                >
                <Card title="Student Sample Work" image={stretchy1}>
                    <p>Work Sample of Kindergarten Student</p>
                </Card>
            </div>
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(stretchy2, 'Student Sample Work')}
                >
                <Card title="Student Sample Work" image={stretchy2}>
                    <p>Work Sample of 2nd Grader</p>
                </Card>
            </div>
        </div>
      </section>

      {/* Soundtrack for the Earth */}
      <section className="studentwork__section">
        <h2>🎶Soundtrack for the Earth</h2>
        <div className="studentwork__grid">
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(st1, 'Student Sample Work')}
                >
                <Card title="Student Sample Work" image={st1}>
                    <p>Work Sample of Kingergarten</p>
                </Card>
            </div>
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(st2, 'Student Sample Work')}
                >
                <Card title="Student Sample Work" image={st2}>
                    <p>Work Sample of 2nd Grade</p>
                </Card>
            </div>
        </div>
      </section>

      {/* Poem-Tale Author's Craft Worksheet */}
      <section className="studentwork__section">
        <h2>✒️Poem-Tale Author's Craft Worksheet</h2>
        <div className="studentwork__grid">
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(pt1, 'Student Sample Work')}
                >
                <Card title="Student Sample Work" image={pt1}>
                    <p>Work Sample of 1st Grade</p>
                </Card>
            </div>
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(pt2, 'Student Sample Work')}
                >
                <Card title="Student Sample Work" image={pt2}>
                    <p>Work Sample of 1st Grade</p>
                </Card>
            </div>
        </div>
      </section>

      {/*horizontal line*/}
      <hr className="studentwork__divider" />

      <section className="studentwork__section">
        <h2>🌎 Art & ELA Writing Integration: How We Can Help the Earth Art & ELA Writing Integration: How We Can Help the Earth</h2>
        <p>As part of our Earth Day celebrations, I integrated visual art and writing to create a meaningful, student-centered project that encouraged both creative expression and environmental awareness. In this activity, students were invited to think critically about their role in caring for the planet and to express their ideas both through words and illustrations.
            <br /><br />
            Students brainstormed and wrote four ways they could help save the Earth, using age-appropriate writing strategies. After completing their writing, they created drawings to visually represent each action, making powerful connections between language, art, and real-world responsibility.
            <br /><br />
            This project allowed students to practice informative writing, while also engaging in reflective thinking and personal accountability. By combining writing with drawing, all learners—especially visual and emerging writers—were able to express themselves meaningfully.
            <br /><br />
            The student work featured here demonstrates not only their growing writing skills, but also their creativity, compassion, and commitment to taking care of our Earth.</p>
      </section>

      {/* Art Projects */}

      {/* How I care for our planet*/}
      <section className="studentwork__section">
        <h2>🌱How I Care for Our Planet</h2>
        <div className="studentwork__grid">
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(care1, 'Student Sample Work')}
                >
                <Card title="Student Sample Work" image={care1}>
                    <p></p>
                </Card>
            </div>
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(care2, 'Student Sample Work')}
                >
                <Card title="Student Sample Work" image={care2}>
                    <p></p>
                </Card>
            </div>
        </div>
      </section>

      <hr className="studentwork__divider" />

      <section className="studentwork__section">
        <h2>🏫Irvine International Academy, Third Grade</h2>
        <p>This student writing sample is from a lesson I conducted on the text 'Every Vote Counts,' part of the McGraw Hill Wonders curriculum. To reinforce the comprehension strategies taught during the lesson, such as identifying the main idea and understanding the author's purpose, I created a customized worksheet specifically tailored to support these learning objectives. The worksheet was designed to engage students in critical thinking and provide them with an opportunity to express their understanding of the text in their own words. This sample demonstrates how students applied the skills they learned in class, showcasing both their comprehension and their ability to articulate their ideas effectively.</p>
      </section>

      <section className="studentwork__section">
        <h2>🗳️English Language Arts: Every Vote Counts</h2>
        <div className="studentwork__grid">
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(vote1, 'Student Sample Work')}
                >
                <Card title="Student Sample Work" image={vote1}>
                    <p></p>
                </Card>
            </div>
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(vote2, 'Student Sample Work')}
                >
                <Card title="Student Sample Work" image={vote2}>
                    <p></p>
                </Card>
            </div>
        </div>
      </section>

      <hr className="studentwork__divider" />

      <section className="studentwork__section">
        <h2>📝Formal Assessment, 3rd Grade</h2>
        <p>This formal assessment was developed to evaluate students' understanding of the text 'Kids to the Rescue,' part of the McGraw Hill Wonders curriculum. I designed this assessment to align with key lesson objectives, including identifying the main idea, analyzing key details, and drawing connections between the text and real-world problem-solving scenarios. The assessment was carefully structured to challenge students to think critically and demonstrate their comprehension through written responses. These samples reflect how students applied the skills they had practiced during the lesson, showcasing both their grasp of the material and their ability to articulate their ideas effectively.</p>
      </section>

      <section className="studentwork__section">
        <h2> 🚨English Language Arts:  Kids to the Rescue</h2>
        <div className="studentwork__grid">
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(formal1, 'Student Sample Work')}
                >
                <Card title="Student Sample Work" image={formal1}>
                    <p>Work Sample of 3rd Grade</p>
                </Card>
            </div>
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(formal2, 'Student Sample Work')}
                >
                <Card title="Student Sample Work" image={formal2}>
                    <p>Work Sample of 3rd Grade</p>
                </Card>
            </div>
        </div>
      </section>

      <hr className="studentwork__divider" />
        <section className="studentwork__section">
            <h2>📚3rd Grade: English Language Arts</h2>
            <p>This student work sample is part of the 'Rescue Plan Poster Project,' which I created as an engaging extension activity for the text 'Kids to the Rescue,' from the McGraw Hill Wonders curriculum. I designed the worksheet and project guidelines to encourage students to synthesize their understanding of the text while fostering creativity and critical thinking.
                <br /><br />    
                The project required students to imagine a rescue scenario, outline a plan, and present their ideas visually on a poster. This activity aligned with key comprehension objectives, including identifying and analyzing main ideas and supporting details, while also integrating writing and artistic expression. The worksheet I developed provided structured prompts to guide students in organizing their thoughts and translating them into a clear and creative presentation. These student samples showcase their ability to apply their learning in a meaningful and imaginative way, reflecting the effectiveness of this project in reinforcing comprehension and engagement.
            </p>
        </section>
        <section className="studentwork__section">
        <h2>🆘Rescue Plan Poster Project: Kids to the Rescue</h2>
        <div className="studentwork__grid">
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(rp1, 'Student Sample Work')}
                >
                <Card title="Student Sample Work" image={rp1}>
                    <p>Work Sample of 3rd Grade</p>
                </Card>
            </div>
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(rp2, 'Student Sample Work')}
                >
                <Card title="Student Sample Work" image={rp2}>
                    <p>Work Sample of 3rd Grade</p>
                </Card>
            </div>
        </div>
      </section>
      <hr className="studentwork__divider" />

      <section className="studentwork__section">
        <h2>🌏Social Studies, 2nd grade</h2>
        <div className="studentwork__grid">
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(ss1, 'Student Sample Work')}
                >
                <Card title="Student Sample Work" image={ss1}>
                    <p>Work Sample of 2nd Grade</p>
                </Card>
            </div>
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(ss2, 'Student Sample Work')}
                >
                <Card title="Student Sample Work" image={ss2}>
                    <p>Work Sample of 2nd Grade</p>
                </Card>
            </div>
        </div>
      </section>
      <section className="studentwork__section">
        <h2>➗Math, 3rd grade: Figure Me Out</h2>
        <div className="studentwork__grid">
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(fm1, 'Student Sample Work')}
                >
                <Card title="Student Sample Work" image={fm1}>
                    <p>Work Sample of 3rd Grade</p>
                </Card>
            </div>
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(fm2, 'Student Sample Work')}
                >
                <Card title="Student Sample Work" image={fm2}>
                    <p>Work Sample of 3rd Grade</p>
                </Card>
            </div>
        </div>
      </section>

      <section className="studentwork__section">
        <h2>🔬Science, 2nd grade, Mystery Science</h2>
        <div className="studentwork__grid">
            <div
                className="studentwork__card-wrapper-big"
                onClick={() => openLightbox(ms, 'Student Sample Work')}
                >
                <Card title="Student Sample Work" image={ms}>
                    <p>Work Sample of 2nd Grade</p>
                </Card>
            </div>
        </div>
      </section>

      <section className="studentwork__section">
        <h2>🔬Science, 1st grade</h2>
        <div className="studentwork__grid">
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(in1, 'Student Sample Work')}
                >
                <Card title="What is an insect unit" image={in1}>
                    <p>Work Sample of 1st Grade</p>
                </Card>
            </div>
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(in2, 'Student Sample Work')}
                >
                <Card title="What is an insect unit" image={in2}>
                    <p>Work Sample of 1st Grade</p>
                </Card>
            </div>
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(in3, 'Student Sample Work')}
                >
                <Card title="Clouds Unit" image={in3}>
                    <p>Work Sample of 1st Grade</p>
                </Card>
            </div>
        </div>
      </section>
      
      <hr className="studentwork__divider" />

      <section className="studentwork__section">
        <h2>📖English Language Arts</h2>
        <div className="studentwork__grid">
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(ela1, 'Student Sample Work')}
                >
                <Card title="ELA Benchmark Text, Stone Soup" image={ela1}>
                    <p>Work Sample of 2nd Grade</p>
                </Card>
            </div>
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(ela2, 'Student Sample Work')}
                >
                <Card title="ELA Benchmark Text" image={ela2}>
                    <p>Work Sample of 5th Grade</p>
                </Card>
            </div>
        </div>
      </section>

      <hr className="studentwork__divider" />
      <section className="studentwork__section">
        <h2>➕Math, 2nd grade</h2>
        <div className="studentwork__grid">
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(m1, 'Student Sample Work')}
                >
                <Card title="Math Work Sheet" image={m1}>
                    <p>Work Sample of 2nd Grade</p>
                </Card>
            </div>
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(m2, 'Student Sample Work')}
                >
                <Card title="Math Work Sheet" image={m2}>
                    <p>Work Sample of 2nd Grade</p>
                </Card>
            </div>
        </div>
      </section>

      <hr className="studentwork__divider" />
      <section className="studentwork__section">
        <h2>🍂Arts - Fall Leaves with Cool and Warm Colors, 2nd grade</h2>
        <div className="studentwork__grid">
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(a1, 'Student Sample Work')}
                >
                <Card title="Fall Leaves Art" image={a1}>
                    <p>Work Sample of 2nd Grade</p>
                </Card>
            </div>
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(a2, 'Student Sample Work')}
                >
                <Card title="Fall Leaves Art" image={a2}>
                    <p>Work Sample of 2nd Grade</p>
                </Card>
            </div>
        </div>
      </section>
      
        <hr className="studentwork__divider" />
        <section className="studentwork__section">
        <h2>👩‍🚒Arts and English - Community Helpers Unit, Kindergarten</h2>
        <div className="studentwork__grid">
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(mail, 'Student Sample Work')}
                >
                <Card title="Mail Carriers" image={mail}>
                    <p>Work Sample of Kindergarten Grade</p>
                </Card>
            </div>
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(police, 'Student Sample Work')}
                >
                <Card title="Police Officer" image={police}>
                    <p>Work Sample of Kindergarten Grade</p>
                </Card>
            </div>
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(fire, 'Student Sample Work')}
                >
                <Card title="Fire Fighter" image={fire}>
                    <p>Work Sample of Kindergarten Grade</p>
                </Card>
            </div>
        </div>
      </section>

      

      <hr className="studentwork__divider" />
    <section className="studentwork__section">
        <h2>🤖Coding with Lego Unit</h2>
        <div className="studentwork__grid">
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(lg1, 'Student Sample Work')}
                >
                <Card title="Code with Lego" image={lg1}>
                    <p></p>
                </Card>
            </div>
            <div
                className="studentwork__card-wrapper"
                onClick={() => openLightbox(lg2, 'Student Sample Work')}
                >
                <Card title="Lego Art" image={lg2}>
                    <p></p>
                </Card>
            </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close image"
            >
              ×
            </button>
            <img src={lightbox.src} alt={lightbox.alt} />
            <p className="lightbox-caption">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
