const Cadastro = () => {
    return (
      <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-[#2D8C44] mb-6 text-center">Cadastrar Alimento</h1>
        <form>
          <div className="mb-4">
            <label className="block text-lg text-gray-700">Nome do Alimento</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D8C44] focus:outline-none"
              placeholder="Digite o nome do alimento"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg text-gray-700">Descrição</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D8C44] focus:outline-none"
              placeholder="Descreva o alimento"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#FF8C42] text-white text-xl font-bold rounded-lg hover:bg-[#e67c35] transition"
          >
            Cadastrar
          </button>
        </form>
      </div>
    );
  };
  
  export default Cadastro;
  