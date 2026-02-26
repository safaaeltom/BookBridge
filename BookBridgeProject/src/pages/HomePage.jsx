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
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
         style={{ backgroundImage: `url(${bgImage})`, filter: "none" }}
      />

      {/* Slight dark overlay for readablility */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Main content on top */}
      <div className="relative z-10 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl p-4 sm:p-6 md:p-8 flex flex-col items-center gap-6 text-white">
      <Header />

      {loading && <p className="text-sm sm:text-base md:text-lg">Loading countries...</p>}
      {error && <p className="text-sm sm:text-base md:text-lgtext-red-500">{error}</p>}

      {!loading && !error && (
         <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8">
          <CountrySelect
            countries={countries}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
          
          <ActionButtons
            selectedCountry={selectedCountry}
            navigate={navigate}
          />
        </div>
      )}
    </div>
    </div>
  );
}

export default HomePage;