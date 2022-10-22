import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "src/layouts/AuthLayout";
import { useInput } from "src/hooks/useInput";
import { login, putAccessToken } from "src/utils/api";
import { Hr, Loading, Input, SimpleButton } from "src/components";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Login";
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setIsLoading(true);

    const result = await login({ email, password });
    if (result.error === true) {
      setError(result.message);
    } else {
      putAccessToken(result.data.accessToken);
      navigate("/");
    }

    setIsLoading(false);
  };

  return (
    <AuthLayout>
      <div className="flex w-96 flex-col rounded-md p-8">
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <form onSubmit={handleLogin}>
          <Input
            label="Email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={handleEmailChange}
          />
          <Input
            type="password"
            label="Password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={handlePasswordChange}
          />

          <p className="text-sm text-red-500">{error}</p>

          <SimpleButton
            classes="mt-2 flex w-full justify-center py-2 font-semibold"
            color="bg-blue-500 hover:bg-blue-600 text-white"
          >
            {isLoading && <Loading classes="mx-2 h-6 w-6" />}
            Login
          </SimpleButton>
        </form>

        <Hr classes="mt-3 mb-1" text="OR" />

        <Link to="/register" className="w-full">
          <SimpleButton
            color="bg-green-500 hover:bg-green-600 text-white"
            classes="py-2 w-full font-semibold mt-2"
          >
            Register
          </SimpleButton>
        </Link>
      </div>
    </AuthLayout>
  );
}

export default Login;
