'use client'
export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
          NYMFA
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-emerald-600 font-medium">Accueil</a>
          <a href="#" className="hover:text-emerald-600 font-medium">Services</a>
          <a href="#" className="hover:text-emerald-600 font-medium">Réalisations</a>
          <a href="#" className="hover:text-emerald-600 font-medium">Contact</a>
        </div>
        <button className="btn-primary px-8 py-2">Contact</button>
      </nav>
    </header>
  )
}
