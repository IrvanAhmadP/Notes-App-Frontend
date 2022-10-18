import { Link } from "react-router-dom";
import AuthLayout from "src/layouts/AuthLayout";
import { Hr, Input, SimpleButton } from "src/components";

function Login() {
  return (
    <AuthLayout>
      <div className="flex w-96 flex-col rounded-md p-8">
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <Input
          label="Email"
          placeholder="Email"
          value=""
          handleChange={() => {}}
        />
        <Input
          label="Password"
          placeholder="Password"
          value=""
          handleChange={() => {}}
        />

        <SimpleButton
          color="bg-blue-500 hover:bg-blue-600 text-white"
          classes="py-2 font-semibold mt-2"
        >
          Login
        </SimpleButton>

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
