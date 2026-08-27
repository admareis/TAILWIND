import placasolar from '../assets/placa_solar_2.png'
import wallbox from '../assets/carregador_veicular_1.png'
import luzsolar from '../assets/luminaria_solar_1.png'
import camera from '../assets/camera_solar_1.png'
import compostagem from '../assets/compostagem.jpg'
import Header from './Header';
import Footer from './Footer'


function Utilidades() {
  return (
    <div className="max-h-dvh">
    <Header />
    <main className="min-h-screen bg-slate-100 text-slate-800 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-center text-emerald-800">Utilitários domésticos para facilitar o dia a dia</h1>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-md hover:bg-gray-100">
            <img src={placasolar} alt="Mini carro elétrico" className="w-full rounded-lg" />
            <h2 className="text-xl font-semibold">GreenGreen Placa Solar</h2>
            <p className="mt-2 text-slate-600">Nosso sistema gera energia elétrica para você utilizar qualquer equipamento da sua casa. Incluindo sistemas de aquecimento. Garantia de desempenho de 25 anos, mantendo até 80% da capacidade de geração inicial.</p>
          </div>   

          <div className="rounded-xl bg-white p-6 shadow-md hover:bg-gray-100">
            <img src={wallbox} alt="SUV carro elétrico" className="w-full rounded-lg" />
            <h2 className="text-xl font-semibold">GreenGreen Wallbox</h2>
            <p className="mt-2 text-slate-600">Carregador elétrico residencial inteligente com tela digital e conectividade, projetado para garantir recargas rápidas, seguras e eficientes para seu veículo.</p>
          </div>  

          <div className="rounded-xl bg-white p-6 shadow-md hover:bg-gray-100">
            <img src={luzsolar} alt="Bicicleta Elétrica" className="w-full rounded-lg" />
            <h2 className="text-xl font-semibold">GreenGreen Luminária Externa</h2>
            <p className="mt-2 text-slate-600">Poste de iluminação solar residencial com painel acoplado e lâmpadas LED de alta potência, oferecendo iluminação autônoma e custo zero de energia. </p>
          </div> 


          <div className="rounded-xl bg-white p-6 shadow-md hover:bg-gray-100">
            <img src={camera} alt="Bicicleta Elétrica" className="w-full rounded-lg" />
            <h2 className="text-xl font-semibold">GreenGreen Câmera</h2>
            <p className="mt-2 text-slate-600">Câmera de segurança externa alimentada por painel solar próprio e antenas Wi-Fi para monitoramento contínuo, prático e inteligente.</p>
          </div> 

          <div className="rounded-xl bg-white p-6 shadow-md hover:bg-gray-100">
            <img src={compostagem} alt="Bicicleta Elétrica" className="w-full rounded-lg" />
            <h2 className="text-xl font-semibold">GreenGreen Compostagem</h2>
            <p className="mt-2 text-slate-600">Triturador e composteira elétrica doméstica compacta, ideal para transformar resíduos orgânicos da cozinha em adubo de forma limpa, rápida e sem odores.</p>
          </div>           

        </div>        

      </div>
      
    </main>
    <Footer />
    </div>
  )
}

export default Utilidades;
