import { Helmet } from 'react-helmet';
import { FiAward, FiBookOpen, FiGlobe, FiHeart } from 'react-icons/fi';
import { useFadeIn } from '../hooks/useFadeIn';

import headshot from '../assets/headshot.jpg';
import credentialImg from '../assets/credential.png';
import csunLogo from '../assets/csun_logo.png';
import googleCert from '../assets/google.png';

function Section({ children, className = '' }) {
  const ref = useFadeIn();
  return <section ref={ref} className={`fade-in-up ${className}`}>{children}</section>;
}

const VALUES = [
  { icon: FiHeart, title: 'Differentiated Instruction', text: 'Meeting the diverse needs of students, including English Learners and students with autism, through tailored approaches.' },
  { icon: FiBookOpen, title: 'Data-Informed Teaching', text: 'Using tools like iReady to tailor instruction and track growth, ensuring every student progresses.' },
  { icon: FiGlobe, title: 'Collaborative Practices', text: 'Working closely with staff and families to support the whole child academically, socially, and emotionally.' },
  { icon: FiAward, title: 'Creative Curriculum Design', text: 'Connecting subjects like ELA with art, SEL, and science through hands-on, integrated learning experiences.' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Jenna Cho | Teaching Portfolio</title>
        <meta name="description" content="Learn about Jenna Cho's teaching philosophy, education, certifications, and classroom approach." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-b from-warm-50 to-white pt-28 pb-16 md:pt-36">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 md:flex-row md:gap-16">
          <img
            src={headshot}
            alt="Jenna Cho"
            className="h-64 w-64 rounded-3xl border-4 border-white object-cover shadow-xl md:h-80 md:w-80"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Meet Mrs. Cho</p>
            <h1 className="mt-2 font-serif text-3xl font-bold text-stone-900 md:text-4xl">
              Hi, I'm Jenna Cho
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-600">
              I am a passionate and adaptable educator committed to creating inclusive, engaging, and
              standards-based learning experiences for all students. I earned my Bachelor of Arts in
              Liberal Studies through the Integrated Teacher Education Program and hold a Preliminary
              California Multiple Subject Teaching Credential from California State University, Northridge.
            </p>
          </div>
        </div>
      </section>

      {/* As a Teacher I Prioritize */}
      <Section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">My Priorities</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-stone-800 md:text-4xl">
              As a Teacher, I Prioritize
            </h2>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-5 rounded-2xl border border-stone-100 bg-white p-7 shadow-sm transition hover:shadow-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-warm-100 text-accent">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills & Tools */}
      <Section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Expertise</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-stone-800 md:text-4xl">
              Skills & Tools
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Differentiated & Standards-Based Instruction',
              'GATE-Aligned ELA & Math Planning',
              'Project-Based Learning (Scratch, Robotics, Minecraft)',
              'Depth & Complexity Questioning',
              'Data-Driven Instruction (iReady, Formative/Summative)',
              'MTSS/Tiered Intervention Support',
              'Hybrid Grading & Progress Tracking',
              'Words Their Way Phonics Program',
              'Mystery Science Curriculum',
              'Google Classroom & G Suite',
              'SEL Integration & Classroom Management',
              'Parent Conferences & Progress Reports',
              'Preliminary Multiple Subject Credential',
              'CSET Korean Subtest III & V',
              'Google Certified Educator I',
            ].map(skill => (
              <div key={skill} className="rounded-xl border border-stone-100 bg-white px-5 py-3.5 text-sm font-medium text-stone-700 shadow-sm">
                {skill}
              </div>
            ))}
            <div className="rounded-xl border border-stone-100 bg-white px-5 py-3.5 text-sm font-medium text-stone-700 shadow-sm">
              Languages: English (Native), Korean (Native), Chinese (Basic)
            </div>
          </div>
        </div>
      </Section>

      {/* Goal as Educator */}
      <Section className="bg-warm-50/50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-stone-800 text-center md:text-4xl">
            My Goal as an Educator
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              As an elementary school teacher, I strive to foster a nurturing and dynamic environment
              that sparks curiosity and cultivates a lifelong love of learning through interactive,
              interdisciplinary methods.
            </p>
            <p>
              I prioritize inclusivity and support students' emotional and social growth by honoring
              each child's unique background and experiences. By collaborating with families and
              community partners, I enrich students' educational journeys and promote their overall well-being.
            </p>
          </div>
        </div>
      </Section>

      {/* Diverse Classrooms */}
      <Section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Diverse & Contemporary Classrooms</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-stone-800 md:text-4xl">
            Reflective Practice & Cultural Knowledge
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              The importance of being a reflective practitioner in building knowledge about learners
              and their culture cannot be overstated. I continuously analyze and adapt my teaching
              methods to meet the diverse needs of students, fostering an inclusive and effective
              learning environment.
            </p>
            <p>
              For example, while working at El Cerrito Elementary School, I noticed students on the
              autism spectrum responded well to visual aids and structured routines. By incorporating
              these elements, I improved engagement and behavior management, demonstrating how
              reflection leads to better outcomes for all students.
            </p>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section className="bg-warm-50/50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Credentials & Education</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-stone-800 md:text-4xl">
              Certification & Education
            </h2>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {/* Credential */}
            <div className="rounded-2xl border border-stone-100 bg-white p-8 text-center shadow-sm">
              <img src={credentialImg} alt="CA Teaching Credential" className="mx-auto h-20 w-20 rounded-xl object-contain" />
              <h3 className="mt-5 font-semibold text-stone-800">Preliminary Multiple Subject Credential</h3>
              <p className="mt-2 text-sm text-stone-500">California Commission on Teacher Credentialing</p>
            </div>

            {/* CSUN */}
            <div className="rounded-2xl border border-stone-100 bg-white p-8 text-center shadow-sm">
              <img src={csunLogo} alt="CSUN" className="mx-auto h-20 w-20 rounded-xl object-contain" />
              <h3 className="mt-5 font-semibold text-stone-800">California State University, Northridge</h3>
              <p className="mt-2 text-sm text-stone-500">B.A. in Liberal Studies — Integrated Teacher Education Program</p>
            </div>

            {/* Google */}
            <div className="rounded-2xl border border-stone-100 bg-white p-8 text-center shadow-sm">
              <img src={googleCert} alt="Google Certified" className="mx-auto h-20 w-20 rounded-xl object-contain" />
              <h3 className="mt-5 font-semibold text-stone-800">Google Certified Educator</h3>
              <p className="mt-2 text-sm text-stone-500">Level 1 — Google for Education</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
