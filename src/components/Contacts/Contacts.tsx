
function Contacts() {
  return (
    <div className="h-auto w-full bg-zinc-900 text-white mx-auto px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 ">Contacts</h1>
        <p className="mt-4 text-lg">
          You can contact me through the following channels:<br />
          Email: <a href="mailto:bishuthapa570@gmail.com" className="text-blue-500 hover:underline">Bishuthapa570@gmail.com</a><br />
          <a href="https://github.com/bishuthapa" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> GitHub</a><br />
          <a href="https://www.linkedin.com/in/bishu-t-53b239277/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> LinkedIn</a>
                    </p>
      </div>
    </div>
  );
}

export default Contacts