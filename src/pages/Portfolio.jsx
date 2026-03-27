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
import mail from '../assets/mail.png';
import police from '../assets/police.png';
import fire from '../assets/fire.png';

function Section({ children, className = '' }) {
  const ref = useFadeIn();
  return <section ref={ref} className={`fade-in-up ${className}`}>{children}</section>;
}

const FILTERS = ['All', 'Lesson Plans', 'Student Work', 'Classroom Culture'];

const STUDENT_WORK = [
  {
    cat: 'Student Work', title: 'Stretchy Sentence Fun!', images: [stretchy1, stretchy2],
    desc: 'Kindergarten and 2nd grade work samples from the Earth Day & Poetry Month integrated ELA unit combining environmental awareness with poetic expression.',
    school: 'Tustin Connect, Tustin USD',
  },
  {
    cat: 'Student Work', title: 'Soundtrack for the Earth', images: [st1, st2],
    desc: 'Students used author\'s craft tools such as alliteration, rhyme, imagery, and personification to create Earth-themed poems.',
    school: 'Tustin Connect, Tustin USD',
  },
  {
    cat: 'Student Work', title: 'Poem-Tale Author\'s Craft', images: [pt1, pt2],
    desc: '1st grade work samples applying poetic techniques while expressing care and concern for the environment.',
    school: 'Tustin Connect, Tustin USD',
  },
  {
    cat: 'Classroom Culture', title: 'How I Care for Our Planet', images: [care1, care2],
    desc: 'Art & ELA writing integration for Earth Day. Students brainstormed four ways to help save the Earth, wrote about each, then created drawings to visually represent their actions.',
    school: 'Tustin Connect, Tustin USD',
  },
  {
    cat: 'Student Work', title: 'Every Vote Counts — ELA', images: [vote1, vote2],
    desc: 'From a lesson on "Every Vote Counts" (McGraw Hill Wonders). I created a customized worksheet to reinforce comprehension strategies — identifying the main idea and understanding the author\'s purpose.',
    school: 'Irvine International Academy',
  },
  {
    cat: 'Student Work', title: 'Formal Assessment — Kids to the Rescue', images: [formal1, formal2],
    desc: 'Formal assessment evaluating understanding of "Kids to the Rescue" (McGraw Hill Wonders), including identifying the main idea, analyzing key details, and drawing connections to real-world problem-solving.',
    school: 'Irvine International Academy',
  },
  {
    cat: 'Student Work', title: 'Rescue Plan Poster Project', images: [rp1, rp2],
    desc: 'Extension activity for "Kids to the Rescue." Students imagined a rescue scenario, outlined a plan, and presented their ideas visually on a poster, integrating writing and artistic expression.',
    school: 'Irvine International Academy',
  },
  {
    cat: 'Student Work', title: 'Social Studies, 2nd Grade', images: [ss1, ss2],
    desc: '2nd grade social studies work samples.',
    school: 'Student Teaching',
  },
  {
    cat: 'Student Work', title: 'Figure Me Out — Math, 3rd Grade', images: [fm1, fm2],
    desc: '3rd grade math work samples.',
    school: 'Irvine International Academy',
  },
  {
    cat: 'Lesson Plans', title: 'Mystery Science, 2nd Grade', images: [ms],
    desc: '2nd grade Mystery Science work sample.',
    school: 'Student Teaching',
  },
  {
    cat: 'Lesson Plans', title: 'Science — What Is an Insect & Clouds Unit', images: [in1, in2, in3],
    desc: '1st grade science units covering insect identification and cloud formations.',
    school: 'El Cerrito Elementary',
  },
  {
    cat: 'Lesson Plans', title: 'English Language Arts', images: [ela1, ela2],
    desc: 'ELA Benchmark texts — Stone Soup (2nd grade) and a 5th grade reading sample.',
    school: 'Student Teaching',
  },
  {
    cat: 'Student Work', title: 'Math, 2nd Grade', images: [m1, m2],
    desc: '2nd grade math worksheets.',
    school: 'Student Teaching',
  },
  {
    cat: 'Lesson Plans', title: 'Coding with Lego', images: [lg1, lg2],
    desc: 'Students design and build working Lego Coding models, integrating computer science and engineering.',
    school: 'El Cerrito Elementary',
  },
  {
    cat: 'Lesson Plans', title: 'Fall Leaves — Cool & Warm Colors', images: [a1, a2],
    desc: '2nd grade arts project exploring cool and warm color theory through fall leaf art.',
    school: 'Student Teaching',
  },
  {
    cat: 'Classroom Culture', title: 'Community Helpers Unit — Kindergarten', images: [mail, police, fire],
    desc: 'Kindergarten arts and English integration exploring community helpers: mail carriers, police officers, and firefighters.',
    school: 'El Cerrito Elementary',
  },
];

