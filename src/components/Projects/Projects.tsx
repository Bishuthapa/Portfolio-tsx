const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal website built with React, TypeScript, and Tailwind CSS to present my profile and work.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/bishuthapa",
    live: "#",
  },
  {
    title: "Task Manager App",
    description:
      "A productivity app focused on clean UI and practical task workflows such as create, update, and status tracking.",
    stack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/bishuthapa",
    live: "#",
  },
  {
    title: "Blog Platform",
    description:
      "An MDX-friendly blog setup for writing technical posts with reusable components and fast static delivery.",
    stack: ["React", "MDX", "TypeScript", "Vite"],
    github: "https://github.com/bishuthapa",
    live: "#",
  },
];

function Projects() {
  return (
    <section className="w-full px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-4xl font-bold">Projects</h1>
        <p className="mb-10 text-base text-gray-700 dark:text-gray-300">
          Selected work that reflects my focus on clean UI, maintainable code,
          and practical user experience.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
            >
              <h2 className="mb-2 text-2xl font-semibold">{project.title}</h2>
              <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                {project.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium dark:bg-gray-800"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm font-semibold">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
