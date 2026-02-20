import { useNavigate } from "react-router-dom";
import { useState } from "react";

function HomePage() {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <div className="flex h-screen">

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">

        {/* Top: Country Dropdown */}
        <div>
          <label className="mr-2 font-medium">Country :</label>
          <select
            className="border p-2 rounded"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value=""> Choose Country </option>
            <option>Uganda</option>
            <option>Sudan</option>
            <option>Kenya</option>
            <option>Egypt</option>
          </select>
        </div>

        {/* Placeholder / Welcome Message */}
        <div className="flex-1 flex items-center justify-center">
          <p>Welcome! Use the buttons below to get or give books.</p>
        </div>

        {/* Bottom: Buttons */}
        <div className="flex gap-4">
          <button
            className="bg-green-500 text-white p-2 rounded"
            onClick={() => {
              if (!selectedCountry) {
                alert("Please select a country first");
                return;
              }
              navigate("/books-list", { state: { country: selectedCountry } });
            }}
          >
            Get Book
          </button>

          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => {
                if (!selectedCountry) {
                alert("Please select a country first");
                return;
                }
                navigate("/give-book", { state: { country: selectedCountry } });
            }}
            >
            Give Book
          </button>

        </div>

      </div>
    </div>
  );
}

export default HomePage;
