export default function Footer() {
    return (
      <footer className="border-t border-zinc-800 bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Luis Juárez</p>
            <div className="flex gap-6">
              <a href="https://github.com/LUISJG57" className="text-gray-400 hover:text-white">
                Github
              </a>
              <a href="https://www.linkedin.com/in/luisjuarezg/" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  