import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';

import credentialImg from '../assets/credential.png';
import csunLogo from '../assets/csun_logo.png';
import googleCert from '../assets/google.png';

const RECOMMENDATIONS = [
  {
    name: 'Deanna Putnam',
    role: 'Principal of El Cerrito Elementary School',
    url: 'https://drive.google.com/file/d/1Ac7ZxJPKRiqLpPhJmn0NDefBAv0hO1bF/view',
  },
  {
    name: 'Paula Denen',
    role: 'Former Principal of LAUSD and University Supervisor at CSUN',
    url: 'https://drive.google.com/file/d/1T5Qvmm1WIOzE2tRpJnHpZmi5OM_MBqG9/view',
  },
  {
    name: 'Tiffany Ramirez',
    role: '6th grade teacher, El Cerrito Elementary School',
    url: 'https://drive.google.com/file/d/1OgdThSIgMGH9oLjXl-WucphOcRqWv97t/view',
  },
  {
    name: 'Myrissa Ortiz',
    role: '2nd grade teacher, Tulsa Street Elementary School',
    url: 'https://drive.google.com/file/d/1Alf4cOaW90WBACnponNnUHsYrHoQlYpz/view',
  },
  {
    name: 'Yiyuan Tiffany Zhang',
    role: 'Assistant Principal, Irvine International Academy',
    url: 'https://drive.google.com/file/d/1bP2KiDcjfxR900oU0EMSo1wGv-f3awgH/view',
  },
];

const TEACHING_DOCS = [
  {
    title: 'Early Field Experience Log',
    subtitle: '57 hours completed',
    url: 'https://drive.google.com/file/d/1DBRDDo8ueBifx3qxdWSl-R3fYPHjf7HB/view',
  },
  {
    title: 'Multiple Subject Credential Program',
    subtitle: '',
    url: 'https://drive.google.com/file/d/1OCJmGmrNpRhuif7bB-VD8CjxW2htWnNo/view',
  },
];

const COURSES = [
  { category: 'Teacher Preparation Experience (3 units)', items: ['LRS 300/F Interdisciplinary Approaches for Future Teachers and Field Study (2/1)'] },
  { category: 'Psychological Foundations (3 units)', items: ['EPC 315 Psychological Foundations of Learning and Teaching (3)'] },
  { category: 'Visual Arts, Performing Arts and the Child (12 units)', items: ['ART 380/L Children\'s Art and Lab (2/1)', 'KIN 314/L Creative Dance for Children and Lab (2/1)', 'MUS 361/L Music Literature for Children and Lab (2/1)', 'TH 371/L Creative Drama and Lab (2/1)'] },
  { category: 'Introduction to Language, Grammar and Linguistics (3 units)', items: ['ENGL 303/L Language, Grammar and Linguistics for Teachers and Lab (2/1)'] },
  { category: 'Physical Education for Children (3 units)', items: ['KIN 470/L Physical Education for Children and Lab (2/1)'] },
  { category: 'Geometry, Probability and Statistics (3 units)', items: ['MATH 310 Basic Concepts of Geometry, Probability and Statistics (3)'] },
  { category: 'Basic Algebraic Concepts (3 units)', items: ['MATH 312 Basic Algebraic Concepts (3)'] },
  { category: 'Math Curriculum and Methods (3 units)', items: ['EED 472 Mathematics Curriculum and Methods (3)'] },
  { category: 'Language Development and Acquisition (3 units)', items: ['LING 417 Language Development and Acquisition (3)'] },
  { category: 'Health Science (1 unit)', items: ['HSCI 465ELM Teaching Health in the Elementary School Classroom (1)'] },
  { category: 'Social and Cultural Context (3 units)', items: ['CAS 410 The Central American Child (3)'] },
  { category: 'Children\'s Literature (3 units)', items: ['ENGL 428 Children\'s Literature (3)'] },
  { category: 'Literacy Instruction: A (3 units)', items: ['EED 477A Reading Instruction for Diverse Learners (3)'] },
  { category: 'Literacy Instruction: B (3 units)', items: ['EED 477B Literacy Instruction and English Language Development for Diverse Learners (3)'] },
  { category: 'Student Teaching (3 units)', items: ['EED 578A Student Teaching I (3)'] },
  { category: 'Student Teaching Seminar (2 units)', items: ['EED 579A Student Teaching Seminar (2)'] },
  { category: 'Differentiated Instruction and Collaboration (3 units)', items: ['SPED 420 Designing Equitable Learning Through Universal Design (3)'] },
  { category: 'Science/Social Science Curriculum and Methods (5 units)', items: ['EED 480 Science/Social Science Curriculum Methods (4)', 'EED 579D Student Teaching Seminar (1)'] },
  { category: 'Student Teaching (6 units)', items: ['EED 578D Student Teaching II (6)'] },
];

