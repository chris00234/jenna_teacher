import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FiMapPin, FiCalendar, FiChevronDown, FiDownload } from 'react-icons/fi';
import { useFadeIn } from '../hooks/useFadeIn';

function Section({ children, className = '' }) {
  const ref = useFadeIn();
  return <section ref={ref} className={`fade-in-up ${className}`}>{children}</section>;
}

const EXPERIENCES = [
  {
    role: '6th Grade ELD Summer School Teacher',
    school: 'Springbrook Elementary, Irvine USD',
    city: 'Irvine, CA',
    date: 'Summer 2026',
    highlights: [
      'Designed and delivered English Language Development curriculum for 6th graders',
      'Differentiated instruction for multilingual learners at varying proficiency levels',
      'Integrated STEM activities to build academic language through hands-on projects',
    ],
  },
  {
    role: 'K-3 Long-Term Substitute Teacher',
    school: 'Tustin Connect, Tustin USD',
    city: 'Tustin, CA',
    date: '2025 – 2026',
    highlights: [
      'Managed multi-grade classrooms (K-3) with differentiated instruction',
      'Implemented Project-Based Learning units across subjects',
      'Created a safe, inclusive environment for 25+ students daily',
    ],
  },
  {
    role: 'Student Teacher — 1st Grade',
    school: 'El Cerrito Elementary, Irvine USD',
    city: 'Irvine, CA',
    date: '2024 – 2025',
    highlights: [
      'Led full-day instruction under mentor teacher supervision',
      'Developed standards-based lesson plans aligned to CA Common Core',
      'Adapted instruction for students on the autism spectrum using visual aids',
    ],
  },
  {
    role: 'Substitute Teacher',
    school: 'Various Schools, Irvine USD',
    city: 'Irvine, CA',
    date: '2023 – 2024',
    highlights: [
      'Substitute taught across K-6 classrooms in multiple schools',
      'Maintained classroom management and lesson continuity',
      'Received positive feedback from administrators for reliability',
    ],
  },
  {
    role: 'After-School Program Instructor',
    school: 'Think Together',
    city: 'Orange County, CA',
    date: '2022 – 2023',
    highlights: [
      'Facilitated academic enrichment and homework support for K-5 students',
      'Led STEM activities and creative arts programming',
      'Built positive relationships with students and families',
    ],
  },
  {
    role: 'Classroom Volunteer & Tutor',
    school: 'Various Elementary Schools',
    city: 'Orange County, CA',
    date: '2020 – 2022',
    highlights: [
      'Tutored struggling readers in small groups',
      'Assisted lead teachers with classroom preparation and student support',
      'Gained foundational experience in elementary education settings',
    ],
  },
];

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? EXPERIENCES : EXPERIENCES.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>Experience — Jenna Cho | Teaching Portfolio</title>
        <meta name="description" content="Jenna Cho's teaching experience — from K-6 substitute teaching to STEM summer school instructor." />
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
            {visible.map(({ role, school, city, date, highlights }, i) => (
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

          {EXPERIENCES.length > 4 && !showAll && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-1 rounded-xl border border-stone-200 bg-white px-6 py-3 text-sm font-medium text-stone-600 transition hover:bg-warm-50 hover:border-accent/30"
              >
                View Earlier Experience <FiChevronDown size={16} />
              </button>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
