import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FiBookOpen, FiStar, FiHeart, FiArrowRight } from 'react-icons/fi';
import { useFadeIn } from '../hooks/useFadeIn';

import headshot from '../assets/headshot.jpg';
import credentialImg from '../assets/credential.png';
import csunLogo from '../assets/csun_logo.png';
import googleCert from '../assets/google.png';
import lg1 from '../assets/lg1.png';
import in3 from '../assets/in3.png';
import care1 from '../assets/care1.png';

function Section({ children, className = '' }) {
  const ref = useFadeIn();
  return (
    <section ref={ref} className={`fade-in-up ${className}`}>
      {children}
    </section>
  );
}

const STRENGTHS = [
  {
    icon: FiBookOpen,
    title: 'Project-Based Learning',
    text: 'Hands-on projects with Scratch, robotics, and real-world connections that make learning unforgettable.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: FiStar,
    title: 'STEM Integration',
    text: 'Weaving science, technology, engineering, and math across the curriculum with standards-aligned rigor.',
    color: 'bg-rose-50 text-rose-500',
  },
  {
    icon: FiHeart,
    title: 'Inclusive Classrooms',
    text: 'Culturally responsive teaching that honors every student\'s identity, language, and learning style.',
    color: 'bg-emerald-50 text-emerald-600',
  },
];

const FEATURED = [
  { src: lg1, title: 'Coding with Lego', desc: 'Students design and build working Lego coding models integrating CS and engineering.' },
  { src: in3, title: 'Cloud Formations Unit', desc: 'Scientific observation meets art as students explore and classify cloud types.' },
  { src: care1, title: 'How I Care for Our Planet', desc: 'An integrated Earth Day project combining writing, art, and environmental science.' },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Jenna Cho — Elementary Educator | Teaching Portfolio</title>
        <meta name="description" content="Teaching portfolio of Jenna Cho — elementary educator specializing in Project-Based Learning, STEM integration, and culturally responsive teaching." />
      </Helmet>

      {/* ───── HERO ───── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-warm-50 via-white to-warm-100 pt-28 pb-20 md:pt-36 md:pb-28">
        {/* Decorative blobs */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-sage/5 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16 lg:gap-20">
          {/* Photo */}
          <div className="shrink-0">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/20 to-sage/20 blur-xl" />
              <img
                src={headshot}
                alt="Jenna Cho, elementary educator"
                className="relative h-56 w-56 rounded-full border-4 border-white object-cover shadow-2xl md:h-72 md:w-72 lg:h-80 lg:w-80"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Elementary Educator
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
              Jenna Cho
            </h1>
            <p className="mt-2 text-lg font-medium text-stone-500 md:text-xl">
              STEM & Project-Based Learning Specialist
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-600">
              Creating joyful, rigorous learning experiences where every child can discover, create, and thrive.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-dark hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
              >
                View Portfolio <FiArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-stone-200 bg-white px-7 py-3.5 text-sm font-semibold text-stone-700 transition-all hover:border-accent/30 hover:bg-warm-50 hover:-translate-y-0.5 active:scale-95"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Credential badges */}
        <div className="mx-auto mt-14 max-w-4xl px-6">
          <div className="flex items-center justify-center gap-8 rounded-2xl border border-stone-100 bg-white/90 px-8 py-5 shadow-md backdrop-blur-sm sm:gap-10 sm:px-10">
            <div className="flex items-center gap-4">
              <img src={credentialImg} alt="CA Teaching Credential" className="h-14 w-14 rounded-lg object-contain" />
              <span className="text-sm font-medium text-stone-700">CA Multiple Subject<br/>Credential</span>
            </div>
            <div className="h-10 w-px bg-stone-200" />
            <div className="flex items-center gap-4">
              <img src={csunLogo} alt="CSUN" className="h-14 w-14 rounded-lg object-contain" />
              <span className="text-sm font-medium text-stone-700">CSUN<br/>Graduate</span>
            </div>
            <div className="h-10 w-px bg-stone-200" />
            <div className="flex items-center gap-4">
              <img src={googleCert} alt="Google Certified" className="h-14 w-14 rounded-lg object-contain" />
              <span className="text-sm font-medium text-stone-700">Google Certified<br/>Educator</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───── STRENGTHS ───── */}
      <Section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-serif text-3xl font-bold text-stone-800 md:text-4xl">
            What I Bring to the Classroom
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-stone-500">
            Every lesson is an opportunity to spark curiosity, build confidence, and connect learning to the real world.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {STRENGTHS.map(({ icon: Icon, title, text, color }) => (
              <div
                key={title}
                className="group rounded-2xl border border-stone-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${color} transition-transform group-hover:scale-110`}>
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-stone-800">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ───── PHILOSOPHY PREVIEW ───── */}
      <Section className="bg-warm-50/50 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">My Philosophy</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-stone-800 md:text-4xl">
            Learning by Doing
          </h2>
          <blockquote className="mt-8 border-l-4 border-accent/30 pl-6 text-left text-lg leading-relaxed text-stone-600 italic">
            "I believe every student learns best by doing. Through hands-on projects,
            collaborative problem-solving, and real-world applications, I foster curiosity
            and critical thinking in the classroom."
          </blockquote>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition hover:text-accent-dark"
          >
            Read more about my approach <FiArrowRight size={14} />
          </Link>
        </div>
      </Section>

      {/* ───── FEATURED WORK ───── */}
      <Section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-serif text-3xl font-bold text-stone-800 md:text-4xl">
            Featured Student Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-stone-500">
            A glimpse into the projects and learning experiences from my classroom.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {FEATURED.map(({ src, title, desc }) => (
              <div
                key={title}
                className="group overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={src}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-stone-800">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-xl bg-stone-800 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-stone-900 hover:-translate-y-0.5 active:scale-95"
            >
              Explore Full Portfolio <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* ───── CTA BAND ───── */}
      <section className="bg-gradient-to-r from-accent to-accent-dark px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
            Let's Build Something Amazing Together
          </h2>
          <p className="mt-4 text-base text-white/80">
            I'm actively seeking an elementary teaching position where I can bring creativity, rigor, and heart to your school community.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-accent-dark shadow-lg transition-all hover:bg-warm-50 hover:-translate-y-0.5"
            >
              Contact Me
            </Link>
            <a
              href="/Jenna Cho - Resume.pdf"
              download
              className="rounded-xl border-2 border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
