function CountrySelect({ countries, selectedCountry, setSelectedCountry }) {
  return (
    <div className="mb-4 flex justify-center w-full px-4">
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        className="
          w-full
          max-w-md
          py-4
          text-center
        text-white
          font-semibold
          rounded-lg
          bg-white/2
          backdrop-blur-sm
          border border-white/30
          hover:bg-white/20
          transition duration-300
          focus:outline-none
          focus:ring-2 focus:ring-white/30
        "
      >
        <option value="">Choose Country</option>
        {countries.map((country) => (
          <option 
          key={country} 
          value={country}
          className="bg-black text-white"
            >
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CountrySelect;