const LESSON_PLAN_SECTIONS = [
  {
    heading: 'Tustin Connect — 2nd & 3rd Grade',
    docs: [
      {
        title: 'Tustin Connect 2nd & 3rd Grade Lesson Plan/Slides',
        subtitle: '3rd Grade',
        embedUrl: 'https://docs.google.com/presentation/d/1vt_qgcRvDbBpE4u4p0zvNKAfaPlBTPSj18uEiLN3smM/edit?slide=id.g341f093d255_0_5038#slide=id.g341f093d255_0_5038/preview',
        viewUrl: 'https://docs.google.com/presentation/d/1vt_qgcRvDbBpE4u4p0zvNKAfaPlBTPSj18uEiLN3smM/edit?slide=id.g341f093d255_0_5038#slide=id.g341f093d255_0_5038',
      },
    ],
  },
  {
    heading: 'Social Studies',
    docs: [
      {
        title: 'Social Studies Lesson Plan',
        subtitle: '2nd grade',
        embedUrl: 'https://docs.google.com/document/d/1ffR_zB7xu3aL3fGDReuenG-qXP0lcxoJA-4a-gPee58/preview',
        viewUrl: 'https://docs.google.com/document/d/1ffR_zB7xu3aL3fGDReuenG-qXP0lcxoJA-4a-gPee58',
      },
      {
        title: 'Social Studies Lesson Slides',
        subtitle: '2nd grade',
        embedUrl: 'https://docs.google.com/presentation/d/1p9b-rUMu7LfOduFQ9t0-f3cWlUWk4zIHji-_W6TCf0s/preview',
        viewUrl: 'https://docs.google.com/presentation/d/1p9b-rUMu7LfOduFQ9t0-f3cWlUWk4zIHji-_W6TCf0s/',
      },
    ],
  },
  {
    heading: 'Arts',
    docs: [
      {
        title: 'Arts Lesson Plan',
        subtitle: '2nd grade',
        embedUrl: 'https://docs.google.com/document/d/1MRAxETRBPtff2msMv0JWwnvR9dlIsPbn_BnEaLALNmI/preview',
        viewUrl: 'https://docs.google.com/document/d/1MRAxETRBPtff2msMv0JWwnvR9dlIsPbn_BnEaLALNmI',
      },
      {
        title: 'Arts Lesson Slides',
        subtitle: '2nd grade',
        embedUrl: 'https://drive.google.com/file/d/10_sat8wbNkOaUWYvswatMq3E7R5fVgJx/preview',
        viewUrl: 'https://drive.google.com/file/d/10_sat8wbNkOaUWYvswatMq3E7R5fVgJx',
      },
    ],
  },
  {
    heading: 'English Language Arts & Math',
    docs: [
      {
        title: 'English Language Arts',
        subtitle: '2nd grade',
        embedUrl: 'https://docs.google.com/document/d/1A1nEk65Kvw3L5N6k5aN_5qVEApEIRqsM5yCBwRzRguM/preview',
        viewUrl: 'https://docs.google.com/document/d/1A1nEk65Kvw3L5N6k5aN_5qVEApEIRqsM5yCBwRzRguM',
      },
      {
        title: 'Math',
        subtitle: '2nd grade',
        embedUrl: 'https://docs.google.com/document/d/1KQrDE5Kb9vopWsiolC0Z6nFoi-w8FY3wZiG5pSA8uxg/preview',
        viewUrl: 'https://docs.google.com/document/d/1KQrDE5Kb9vopWsiolC0Z6nFoi-w8FY3wZiG5pSA8uxg',
      },
    ],
  },
  {
    heading: 'Science',
    docs: [
      {
        title: 'Science Lesson Plan',
        subtitle: '2nd grade',
        embedUrl: 'https://docs.google.com/document/d/1xahTJK349X92aaap-nhkpsncokp7WUGwpIH2Ud8nSTk/preview',
        viewUrl: 'https://docs.google.com/document/d/1xahTJK349X92aaap-nhkpsncokp7WUGwpIH2Ud8nSTk',
      },
      {
        title: 'Science Lesson Slides',
        subtitle: '2nd grade',
        embedUrl: 'https://docs.google.com/presentation/d/1ToQ146UXfeYjBbdmOudFCOXoN9anXWHKOsOdLMkcRR8/preview',
        viewUrl: 'https://docs.google.com/presentation/d/1ToQ146UXfeYjBbdmOudFCOXoN9anXWHKOsOdLMkcRR8',
      },
    ],
  },
];

