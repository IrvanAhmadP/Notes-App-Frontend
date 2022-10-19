import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "src/layouts/AuthLayout";
import { Hr, Input, SimpleButton } from "src/components";
import useInput from "src/hooks/useInput";
import { register } from "src/utils/api";

function Register() {
  const [name, handleNameChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [confirmPassword, handleConfirmPasswordChange] = useInput("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Password and confirm password doesn't match");
      return;
    }

    const result = await register({ name, email, password });
    if (result.error === true) {
      setError(result.message);
    }
  };

  return (
    <AuthLayout>
      <div className="flex w-96 flex-col rounded-md p-8">
        <h1 className="text-center text-2xl font-bold">Register</h1>
        <form onSubmit={handleRegister}>
          <Input
            label="Name"
            placeholder="Name"
            value={name}
            handleChange={handleNameChange}
          />
          <Input
            label="Email"
            placeholder="Email"
            value={email}
            handleChange={handleEmailChange}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            handleChange={handlePasswordChange}
          />

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            handleChange={handleConfirmPasswordChange}
          />

          <p className="text-sm text-red-500">{error}</p>

          <SimpleButton
            classes="w-full py-2 font-semibold mt-2"
            color="bg-green-500 hover:bg-green-600 text-white"
          >
            Register
          </SimpleButton>
        </form>

        <Hr classes="mt-3 mb-1" text="OR" />

        <Link to="/login" className="w-full">
          <SimpleButton
            color="bg-blue-500 hover:bg-blue-600 text-white"
            classes="py-2 w-full font-semibold mt-2"
          >
            Login
          </SimpleButton>
        </Link>
      </div>
    </AuthLayout>
  );
}

export default Register;
