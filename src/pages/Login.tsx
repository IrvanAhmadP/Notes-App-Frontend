import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "src/layouts/AuthLayout";
import { useInput } from "src/hooks/useInput";
import { useLocale } from "src/contexts/localeContext";
import { useAuth } from "src/contexts/authContext";
import { login } from "src/utils/api";
import { Hr, Spinner, Input, SimpleButton } from "src/components";
import { loginContent } from "src/utils/content";

function Login() {
  const { locale } = useLocale();
  const t = loginContent()[locale];
  const navigate = useNavigate();
  const { onLogin } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = t.title;
  }, [t.title]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setIsLoading(true);

    const { error, message, data } = await login({ email, password });
    if (error === true) {
      setError(message);
    } else {
      onLogin(data.accessToken);

      navigate("/", { replace: true });
    }

    setIsLoading(false);
  };

  return (
    <AuthLayout title={t.title}>
      <div className="flex w-96 flex-col rounded-md">
        <form onSubmit={handleLogin}>
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

          <p className="text-sm text-red-500 dark:text-red-300">{error}</p>

          <SimpleButton
            classes="mt-2 flex w-full justify-center py-2 font-semibold"
            color="bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            {isLoading && <Spinner classes="mx-2 h-6 w-6" />}
            {t.loginButton}
          </SimpleButton>
        </form>

        <Hr classes="mt-3 mb-1" text={t.textBetweenLines} />

        <Link to="/register" className="w-full">
          <SimpleButton
            classes="py-2 w-full font-semibold mt-2"
            color="bg-green-500 text-white hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-600"
          >
            {t.registerButton}
          </SimpleButton>
        </Link>
      </div>
    </AuthLayout>
  );
}

export default Login;
