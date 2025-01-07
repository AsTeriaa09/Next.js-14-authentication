"use client";

import { login } from "@/actions";

const LoginForm = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const result = await login(formData);

    if (result.error) {
      alert(result.error);
    } else {
      alert("Login successful");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" required placeholder="username" />
      <input type="password" name="password" required placeholder="password" />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
