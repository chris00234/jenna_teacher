import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FiX } from 'react-icons/fi';
import { useFadeIn } from '../hooks/useFadeIn';
import DocPreview from '../components/DocPreview';

import stretchy1 from '../assets/stretchy1.png';
import stretchy2 from '../assets/stretchy2.png';
import st1 from '../assets/st1.png';
import st2 from '../assets/st2.png';
import pt1 from '../assets/pt1.png';
import pt2 from '../assets/pt2.png';
import care1 from '../assets/care1.png';
import care2 from '../assets/care2.png';
import vote1 from '../assets/vote1.png';
import vote2 from '../assets/vote2.png';
import formal1 from '../assets/formal1.png';
import formal2 from '../assets/formal2.png';
import rp1 from '../assets/rp1.png';
import rp2 from '../assets/rp2.png';
import ss1 from '../assets/ss1.png';
import ss2 from '../assets/ss2.png';
import fm1 from '../assets/fm1.png';
import fm2 from '../assets/fm2.png';
import ms from '../assets/ms.png';
import in1 from '../assets/in1.png';
import in2 from '../assets/in2.png';
import in3 from '../assets/in3.png';
import ela1 from '../assets/ela1.png';
import ela2 from '../assets/ela2.png';
import m1 from '../assets/m1.png';
import m2 from '../assets/m2.png';
import lg1 from '../assets/lg1.png';
import lg2 from '../assets/lg2.png';
import a1 from '../assets/a1.png';
import a2 from '../assets/a2.png';

function Section({ children, className = '' }) {
  const ref = useFadeIn();
  return <section ref={ref} className={`fade-in-up ${className}`}>{children}</section>;
}

const FILTERS = ['All', 'Lesson Plans', 'Student Work', 'Classroom Culture'];

const STUDENT_WORK = [
  { cat: 'Student Work', title: 'Stretchy Sentences', images: [stretchy1, stretchy2], desc: 'Developing descriptive writing through sentence expansion.' },
  { cat: 'Student Work', title: 'Story Time', images: [st1, st2], desc: 'Creative storytelling with beginning, middle, and end.' },
  { cat: 'Student Work', title: 'Pattern Blocks', images: [pt1, pt2], desc: 'Exploring symmetry and geometry with manipulatives.' },
  { cat: 'Classroom Culture', title: 'How I Care for Our Planet', images: [care1, care2], desc: 'Integrated writing + art for Earth Day awareness.' },
  { cat: 'Classroom Culture', title: 'Voting Day', images: [vote1, vote2], desc: 'Civic engagement through classroom elections.' },
  { cat: 'Classroom Culture', title: 'Formal Observation', images: [formal1, formal2], desc: 'Peer-observed lesson demonstrating PBL strategies.' },
  { cat: 'Student Work', title: 'Research Projects', images: [rp1, rp2], desc: 'Student-led research on animals and habitats.' },
  { cat: 'Student Work', title: 'Social Studies', images: [ss1, ss2], desc: 'Community helpers and local government exploration.' },
  { cat: 'Student Work', title: 'Family Math', images: [fm1, fm2], desc: 'Math activities connecting school and home learning.' },
  { cat: 'Student Work', title: 'Morning Starter', images: [ms], desc: 'Daily warm-up routines building foundational skills.' },
  { cat: 'Lesson Plans', title: 'Cloud Formations', images: [in1, in2, in3], desc: 'Scientific observation and classification of clouds.' },
  { cat: 'Lesson Plans', title: 'ELA Workshop', images: [ela1, ela2], desc: 'Reading and writing workshop mini-lessons.' },
  { cat: 'Lesson Plans', title: 'Math Centers', images: [m1, m2], desc: 'Differentiated math stations for varied learners.' },
  { cat: 'Lesson Plans', title: 'Lego Coding', images: [lg1, lg2], desc: 'STEM integration through Lego robotics and coding.' },
  { cat: 'Lesson Plans', title: 'Art Integration', images: [a1, a2], desc: 'Cross-curricular art projects with standards alignment.' },
];

const LESSON_DOCS = [
  {
    title: 'Tustin Connect 2nd & 3rd Grade Lesson Plan/Slides',
    embedUrl: 'https://docs.google.com/presentation/d/1vt_qgcRvDbBpE4u4p0zvNKAfaPlBTPSj18uEiLN3smM/edit?slide=id.g341f093d255_0_5038#slide=id.g341f093d255_0_5038/preview',
  },
  {
    title: 'El Cerrito 1st Grade Lesson Plans',
    embedUrl: 'https://docs.google.com/presentation/d/1OFZoSYWl8VmKD1l4xxBRUzRNF6l6s_h4Kqr7PeMwGb0/edit?slide=id.g341f093d255_0_5038#slide=id.g341f093d255_0_5038/preview',
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === 'All' ? STUDENT_WORK : STUDENT_WORK.filter(w => w.cat === filter);

  return (
    <>
      <Helmet>
        <title>Portfolio — Jenna Cho | Teaching Portfolio</title>
        <meta name="description" content="Explore Jenna Cho's lesson plans, student work samples, and classroom culture." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-b from-warm-50 to-white pt-28 pb-12 md:pt-36">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">My Work</p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-stone-900 md:text-4xl">Portfolio</h1>
          <p className="mt-4 text-base text-stone-500">
            Lesson plans, student work samples, and classroom moments that showcase my teaching approach.
          </p>
        </div>
      </section>

      {/* Lesson Plan Docs */}
      <Section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl font-bold text-stone-800">Lesson Plans & Slides</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {LESSON_DOCS.map((doc) => (
              <DocPreview key={doc.title} title={doc.title} embedUrl={doc.embedUrl} />
            ))}
          </div>
        </div>
      </Section>

      {/* Filter + Gallery */}
      <Section className="bg-warm-50/30 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl font-bold text-stone-800">Student Work & Classroom Culture</h2>

          {/* Filters */}
          <div className="mt-6 flex flex-wrap gap-2">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  filter === f
                    ? 'bg-accent text-white shadow-sm'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-warm-50 hover:border-accent/30'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(({ title, images, desc, cat }) => (
              <div
                key={title}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
                onClick={() => setLightbox({ title, images, desc, cat })}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={images[0]}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-accent">{cat}</span>
                  <h3 className="mt-1 font-semibold text-stone-800">{title}</h3>
                  <p className="mt-1 text-sm text-stone-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition hover:bg-stone-200"
              aria-label="Close"
            >
              <FiX size={20} />
            </button>
            <span className="text-xs font-medium text-accent">{lightbox.cat}</span>
            <h3 className="mt-1 font-serif text-2xl font-bold text-stone-800">{lightbox.title}</h3>
            <p className="mt-2 text-sm text-stone-500">{lightbox.desc}</p>
            <div className="mt-6 grid gap-4">
              {lightbox.images.map((src, i) => (
                <img key={i} src={src} alt={`${lightbox.title} ${i + 1}`} className="w-full rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
