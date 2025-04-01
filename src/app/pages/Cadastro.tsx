const Cadastro = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Cadastrar Alimento</h1>
      <form>
        <div className="mb-4">
          <label className="block text-lg">Nome do Alimento</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Digite o nome do alimento"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg">Descrição</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Descreva o alimento"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-[#FF8C42] text-white text-xl font-bold rounded-lg"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Cadastro;
