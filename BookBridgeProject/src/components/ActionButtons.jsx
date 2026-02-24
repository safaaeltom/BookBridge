function ActionButtons({ selectedCountry, navigate }) {
  const handleGetBook = () => {
    if (!selectedCountry) {
      alert("Please select a country first");
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
    <div className="flex gap-4 w-full justify-center mt-2">
      <button
        className={`flex-1 bg-green-500 text-white p-2 rounded ${
          !selectedCountry ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleGetBook}
        disabled={!selectedCountry}
      >
        Get Book
      </button>
      <button
        className={`flex-1 bg-blue-500 text-white p-2 rounded ${
          !selectedCountry ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleGiveBook}
        disabled={!selectedCountry}
      >
        Give Book
      </button>
    </div>
  );
}

export default ActionButtons;