import { useSignUp } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { isLoaded, signUp } = useSignUp();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("fan");
  const [error, setError] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }
    try {
      await signUp.create({
        emailAddress: email,
        password,
        unsafeMetadata: {
          role,
        }
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      navigate("/verify-email");
    } catch (err: any) {
      setError(err?.errors?.[0]?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <input
          className="w-full mb-3 p-2 border border-gray-300 rounded"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full mb-3 p-2 border border-gray-300 rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="fan">Fan</option>
          <option value="creator">Creator</option>
        </select>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;