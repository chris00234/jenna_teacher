import { FiMail, FiPhone, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-serif text-lg font-bold text-stone-800">Jenna Cho</p>
            <p className="mt-1 text-sm text-stone-500">
              Elementary Educator · STEM & PBL Specialist
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:jennacho@iusd.org"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-100 text-warm-700 transition hover:bg-warm-200"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
            <a
              href="tel:+12133320153"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-100 text-warm-700 transition hover:bg-warm-200"
              aria-label="Phone"
            >
              <FiPhone size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/jenna-cho-728a972b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-100 text-warm-700 transition hover:bg-warm-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-stone-400">
          &copy; {new Date().getFullYear()} Jenna Cho. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
