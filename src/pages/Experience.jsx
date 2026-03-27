import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FiMapPin, FiCalendar, FiDownload } from 'react-icons/fi';
import { useFadeIn } from '../hooks/useFadeIn';

function Section({ children, className = '' }) {
  const ref = useFadeIn();
  return <section ref={ref} className={`fade-in-up ${className}`}>{children}</section>;
}

const EXPERIENCES = [
  {
    role: 'Substitute Teacher',
    school: 'Irvine Unified School District & Tustin Unified School District',
    city: 'Orange County, CA',
    date: 'December 2024 – Present',
    highlights: [
      'Delivered high-quality instruction across TK–12 classrooms by maintaining strong classroom management, adapting to diverse student needs, and collaborating with staff to ensure alignment with district standards.',
      'Supported preschoolers with autism in IUSD\'s ESN program through individualized care and structured routines.',
      'Led class participation during the Jog-A-Thon at Loma Ridge Elementary (IUSD) by giving directions, managing transitions, and keeping students engaged throughout the event.',
    ],
  },
  {
    role: '6th Grade ELD Summer School Teacher',
    school: 'Springbrook Elementary, Irvine Unified School District',
    city: 'Irvine, CA',
    date: 'June 2025 – July 2025',
    highlights: [
      'Facilitate daily student-centered rotations using Language Power, Imagine Learning, and district resources to build academic vocabulary, reading comprehension, and oral language through targeted instruction and collaboration.',
      'Administer diagnostic assessments to guide instructional planning based on students\' language proficiency.',
      'Collaborate during PLC time with 6th grade teachers to align lesson planning, share instructional strategies, and support student growth across content areas.',
    ],
  },
  {
    role: 'K–3rd Grade Long-Term Substitute Teacher',
    school: 'Tustin Connect K–12, Tustin Unified School District',
    city: 'Tustin, CA',
    date: 'February 2025 – May 2025',
    highlights: [
      'Developed and delivered daily GATE-aligned ELA instruction using Depth and Complexity thinking tools to promote advanced thinking and academic rigor.',
      'Integrated Words Their Way, SEL, Mystery Science, and standards-based music, art, and science aligned to weekly themes to enhance engagement and critical thinking.',
      'Maintained daily communication with the classroom teacher and collaborated with the Intervention Lead, teachers, and paraeducators to ensure instructional alignment and consistent learning across grade levels.',
    ],
  },
  {
    role: '3rd Grade Teacher, Long-Term Substitute',
    school: 'Irvine International Academy',
    city: 'Irvine, CA',
    date: 'September 2024 – December 2024',
    highlights: [
      'Increased students at or above grade level by 71% in Reading and 25% in Math from Window 1 to Window 2 by using iReady data to deliver targeted, impactful instruction.',
      'Delivered standards-based ELA and Math lessons using Wonders and Singapore Math, aligning instruction with the school\'s curriculum and mission in a structured, engaging learning environment.',
      'Facilitated differentiated ELA and Math groups to meet the needs of diverse learners, including students with IEPs and English Learners, through targeted, inclusive instruction.',
      'Provided daily customized classwork and homework packets for English Learners and a student with autism to support consistent, differentiated access to grade-level learning.',
    ],
  },
  {
    role: 'Resident Substitute Teacher',
    school: 'El Cerrito Elementary School, La Habra City School District',
    city: 'La Habra, CA',
    date: 'October 2023 – June 2024',
    highlights: [
      'Provided MTSS small-group instruction, led project-based coding lessons using Scratch, robotics, and Minecraft, supported a 4th-grade field trip, and served as a short-term Kindergarten substitute facilitating Open House and student work displays.',
    ],
  },
];

const LICENSES = [
  { name: 'Google Certified Educator Level 1', date: 'June 2025' },
  { name: 'CSET Korean Subtest III and V', date: 'May 2024' },
  { name: 'Preliminary Multiple Subject Teaching Credential', date: 'August 2023' },
  { name: 'Reading Instruction Competence Assessment I, II, III (CSUN)', date: 'June 2023' },
  { name: 'Basic Skills Required Completed (CSUN)', date: 'December 2022' },
  { name: 'From Here to Career: Career Readiness Program (CSUN)', date: 'April 2022' },
  { name: 'Trained Mentor at Mentor Collective (CSUN)', date: 'May 2021' },
];

export default function Experience() {
  return (
    <>
      <Helmet>
        <title>Experience — Jenna Cho | Teaching Portfolio</title>
        <meta name="description" content="Jenna Cho's teaching experience across K–12 classrooms in Orange County." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-b from-warm-50 to-white pt-28 pb-12 md:pt-36">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Career Journey</p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-stone-900 md:text-4xl">
            Teaching Experience
          </h1>
          <p className="mt-4 text-base text-stone-500">
            Each classroom has taught me as much as I've taught my students.
          </p>
          <a
            href="/Jenna Cho - Resume.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-stone-800 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-stone-900 hover:-translate-y-0.5"
          >
            <FiDownload size={16} /> Download Resume
          </a>
        </div>
      </section>

      {/* Timeline */}
      <Section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="relative border-l-2 border-warm-200 pl-8 md:pl-12">
            {EXPERIENCES.map(({ role, school, city, date, highlights }, i) => (
              <div key={i} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute -left-[calc(2rem+5px)] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-white md:-left-[calc(3rem+5px)]">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>

                <div className="rounded-2xl border border-stone-100 bg-white p-6 shadow-sm transition hover:shadow-md md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-stone-800">{role}</h3>
                      <p className="mt-1 text-sm font-medium text-accent">{school}</p>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-stone-400">
                      <span className="flex items-center gap-1"><FiMapPin size={12} /> {city}</span>
                      <span className="flex items-center gap-1"><FiCalendar size={12} /> {date}</span>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-stone-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-300" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Licenses & Certificates */}
      <Section className="bg-warm-50/50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Professional Development</p>
            <h2 className="mt-3 font-serif text-2xl font-bold text-stone-800 md:text-3xl">
              Licenses & Certificates
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {LICENSES.map(({ name, date }) => (
              <div key={name} className="flex items-center justify-between rounded-xl border border-stone-100 bg-white px-6 py-4 shadow-sm">
                <span className="text-sm font-medium text-stone-700">{name}</span>
                <span className="shrink-0 text-xs text-stone-400">{date}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
