import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import bgImage from "../assets/books-bg.jpg";
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
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
         style={{ backgroundImage: `url(${bgImage})`, filter: "none" }}
      />

      {/* Remove or reduce overlay */}
      {/* Optional: Slight dark overlay to make text readable */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Main content on top */}
      <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-lg text-white">
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
    </div>
  );
}

export default HomePage;