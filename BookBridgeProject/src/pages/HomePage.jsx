import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import CountrySelect from "../components/CountrySelect";
import ActionButtons from "../components/ActionButtons";

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
      <Header />

      {loading && <p>Loading countries...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          <CountrySelect
            countries={countries}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />

          <ActionButtons
            selectedCountry={selectedCountry}
            navigate={navigate}
          />
        </>
      )}
    </div>
  );
}

export default HomePage;