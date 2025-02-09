function About() {
  return (
    <div className="h-auto w-full bg-zinc-900 text-white mx-auto px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <p className="mt-4 text-lg">
          I&apos;m a passionate developer with experience in building web
          applications using modern technologies. As a self-taught developer, I
          love learning new things.{" "}
        </p>{" "}
        <br />
        <h2 className="text-2xl font-semibold mb-4"> Technologies I am using </h2>
        <ul className="list-disc list-inside">
          <li>React</li>
          <li>Next.js</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Figma</li>
          <li>Blender</li>
          <li>DaVinci Resolve</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