export default function Credentials() {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <>
      <Helmet>
        <title>Credentials - Jenna Cho | Teaching Portfolio</title>
        <meta
          name="description"
          content="Jenna Cho's teaching credentials, education, and professional identity."
        />
      </Helmet>

      {/* Certification */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
            Credentials & Education
          </h1>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-800">Certification</h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-700">
                  Preliminary Multiple Subject Credential
                </h3>
                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                  <img
                    src={credentialImg}
                    alt="Multiple Subject Teaching Credential verification"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-700">
                  Google Certified Educator Level 1
                </h3>
                <div className="mt-4">
                  <img
                    src={googleCert}
                    alt="Google Certified Educator Level 1 badge"
                    className="max-w-md rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-800">Education</h2>

          <div className="mt-8 flex items-center gap-6 rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
            <img
              src={csunLogo}
              alt="CSUN Department of Elementary Education"
              className="hidden h-20 w-20 shrink-0 object-contain sm:block"
            />
            <div>
              <h3 className="text-lg font-semibold text-slate-800">
                California State University, Northridge
              </h3>
              <p className="mt-1 text-sm text-teal-600">August 2018 - December 2022</p>
              <p className="mt-1 text-sm text-slate-600">
                Bachelor of Arts in Liberal Studies - Integrated Teacher Education Program
              </p>
            </div>
          </div>

          {/* Coursework */}
          <div className="mt-8">
            <button
              onClick={() => setShowCourses(prev => !prev)}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-4 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              {showCourses ? 'Hide' : 'View'} Coursework
              <FaChevronDown
                size={12}
                className={`transition-transform ${showCourses ? 'rotate-180' : ''}`}
              />
            </button>

            {showCourses && (
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {COURSES.map(course => (
                  <div
                    key={course.category}
                    className="rounded-lg border border-slate-100 bg-white p-4"
                  >
                    <p className="text-sm font-semibold text-slate-700">{course.category}</p>
                    <ul className="mt-2 space-y-1">
                      {course.items.map(item => (
                        <li key={item} className="text-xs text-slate-500">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Recommendation Letters */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-800">Recommendation Letters</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {RECOMMENDATIONS.map(rec => (
              <a
                key={rec.name}
                href={rec.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-3 rounded-xl border border-slate-100 p-5 shadow-sm transition hover:shadow-md"
              >
                <div>
                  <p className="font-semibold text-slate-700 group-hover:text-teal-600">
                    {rec.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{rec.role}</p>
                </div>
                <FaExternalLinkAlt className="mt-1 shrink-0 text-xs text-slate-300 group-hover:text-teal-500" />
              </a>
            ))}
          </div>

          {/* Teaching Docs */}
          <h3 className="mt-12 text-lg font-semibold text-slate-700">Teaching Documentation</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {TEACHING_DOCS.map(doc => (
              <a
                key={doc.title}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-3 rounded-xl border border-slate-100 p-5 shadow-sm transition hover:shadow-md"
              >
                <div>
                  <p className="font-semibold text-slate-700 group-hover:text-teal-600">
                    {doc.title}
                  </p>
                  {doc.subtitle && (
                    <p className="mt-1 text-sm text-slate-500">{doc.subtitle}</p>
                  )}
                </div>
                <FaExternalLinkAlt className="mt-1 shrink-0 text-xs text-slate-300 group-hover:text-teal-500" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Identity */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-800">
            How My Professional Identity Has Been Formed
          </h2>
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              My professional identity has been shaped through a deep commitment to equity,
              inclusion, and student-centered instruction. From the start of my teaching career,
              I have believed that all students&mdash;regardless of ability, language proficiency, or
              background&mdash;deserve access to meaningful and rigorous education.
            </p>
            <p>
              Currently, as a K-3 Long-Term Substitute Teacher at Tustin Connect, I lead a
              multi-grade, self-contained classroom where I design and implement differentiated,
              standards-based lessons. I incorporate tools such as Depth and Complexity thinking
              icons, Words Their Way, and Mystery Science to promote engagement and critical
              thinking across content areas. My classroom also integrates SEL activities and
              art-based learning to support the whole child.
            </p>
            <p>
              During my time as a 3rd Grade Long-Term Substitute at Irvine International Academy,
              I used iReady diagnostic data to inform instruction and significantly improved
              student achievement in both reading and math. I provided differentiated small-group
              instruction, developed customized work for students with autism and English
              Learners, and maintained open communication with families through data-informed
              conferences.
            </p>
            <p>
              My work as a Resident Substitute Teacher at El Cerrito Elementary School further
              shaped my identity as an equity-minded educator. I supported three autism-focused
              classrooms, where I applied visual strategies, hands-on learning, and consistent
              routines to meet individual needs. I also served as an MTSS Assistant, mentoring
              students and leading small-group instruction aligned to their intervention goals.
            </p>
            <p>
              Moreover, my professional development has always included a focus on equity and
              inclusion. I completed the Elementary School Classroom Management assessment,
              scoring proficient, and used the insights gained to create a more equitable
              classroom with norms that promoted respect and understanding among students from
              different backgrounds.
            </p>
            <p>
              In summary, my professional identity as an equity-minded educator has been shaped
              by my hands-on experiences with diverse learners, my commitment to culturally
              responsive teaching, and my ongoing professional development focused on
              inclusivity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
