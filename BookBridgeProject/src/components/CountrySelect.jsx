function CountrySelect({ countries, selectedCountry, setSelectedCountry }) {
  return (
    <div className="mb-4 w-full">
      <select
        className="border p-2 rounded w-full"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Choose Country</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CountrySelect;