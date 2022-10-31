import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "src/layouts/AuthLayout";
import { useInput } from "src/hooks/useInput";
import { register } from "src/utils/api";
import { Hr, Spinner, Modal, Input, SimpleButton } from "src/components";
import { useLocale } from "src/contexts/localeContext";
import { registerContent } from "src/utils/content";

function Register() {
  const { locale } = useLocale();
  const t = registerContent()[locale];
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, handleNameChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [confirmPassword, handleConfirmPasswordChange] = useInput("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = t.title;
  }, [t.title]);

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
    <AuthLayout title={t.title}>
      <div className="flex w-96 flex-col rounded-md">
        <form onSubmit={handleRegister}>
          <Input
            label={t.nameInput}
            name="name"
            value={name}
            placeholder={t.nameInput}
            handleChange={handleNameChange}
          />
          <Input
            label={t.emailInput}
            name="email"
            value={email}
            placeholder={t.emailInput}
            handleChange={handleEmailChange}
          />
          <Input
            label={t.passwordInput}
            type="password"
            name="password"
            value={password}
            placeholder={t.passwordInput}
            handleChange={handlePasswordChange}
          />

          <Input
            label={t.confirmPasswordInput}
            type="password"
            name="confirm_password"
            value={confirmPassword}
            placeholder={t.confirmPasswordInput}
            handleChange={handleConfirmPasswordChange}
          />

          <p className="text-sm text-red-500">{error}</p>

          <SimpleButton
            classes="mt-2 flex w-full py-2 justify-center font-semibold"
            color="bg-green-500 text-white hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-600"
          >
            {isLoading && <Spinner classes="mx-2 h-6 w-6" />}
            {t.registerButton}
          </SimpleButton>
        </form>

        <Hr classes="mt-3 mb-1" text={t.textBetweenLines} />

        <Link to="/login" className="w-full">
          <SimpleButton
            classes="py-2 w-full font-semibold mt-2"
            color="bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            {t.loginButton}
          </SimpleButton>
        </Link>
      </div>

      <Modal
        title="Success"
        titleColor="text-green-700"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        <p>{t.registerSuccessMsg}</p>
        <div className="float-right text-white">
          <SimpleButton
            classes="px-4"
            color="text-white bg-blue-500"
            handleClick={handleCloseModal}
          >
            {t.loginButton}
          </SimpleButton>
        </div>
      </Modal>
    </AuthLayout>
  );
}

export default Register;
