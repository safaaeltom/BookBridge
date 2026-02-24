import { useState } from "react";

function BookForm({ preselectedCountry }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [donor, setDonor] = useState("");
  const [country, setCountry] = useState(preselectedCountry || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      title,
      image,
      category,
      donor,
      country,
    };

    const existingBooks =
      JSON.parse(localStorage.getItem("books")) || [];

    const updatedBooks = [...existingBooks, newBook];

    localStorage.setItem("books", JSON.stringify(updatedBooks));

    alert("Book submitted successfully!");

    setTitle("");
    setImage("");
    setCategory("");
    setDonor("");
    setCountry(preselectedCountry || "");
  };

  return (
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
        <option>Other</option>
      </select>

      <input
        type="text"
        placeholder="Donor Name"
        className="border p-2"
        value={donor}
        onChange={(e) => setDonor(e.target.value)}
        required
      />

        <div className="border p-2 bg-gray-100">
        {country || "No country selected"}
        </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded"
      >
        Submit
      </button>

    </form>
  );
}

export default BookForm;