import { Helmet } from 'react-helmet';
import { FiMail, FiPhone, FiLinkedin, FiDownload, FiArrowRight } from 'react-icons/fi';
import { useFadeIn } from '../hooks/useFadeIn';
import headshot from '../assets/profile.png';

function Section({ children, className = '' }) {
  const ref = useFadeIn();
  return <section ref={ref} className={`fade-in-up ${className}`}>{children}</section>;
}

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — Jenna Cho | Teaching Portfolio</title>
        <meta name="description" content="Get in touch with Jenna Cho — elementary educator seeking teaching opportunities in Orange County." />
      </Helmet>

      <section className="bg-gradient-to-b from-warm-50 to-white pt-28 pb-24 md:pt-36">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Get in Touch</p>
            <h1 className="mt-3 font-serif text-3xl font-bold text-stone-900 md:text-4xl">
              Let's Connect
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-stone-500">
              Thank you for visiting my teaching portfolio! I'm passionate about education and
              always eager to connect with fellow educators, administrators, and anyone interested
              in learning more about my teaching journey.
            </p>
          </div>

          <Section className="mt-16">
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              {/* Contact card */}
              <div className="rounded-2xl border border-stone-100 bg-white p-8 shadow-sm">
                <img
                  src={headshot}
                  alt="Jenna Cho"
                  className="mx-auto h-28 w-28 rounded-full border-2 border-warm-100 object-cover"
                />
                <h2 className="mt-5 text-center font-serif text-xl font-bold text-stone-800">Jenna Cho</h2>
                <p className="mt-1 text-center text-sm text-stone-500">Elementary Educator</p>

                <div className="mt-8 space-y-4">
                  <a
                    href="mailto:jennachoteacher@gmail.com"
                    className="flex items-center gap-4 rounded-xl border border-stone-100 bg-warm-50/50 px-5 py-4 text-sm font-medium text-stone-700 transition hover:bg-warm-100 hover:border-accent/20"
                  >
                    <FiMail className="text-accent" size={20} />
                    jennachoteacher@gmail.com
                  </a>

                  <a
                    href="tel:+12133320153"
                    className="flex items-center gap-4 rounded-xl border border-stone-100 bg-warm-50/50 px-5 py-4 text-sm font-medium text-stone-700 transition hover:bg-warm-100 hover:border-accent/20"
                  >
                    <FiPhone className="text-accent" size={20} />
                    (213) 332-0153
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jenna-cho-728a972b5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-stone-100 bg-warm-50/50 px-5 py-4 text-sm font-medium text-stone-700 transition hover:bg-warm-100 hover:border-accent/20"
                  >
                    <FiLinkedin className="text-accent" size={20} />
                    LinkedIn Profile
                    <FiArrowRight className="ml-auto text-stone-400" size={14} />
                  </a>
                </div>
              </div>

              {/* CTA card */}
              <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-accent to-accent-dark p-8 text-white shadow-lg">
                <div>
                  <h2 className="font-serif text-2xl font-bold">Looking for a Passionate Educator?</h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    I bring creativity, rigor, and heart to every classroom. Whether you need a
                    full-time teacher, a long-term substitute, or a summer school instructor,
                    I'd love to be part of your team.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-white/90">
                    <li className="flex items-center gap-2">✓ CA Multiple Subject Credential</li>
                    <li className="flex items-center gap-2">✓ Google Certified Educator</li>
                    <li className="flex items-center gap-2">✓ K-6 Experience (Irvine & Tustin USD)</li>
                    <li className="flex items-center gap-2">✓ PBL & STEM Specialist</li>
                  </ul>
                </div>

                <a
                  href="/Jenna Cho - Resume.pdf"
                  download
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-accent-dark shadow-md transition hover:bg-warm-50 hover:-translate-y-0.5"
                >
                  <FiDownload size={16} /> Download My Resume
                </a>
              </div>
            </div>
          </Section>
        </div>
      </section>
    </>
  );
}
