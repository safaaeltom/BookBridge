import { useState } from "react";

function BookForm({ preselectedCountry }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState(preselectedCountry || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      title,
      image,
      category,
      condition,
      donorName,
      donorEmail,
      description,
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
    setCondition("");
    setDonorName("");
    setDonorEmail("");
    setDescription("");
    setCountry(preselectedCountry || "");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 md:gap-5">

      <input 
        type="text"
        placeholder="Book Title"
        className="w-full p-3 sm:p-3 md:p-4 border rounded-lg bg-white/20 text-white placeholder-white border-white/50 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base md:text-lg"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Book Image URL"
        className="w-full p-3 sm:p-3 md:p-4 border rounded-lg bg-white/20 text-white placeholder-white border-white/50 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base md:text-lg"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <input
        type="text"
        placeholder="Donor Name"
        className="w-full p-3 sm:p-3 md:p-4 border rounded-lg bg-white/20 text-white placeholder-white border-white/50 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base md:text-lg"
        value={donorName}
        onChange={(e) => setDonorName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Donor Email"
        className="w-full p-3 sm:p-3 md:p-4 border rounded-lg bg-white/20 text-white placeholder-white border-white/50 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base md:text-lg"
        value={donorEmail}
        onChange={(e) => setDonorEmail(e.target.value)}
        required
      />
        <select
        className="w-full p-3 sm:p-3 md:p-4 border rounded-lg bg-white/20 text-white placeholder-white border-white/50 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base md:text-lg"
        onChange={(e) => setCondition(e.target.value)}
      >
        <option value="">Select Condition</option>
        <option style={{ color: "black"}}>New</option>
        <option style={{ color: "black"}}>Like New</option>
        <option style={{ color: "black"}}>Good</option>
        <option style={{ color: "black"}}>Fair</option>
        <option style={{ color: "black"}}>Poor</option>
        </select>

      <select
        className="w-full p-3 sm:p-3 md:p-4 border rounded-lg bg-white/20 text-white placeholder-white border-white/50 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base md:text-lg"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        <option style={{ color: "black"}}>Science</option>
        <option style={{ color: "black"}}>Math</option>
        <option style={{ color: "black"}}>English</option>
        <option style={{ color: "black"}}>Physics</option>
        <option style={{ color: "black"}}>Chemistry</option>
        <option style={{ color: "black"}}>History</option>
        <option style={{ color: "black"}}>Technology</option>
        <option style={{ color: "black"}}>Other</option>
      </select>

      <input
        type="text"
        value={country}
        readOnly
        className="w-full p-3 sm:p-3 md:p-4 border rounded-lg bg-white/20 text-white placeholder-white border-white/50 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base md:text-lg"
      />

      <textarea        
        placeholder="Book Description (optional)"
        className="w-full p-3 sm:p-3 md:p-4 border rounded-lg bg-white/20 text-white placeholder-white border-white/50 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base md:text-lg resize-none"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type="submit"
        className="w-full p-3 sm:p-3 md:p-4 border rounded-lg bg-white/20 text-white placeholder-white border-white/50 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base md:text-lg"
      >
        Submit
      </button>

    </form>
  );
}

export default BookForm;