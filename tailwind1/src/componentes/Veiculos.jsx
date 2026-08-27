import minicarro from '../assets/carro_eletrico_stargreen_original.png'
import suv from '../assets/carrosuv.jpg'
import bike from '../assets/bike_eletrica_2.png'
import patinete from '../assets/patinete_eletrico_1.png'
import scooter from '../assets/lambreta.jpg'
import Header from './Header';
import Footer from './Footer'


function Veiculos() {
  return (
    <div className="max-h-dvh">
    <Header />
    <main className="min-h-screen bg-slate-100 text-slate-800 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-center text-emerald-800">Veículos</h1>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-md hover:bg-gray-100">
            <img src={minicarro} alt="Mini carro elétrico" className="w-full rounded-lg" />
            <h2 className="text-xl font-semibold">GreenGreen Mini</h2>
            <p className="mt-2 text-slate-600">Alta autonomia, designer moderno, projetado para deslocamentos em grandes cidades.</p>
          </div>   

          <div className="rounded-xl bg-white p-6 shadow-md hover:bg-gray-100">
            <img src={suv} alt="SUV carro elétrico" className="w-full rounded-lg" />
            <h2 className="text-xl font-semibold">GreenGreen SUV</h2>
            <p className="mt-2 text-slate-600">Interior espaçoso e com alto requinte. Totalmente silencioso para longas viagens e equipado com a mais avançada tecnologia. </p>
          </div>  

          <div className="rounded-xl bg-white p-6 shadow-md hover:bg-gray-100">
            <img src={bike} alt="Bicicleta Elétrica" className="w-full rounded-lg" />
            <h2 className="text-xl font-semibold">GreenGreen Bike</h2>
            <p className="mt-2 text-slate-600">Sem CNH, emplacamentou ou IPVA. Máxima agilidade para dominar o ritmo urbano. Mais autonomia, menos custo. Tecnologia completa. </p>
          </div> 


          <div className="rounded-xl bg-white p-6 shadow-md hover:bg-gray-100">
            <img src={patinete} alt="Bicicleta Elétrica" className="w-full rounded-lg" />
            <h2 className="text-xl font-semibold">GreenGreen Patinete</h2>
            <p className="mt-2 text-slate-600">Condução suave e segura, designer elegante e moderno. Velocidade de até 40km/h. Esta é a opção certa para quem busca praticidade e velocidade no dia a dia.   </p>
          </div> 

          <div className="rounded-xl bg-white p-6 shadow-md hover:bg-gray-100">
            <img src={scooter} alt="Bicicleta Elétrica" className="w-full rounded-lg" />
            <h2 className="text-xl font-semibold">GreenGreen Scooter</h2>
            <p className="mt-2 text-slate-600">Não se deixe enganar pelo visual nostálgico: sob esta carroceria cinza pulsa uma engenharia elétrica moderna de alto desempenho. Esta scooter oferece uma condução suave, potente e totalmente zero emissões. A elegância clássica que você ama, com a confiabilidade e sustentabilidade que você precisa. </p>
          </div> 

        </div>

        

      </div>
      
    </main>
    <Footer />
    </div>
  )
}

export default Veiculos;
