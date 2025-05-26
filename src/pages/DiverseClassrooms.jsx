// src/pages/DiverseClassrooms.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/pages/DiverseClassrooms.css';

export default function DiverseClassrooms() {
  return (
    <>
      <Helmet>
        <title>Teaching in Diverse & Contemporary Classrooms – Jenna Cho</title>
        <meta
          name="description"
          content="Reflections on reflective practice, play, culture, and responsiveness in contemporary, diverse classrooms."
        />
      </Helmet>

      <section className="diverse__container">
        <h1>Teaching in Diverse &amp; <br/> Contemporary Classrooms</h1>

        <h2>Reflective Practice &amp; Cultural Knowledge</h2>
        <p>
          The importance of being a reflective practitioner in building knowledge about learners
          and their culture to maximize the teaching and learning experience lies in the ability
          to continuously analyze and adapt teaching methods to meet the diverse needs of students,
          fostering an inclusive and effective learning environment.
        </p>
        <p>
          For example, while working at El Cerrito Elementary School, I noticed students on the
          autism spectrum responded well to visual aids and structured routines. By incorporating
          these elements, I improved engagement and behavior management. Reflecting on my teaching
          methods also helped me recognize and address biases, leading to a more equitable learning
          environment. Integrating culturally relevant content increased participation and interest
          from all students.
        </p>
        <p>
          Engaging with families during parent–teacher conferences provided insights into students’
          cultural backgrounds. Acknowledging and incorporating cultural holidays into classroom
          activities created an inclusive environment, enhancing student engagement and motivation.
        </p>

        <h2>The Importance of Play for Identity Development</h2>
        <p>
          Play is essential for children to develop their identity as it allows them to explore
          interests, express themselves, and understand their place in the world. During free play
          sessions at El Cerrito Elementary, students engaged in building with blocks and role-playing,
          which helped them express preferences and build self-awareness.
        </p>
        <p>
          Play also promotes social interactions, helping children understand social norms and
          develop relationships. Cooperative games and group activities fostered teamwork and
          communication, teaching empathy and cooperation.
        </p>
        <p>
          Additionally, play supports emotional development by providing a safe space for exploring
          feelings. Storytelling and imaginative play allowed students to process and express emotions,
          deepening their understanding of their own and others’ feelings.
        </p>

        <h2>Culture’s Role in Identity &amp; Belonging</h2>
        <p>
          Culture plays a crucial role in children’s identity development by shaping their values,
          beliefs, and sense of belonging. Incorporating multicultural literature at El Cerrito allowed
          students to see themselves reflected in the classroom, fostering pride in their heritage.
        </p>
        <p>
          Teaching a Korean language and culture class—celebrating Chuseok with songpyeon (rice cakes)
          and ancestral rites—helped Korean students feel seen and taught peers about Korean traditions,
          promoting mutual respect.
        </p>
        <p>
          During “Cultural Heritage Week,” students presented family traditions and favorite foods,
          taking pride in their backgrounds and learning from one another. Regular communication with
          families ensured their cultural practices were honored at school.
        </p>

        <h2>Being Responsive to Children &amp; Families’ Cultures</h2>
        <p>
          Responsiveness to children’s and families’ cultures is essential for an inclusive educational
          environment. As a 3rd-grade teacher at Irvine International Academy, I celebrated Lunar New Year
          and wove students’ traditions into lessons, helping them feel connected to their heritage.
        </p>
        <p>
          Using the EPLEX methodology, I integrated Korean folktales into English lessons—making learning
          both culturally relevant and engaging. By learning about families’ customs and incorporating their
          insights, I strengthened home–school connections and ensured every student felt valued.
        </p>
        <p>
          These practices nurture self-identity, mutual respect, and a global mindset—cornerstones of
          contemporary, diverse classrooms.
        </p>
      </section>
    </>
  );
}
