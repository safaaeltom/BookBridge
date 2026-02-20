import { useState } from "react";
import { useLocation } from "react-router-dom";

function GiveBookPage() {
  const location = useLocation();
  const preselectedCountry = location.state?.country || "";

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [donor, setDonor] = useState("");
  const [country, setCountry] = useState(preselectedCountry); // pre-select country if passed

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      title,
      image,
      category,
      donor,
      country, // save the country
    };

    // Get existing books from localStorage
    const existingBooks =
      JSON.parse(localStorage.getItem("books")) || [];

    // Add new book to the list
    const updatedBooks = [...existingBooks, newBook];

    // Save updated list back to localStorage
    localStorage.setItem("books", JSON.stringify(updatedBooks));

    alert("Book submitted successfully!");

    // Reset form
    setTitle("");
    setImage("");
    setCategory("");
    setDonor("");
    setCountry(preselectedCountry); // reset to pre-selected country
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Donate a Book</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input
          type="text"
          placeholder="Book Title"
          className="border p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Book Image URL"
          className="border p-2"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <select
          className="border p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option>Science</option>
          <option>Math</option>
          <option>English</option>
          <option>History</option>
        </select>

        <input
          type="text"
          placeholder="Donor Name"
          className="border p-2"
          value={donor}
          onChange={(e) => setDonor(e.target.value)}
          required
        />

        {/* Country Dropdown */}
        <select
          className="border p-2"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          <option value="">Select Country</option>
          <option>Uganda</option>
          <option>Sudan</option>
          <option>Kenya</option>
          <option>Egypt</option>
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default GiveBookPage;
