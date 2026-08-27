import Header from './Header'
import Footer from './Footer'
import video from '../assets/Electric_vehicles_in_city_center_202608242157.mp4';

function TelaInicial() {
    return (
        <div className="max-h-dvh">
            <Header />

            <main className="relative w-full min-h-screen">
                <video autoPlay muted loop className="w-full h-full object-cover">
                    <source src={video} type="video/mp4" />
                </video>
                <section className="absolute inset-0 flex flex-col items-center justify-center bg">

                    <p className="text-5xl font-extrabold uppercase text-gray-50">Bem vindos a</p>

                    <h2 className="mt-4 text-7xl font-bold text-green-400">STARGREEN TECHNOLOGY</h2>

                    <p className="mt-6 text-3xl text-slate-100 max-w-5xl">Inovações para alavancar um futuro verde.</p>
                    
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default TelaInicial