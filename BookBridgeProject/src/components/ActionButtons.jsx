function ActionButtons({ selectedCountry, navigate }) {
  const handleGetBook = () => {
    if (!selectedCountry) {
      return;
    }
    navigate("/books-list", { state: { country: selectedCountry } });
  };

  const handleGiveBook = () => {
    if (!selectedCountry) {
      alert("Please select a country first");
      return;
    }
    navigate("/give-book", { state: { country: selectedCountry } });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4 px-4">
      <button
        className={`
          w-full sm:w-48
          py-4
          text-white
          font-semibold
          rounded-lg
         bg-white/2
          backdrop-blur-sm
          border border-white/30
          hover:bg-white/20
          transition duration-300
          ${!selectedCountry ? "opacity-50 cursor-not-allowed" : ""}
        `}
        onClick={handleGetBook}
        disabled={!selectedCountry}
      >
        Get Book
      </button>

      <button
       className={`
          w-full sm:w-48
          py-4
          text-white
          font-semibold
          rounded-lg
         bg-white/2
          backdrop-blur-sm
          border border-white/30
          hover:bg-white/20
          transition duration-300
          ${!selectedCountry ? "opacity-50 cursor-not-allowed" : ""}
        `}
        onClick={handleGiveBook}
        disabled={!selectedCountry}
      >
        Give Book
      </button>
    </div>
  );
}

export default ActionButtons;