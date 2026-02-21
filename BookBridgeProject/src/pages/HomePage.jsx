import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/africa")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch countries");
        return res.json();
      })
      .then((data) => {
        const sorted = data
          .map((c) => c.name.common)
          .sort((a, b) => a.localeCompare(b));
        setCountries(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to fetch countries");
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-bold">Welcome to BookBridge</h1>

      {loading && <p>Loading countries...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          <div>
            <label className="mr-2 font-medium">Country :</label>
            <select
              className="border p-2 rounded"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value=""> Choose Country </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-4">
            <button
              className={`bg-green-500 text-white p-2 rounded ${
                !selectedCountry ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => {
                if (!selectedCountry) {
                  alert("Please select a country first");
                  return;
                }
                navigate("/books-list", { state: { country: selectedCountry } });
              }}
              disabled={!selectedCountry}
            >
              Get Book
            </button>

            <button
              className={`bg-blue-500 text-white p-2 rounded ${
                !selectedCountry ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => {
                if (!selectedCountry) {
                  alert("Please select a country first");
                  return;
                }
                navigate("/give-book", { state: { country: selectedCountry } });
              }}
              disabled={!selectedCountry}
            >
              Give Book
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;