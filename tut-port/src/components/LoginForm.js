import { useState } from "react";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("signin");
  async function handleSubmit(e) {
    e.preventDefault();
    const url = mode === "signin" ? "/api/auth/signin" : "/api/auth/signup";
    const res = await fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email, password})
    });
    const data = await res.json();
    // Handle login/signup success/failure/pass
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">{mode === "signin" ? "Sign In" : "Sign Up"}</button>
      <button type="button" onClick={() => setMode(mode === "signin" ? "signup" : "signin")}>
        Switch to {mode === "signin" ? "Sign Up" : "Sign In"}
      </button>
    </form>
  );

}
