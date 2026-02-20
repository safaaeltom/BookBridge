import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username && password) {
      setUsername("");
      setPassword("");
      navigate("/home");
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-6">Book Bridge Login</h1>

      <form
        onSubmit={handleLogin}
        autoComplete="off"
        className="flex flex-col gap-4 w-80"
      >
        <input
          type="text"
          placeholder="Username"
          autoComplete="off"
          className="border p-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          className="border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="bg-blue-500 text-white p-2">
          Enter
        </button>
      </form>
    </div>
  );
}

export default LandingPage;