const RECOMMENDATION_LETTERS = [
  { title: 'Deanna Putnam', subtitle: 'Principal of El Cerrito Elementary School', embedUrl: 'https://drive.google.com/file/d/1Ac7ZxJPKRiqLpPhJmn0NDefBAv0hO1bF/preview', viewUrl: 'https://drive.google.com/file/d/1Ac7ZxJPKRiqLpPhJmn0NDefBAv0hO1bF' },
  { title: 'Paula Denen', subtitle: 'Former Principal of LAUSD and University Supervisor at CSUN', embedUrl: 'https://drive.google.com/file/d/1T5Qvmm1WIOzE2tRpJnHpZmi5OM_MBqG9/preview', viewUrl: 'https://drive.google.com/file/d/1T5Qvmm1WIOzE2tRpJnHpZmi5OM_MBqG9' },
  { title: 'Tiffany Ramirez', subtitle: '6th grade teacher, El Cerrito Elementary School', embedUrl: 'https://drive.google.com/file/d/1OgdThSIgMGH9oLjXl-WucphOcRqWv97t/preview', viewUrl: 'https://drive.google.com/file/d/1OgdThSIgMGH9oLjXl-WucphOcRqWv97t' },
  { title: 'Myrissa Ortiz', subtitle: '2nd grade teacher, Tulsa Street Elementary School', embedUrl: 'https://drive.google.com/file/d/1Alf4cOaW90WBACnponNnUHsYrHoQlYpz/preview', viewUrl: 'https://drive.google.com/file/d/1Alf4cOaW90WBACnponNnUHsYrHoQlYpz' },
  { title: 'Yiyuan Tiffany Zhang', subtitle: 'Assistant Principal, Irvine International Academy', embedUrl: 'https://drive.google.com/file/d/1bP2KiDcjfxR900oU0EMSo1wGv-f3awgH/preview', viewUrl: 'https://drive.google.com/file/d/1bP2KiDcjfxR900oU0EMSo1wGv-f3awgH' },
];

const TEACHING_DOCS = [
  { title: 'Early Field Experience Log', subtitle: '57 hours completed', embedUrl: 'https://drive.google.com/file/d/1DBRDDo8ueBifx3qxdWSl-R3fYPHjf7HB/preview', viewUrl: 'https://drive.google.com/file/d/1DBRDDo8ueBifx3qxdWSl-R3fYPHjf7HB' },
  { title: 'Multiple Subject Credential Program', subtitle: '', embedUrl: 'https://drive.google.com/file/d/1OCJmGmrNpRhuif7bB-VD8CjxW2htWnNo/preview', viewUrl: 'https://drive.google.com/file/d/1OCJmGmrNpRhuif7bB-VD8CjxW2htWnNo' },
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

      {/* Lesson Plans by Subject */}
      {LESSON_PLAN_SECTIONS.map(({ heading, docs }) => (
        <Section key={heading} className="px-6 py-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-serif text-2xl font-bold text-stone-800">{heading}</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {docs.map((doc) => (
                <DocPreview key={doc.title} title={doc.title} subtitle={doc.subtitle} embedUrl={doc.embedUrl} viewUrl={doc.viewUrl} />
              ))}
            </div>
          </div>
        </Section>
      ))}

      {/* Recommendation Letters */}
      <Section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl font-bold text-stone-800">Recommendation Letters</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {RECOMMENDATION_LETTERS.map((doc) => (
              <DocPreview key={doc.title} title={doc.title} subtitle={doc.subtitle} embedUrl={doc.embedUrl} viewUrl={doc.viewUrl} />
            ))}
          </div>
        </div>
      </Section>

      {/* Teaching Documentation */}
      <Section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl font-bold text-stone-800">Teaching Documentation</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {TEACHING_DOCS.map((doc) => (
              <DocPreview key={doc.title} title={doc.title} subtitle={doc.subtitle} embedUrl={doc.embedUrl} viewUrl={doc.viewUrl} />
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
            {filtered.map(({ title, images, desc, cat, school }) => (
              <div
                key={title}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
                onClick={() => setLightbox({ title, images, desc, cat, school })}
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
                  {school && <p className="mt-0.5 text-xs text-stone-400">{school}</p>}
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
