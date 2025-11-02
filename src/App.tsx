import './App.css'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-emerald-600 text-white py-6 shadow-md">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Martijn Verhappen</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:underline">About me</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <section id="about" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-emerald-700 mb-4">About</h2>
        <p className="text-lg leading-relaxed">
          I am <span className="font-semibold">Martijn Verhappen</span>, a HBO-ICT student at Fontys Hogescholen
          with a specialisation in <span className="text-emerald-700 font-medium">game design</span>. 
          I have experience with <b>C#, Java, React, SQL, NoSQL</b> en <b>Unity</b>.  
          During my internship, I want to learn more about professional software development
          and collaborate within a real workflow.
        </p>
      </section>

      <section id="projects" className="bg-white py-16 shadow-inner">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-emerald-700 mb-8">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Online Chess Game</h3>
              <p className="text-gray-700 mb-3">
                An online chess game with real-time multiplayer built with React and Java Spring Boot.
                Includes WebSocket communication for live updates.
              </p>
              <p className="text-sm text-gray-600">
                <b>Technologies:</b> React, Java, Spring Boot, STOMP, WebSockets
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Escape velocity (Unity Game)</h3>
              <p className="text-gray-700 mb-3">
                A 2D momentum based platformer where the player navigates a space station that is breaking down.
              </p>
              <p className="text-sm text-gray-600">
                <b>Technologies:</b> C#, Unity, Physics Engine
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-emerald-700 mb-4">Contact</h2>
        <p className="text-lg mb-4">Do you wish to contact me of find out more about me?</p>

        <ul className="space-y-2 text-lg">
          <li><b>Email:</b> <a href="mailto:482992@student.fontys.nl" className="text-emerald-700 hover:underline">482992@student.fontys.nl</a></li>
          <li><b>Telefoon:</b> 06-21909443</li>
          <li><b>GitHub:</b> <a href="https://github.com/martijnverhappen" className="text-emerald-700 hover:underline">github.com/martijnverhappen</a></li>
        </ul>
      </section>

      <footer className="bg-gray-200 py-6 text-center text-gray-600">
        © {new Date().getFullYear()} Martijn Verhappen — Portfolio
      </footer>
    </div>
  )
}