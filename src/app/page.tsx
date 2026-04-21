export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-900 to-green-900 text-white flex items-center justify-center">
      <div className="text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
          La Vallée des Nems
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-2xl mx-auto">
          Paysagiste professionnel à Nancy & Lorraine
        </p>
        <button className="btn-primary text-lg px-12 py-4">
          Devis Gratuit
        </button>
      </div>
    </section>
  )
}
