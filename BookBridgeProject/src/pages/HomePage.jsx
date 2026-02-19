function HomePage() {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-xl mb-4">Categories</h2>
        <ul className="space-y-2">
          <li>Science</li>
          <li>Math</li>
          <li>English</li>
          <li>History</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="bg-green-500 text-white p-2">
            Get Book
          </button>

          <button className="bg-blue-500 text-white p-2">
            Give Book
          </button>
        </div>

        {/* Country Dropdown */}
        <select className="border p-2">
          <option value="">Select Country</option>
          <option>Uganda</option>
          <option>Sudan</option>
          <option>Kenya</option>
          <option>Egypt</option>
        </select>

      </div>
    </div>
  );
}

export default HomePage;

