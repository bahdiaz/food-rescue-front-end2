import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="relative">
        <img
          src="/images/food-banner.jpg"
          alt="Alimentos frescos"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">
              Ajude a reduzir o desperdício! Faça sua doação.
            </h1>
            <button className="mt-4 px-8 py-2 bg-[#FF8C42] text-white text-xl font-bold rounded-lg">
              Doe Agora
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <i className="fas fa-shopping-cart text-3xl"></i>
          </div>
          <h2 className="text-xl font-semibold text-center">
            Adicionar Alimento
          </h2>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <i className="fas fa-box-heart text-3xl"></i>
          </div>
          <h2 className="text-xl font-semibold text-center">
            Gerenciar Doações
          </h2>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <i className="fas fa-clock text-3xl"></i>
          </div>
          <h2 className="text-xl font-semibold text-center">Histórico</h2>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
