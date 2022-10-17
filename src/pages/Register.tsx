import { Input } from "src/components";
import useInput from "src/hooks/useInput";

function Register() {
  const { value, handleChange } = useInput("");

  return (
    <div className="App bg-white">
      <div className="grid h-[100vh] grid-flow-col grid-cols-2">
        <div className="bg-blue-400"></div>
        <div className="m-auto">
          <div className="flex w-96 flex-col rounded-md bg-gray-200 p-8">
            <h1 className="text-center text-xl font-semibold">Register</h1>
            <Input
              label="Name"
              placeholder="Name"
              value=""
              handleChange={() => {}}
            />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
