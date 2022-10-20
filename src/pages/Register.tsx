import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "src/layouts/AuthLayout";
import useInput from "src/hooks/useInput";
import { register } from "src/utils/api";
import { Hr, Loading, Modal, Input, SimpleButton } from "src/components";

function Register() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, handleNameChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [confirmPassword, handleConfirmPasswordChange] = useInput("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setIsLoading(true);

    if (password !== confirmPassword) {
      setError("Password and confirm password doesn't match");
      setIsLoading(false);
      return;
    }

    const result = await register({ name, email, password });
    if (result.error === true) {
      setError(result.message);
    } else {
      toggleModal(true);
    }

    setIsLoading(false);
  };

  const toggleModal = (value: boolean) => {
    setIsModalOpen(value || !isModalOpen);
  };

  const handleCloseModal = () => {
    toggleModal(false);
    navigate("/login");
  };

  return (
    <AuthLayout>
      <div className="flex w-96 flex-col rounded-md p-8">
        <h1 className="text-center text-2xl font-bold">Register</h1>
        <form onSubmit={handleRegister}>
          <Input
            label="Name"
            name="name"
            value={name}
            placeholder="Name"
            handleChange={handleNameChange}
          />
          <Input
            label="Email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={handleEmailChange}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={handlePasswordChange}
          />

          <Input
            label="Confirm Password"
            type="password"
            name="confirm_password"
            value={confirmPassword}
            placeholder="Confirm Password"
            handleChange={handleConfirmPasswordChange}
          />

          <p className="text-sm text-red-500">{error}</p>

          <SimpleButton
            classes="mt-2 flex w-full py-2 justify-center font-semibold"
            color="bg-green-500 hover:bg-green-600 text-white"
          >
            {isLoading && <Loading classes="mx-2 h-6 w-6" />}
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

      <Modal
        title="Success"
        titleColor="text-green-700"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        <p>Registration was successful. Please login.</p>
        <div className="float-right text-white">
          <SimpleButton
            classes="px-4"
            color="text-white bg-blue-500"
            handleClick={handleCloseModal}
          >
            Login
          </SimpleButton>
        </div>
      </Modal>
    </AuthLayout>
  );
}

export default Register;
