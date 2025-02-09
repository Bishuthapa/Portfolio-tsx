function PrivacyPolicy() {
  return (
    <div className="h-auto w-full bg-zinc-900 text-white mx-auto px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            Welcome to our Privacy Policy page! When you use our web services, you trust us with your information. This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do with it.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">
            We collect information to provide better services to all our users. We collect information in the following ways:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Information you give us.</li>
            <li>Information we get from your use of our services.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Information</h2>
          <p className="mb-4">
            We use the information we collect from all our services to provide, maintain, protect and improve them, to develop new ones, and to protect our users.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Share</h2>
          <p className="mb-4">
            We do not share personal information with companies, organizations, and individuals outside of our company unless one of the following circumstances applies:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>With your consent.</li>
            <li>For external processing.</li>
            <li>For legal reasons.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us.
            <br />
            Email: <a href="mailto:bishuthapa570@gmail.com" className="text-blue-500 hover:underline">Bishuthapa570@gmail.com</a>
            <br />
            <a href="https://github.com/bishuthapa" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> GitHub</a>
            <br />
            <a href="https://www.linkedin.com/in/bishu-t-53b239277/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> LinkedIn</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;