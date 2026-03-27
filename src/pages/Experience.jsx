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
    school: 'Springbrook Elementary, Irvine Unified School District',
    city: 'Irvine, CA',
    date: 'June 2025 – Current',
    highlights: [
      'Facilitate daily student-centered rotations using Language Power, Imagine Learning, and district resources to build academic vocabulary, reading comprehension, and oral language through targeted instruction and collaboration.',
      'Administer diagnostic assessments to guide instructional planning based on students\' language proficiency.',
      'Collaborate during PLC time with 6th grade teachers to align lesson planning, share instructional strategies, and support student growth across content areas.',
    ],
  },
  {
    role: 'K – 3rd Grade Long-Term Substitute Teacher',
    school: 'Tustin Connect K-12, Tustin Unified School District',
    city: 'Tustin, CA',
    date: 'February 2025 – Present',
    highlights: [
      'Led differentiated, standards-based instruction in a self-contained K–3 multi-grade classroom.',
      'Delivered daily GATE-aligned ELA instruction incorporating Depth & Complexity thinking tools.',
      'Integrated Words Their Way, SEL, Mystery Science, plus standards-based music, art & science tied to weekly themes.',
      'Managed in-person and hybrid grading across K–6, including data tracking and online assignment input.',
    ],
  },
  {
    role: 'Long-Term Substitute 3rd Grade Teacher',
    school: 'Irvine International Academy',
    city: 'Irvine, CA',
    date: 'September 2024 – January 2025',
    highlights: [
      'Crafted & executed dynamic, standards-based ELA & Math curricula in an engaging, highly organized environment.',
      'Used iReady data to boost reading proficiency from 27%→45% and math from 21%→29%.',
      'Implemented small-group instruction to enhance comprehension & problem-solving skills.',
      'Communicated progress in parent conferences using diagnostic & formative data.',
      'Collaborated with colleagues to ensure seamless curriculum alignment.',
    ],
  },
  {
    role: 'Substitute Teacher',
    school: 'Irvine Unified School District (IUSD)',
    city: 'Irvine, CA',
    date: 'June 2024 – August 2024',
    highlights: [
      'Delivered high-quality instruction across TK–12, maintaining strong classroom management.',
      'Adapted lessons to diverse needs and collaborated with staff to align with district standards.',
    ],
  },
  {
    role: '2nd-Grade Summer School Lead Teacher',
    school: 'E-Plex Education Complex',
    city: 'Buena Park, CA',
    date: 'June 2024 – August 2024',
    highlights: [
      'Developed engaging English, Writing & Math lesson plans, integrating robotics for STEM learning.',
      'Assessed performance via observations, assignments & tests; collaborated on progress reports.',
      'Designed & taught a basic sewing class, fostering creativity & fine motor skills.',
    ],
  },
  {
    role: 'Korean Teacher',
    school: 'E-Plex Education Complex',
    city: 'Buena Park, CA',
    date: 'January 2024 – August 2024',
    highlights: [
      'Created & taught Korean basics to grades 1–6, from alphabet to sentence creation.',
      'Managed testing data; strategies raised individual scores by 95%.',
    ],
  },
  {
    role: '2nd-Grade Afterschool Teacher',
    school: 'E-Plex Education Complex',
    city: 'Buena Park, CA',
    date: 'January 2024 – August 2024',
    highlights: [
      'Designed literacy, math & social studies lessons aligned to Common Core.',
      'Implemented open-door policy to involve parents in feedback & collaboration.',
      'Boosted reading & math comprehension by 40% via daily "Genius Packets."',
    ],
  },
  {
    role: 'Short-Term Kindergarten Teacher',
    school: 'El Cerrito Elementary School',
    city: 'La Habra, CA',
    date: 'March 2024',
    highlights: [
      'Designed differentiated, standards-based lessons for individual student needs.',
      'Organized an Open House showcasing student work & classroom activities.',
      'Built classroom management systems to engage students in a positive learning environment.',
    ],
  },
  {
    role: 'Resident Substitute Teacher',
    school: 'El Cerrito Elementary School, La Habra City School District',
    city: 'La Habra, CA',
    date: 'October 2023 – June 2024',
    highlights: [
      'Supported "Code to the Future" coding & CS program with Scratch, robotics & Minecraft.',
      'Worked across grades K–6, including autism-spectrum classes; provided tailored support.',
      'Served as MTSS Assistant: mentored students, modeled strategies & led leveled small groups.',
      'Organized a 4th-grade field trip (29 students) to a Class Act Youth Concert.',
    ],
  },
  {
    role: 'Substitute Teacher',
    school: 'La Habra City School District',
    city: 'La Habra, CA',
    date: 'August 2023 – October 2023',
    highlights: [
      'Delivered instruction TK–8 in absence of regular teachers, ensuring continuity.',
      'Participated in planning meetings & provided structured feedback on classroom experiences.',
      'Earned repeat requests from staff due to organized, reflective practice.',
    ],
  },
  {
    role: 'Full-Time Student Teacher (2nd & 5th Grade)',
    school: 'Tulsa St. & Darby Ave. Elementary Schools',
    city: 'Granada Hills, CA',
    date: 'January 2022 – December 2022',
    highlights: [
      'Crafted CA Standards-aligned lessons across Math, ELA, PE, Music, Social Science & Science.',
      'Provided RtI and individualized support via Benchmark Advance, Eureka & CGI Math.',
      'Delivered targeted small-group instruction to boost below-grade-level student progress.',
    ],
  },
  {
    role: 'Teacher & President',
    school: 'Korean School',
    city: 'Northridge, CA',
    date: 'July 2013 – 2018',
    highlights: [
      'Taught Korean language & culture to grades 5–12; prepared weekly lesson plans.',
      'Maintained detailed student records (scores, attendance); led educator meetings.',
      'Achieved 98% pass rate on SAT Korean & ACTFL assessments.',
    ],
  },
];

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? EXPERIENCES : EXPERIENCES.slice(0, 5);

  return (
    <>
      <Helmet>
        <title>Experience — Jenna Cho | Teaching Portfolio</title>
        <meta name="description" content="Overview of Jenna Cho's varied teaching roles, from K–3 long-term subs to student teaching and beyond." />
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

          {EXPERIENCES.length > 5 && !showAll && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-1 rounded-xl border border-stone-200 bg-white px-6 py-3 text-sm font-medium text-stone-600 transition hover:bg-warm-50 hover:border-accent/30"
              >
                View All {EXPERIENCES.length} Positions <FiChevronDown size={16} />
              </button>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
