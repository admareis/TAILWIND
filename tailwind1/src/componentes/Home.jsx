import Header from './Header'
import Footer from './Footer'
import video from '../assets/Electric_vehicles_in_city_center_202608242157.mp4';

function TelaInicial() {
    return (
        <div className="min-h-screen text-slate-800">
            <Header />

            <main className="relative w-full min-h-screen">
                <video autoPlay muted loop className="w-full h-full object-cover">
                    <source src={video} type="video/mp4" />
                </video>
                <section className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">

                    <p className="text-sm uppercase tracking-[0.9em] text-blue-300">Bem-vindo</p>

                    <h2 className="mt-4 text-4xl font-bold text-white">STARGREEN TECHNOLOGY</h2>

                    <p className="mt-6 text-lg text-slate-200 max-w-2xl mx-auto px-4">
                        Soluções digitais para impulsionar negócios, tecnologia e inovação com design moderno.
                    </p>
                    
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default TelaInicial