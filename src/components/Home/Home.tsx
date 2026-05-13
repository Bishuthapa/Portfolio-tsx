import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="w-full px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
          Frontend Developer
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
          Hi, I&apos;m Bishesh Thapa. I build fast, responsive web apps with
          modern JavaScript tools.
        </h1>
        <p className="mb-8 max-w-3xl text-lg text-gray-700 dark:text-gray-300">
          I focus on clean UI, performance, and practical user experience using
          React, TypeScript, and modern frontend workflows.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-black"
          >
            View Projects
          </Link>
          <Link
            to="/contacts"
            className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-900"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
