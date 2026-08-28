import todos from '../assets/all.png'
import Header from './Header';
import Footer from './Footer'


function Allproducts() {
  return (
    <div className="max-h-dvh">
      <Header />
        <main className="relative w-full min-h-screen">
          <img src={todos} alt="Imagem com todos os produtos" className="absolute w-full h-full object-cover"/>
        
          <section className="relative flex min-h-screen flex-col items-center justify-center bg-gray-300/80 px-6 text-center">
              <h2 className="max-w-3xl text-lg font-medium">
                Nossos produtos são, em grande parte, personalizados. Para conhecer de perto nossos veículos e utilidades, e solicitar as personalizações, visite o nosso showroom e venha se admirar com a revolução tecnológica que está chegando:
              </h2>
              <p className="mt-4">Av. Rebouças, nº999, CEP 00000-000</p>
              <p className="mt-2">Telefone/Whatsapp: 11 99999-9999</p>
          </section>        
        </main>
      <Footer />
    </div>
  );
}

export default Allproducts;
