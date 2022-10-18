import { ReactNode } from "react";
import { Input } from "src/components/";

type AuthLayoutProps = {
  children: ReactNode;
};

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="App bg-white">
      <div className="grid min-h-[100vh] md:grid-flow-col md:grid-cols-2">
        <div className="hidden bg-blue-500 md:flex">
          <div className="m-auto w-96">
            <img
              alt="note illustration"
              src="/illustrations/undraw_note_list_re_r4u9.svg"
            />
            <p className="mt-4 text-center text-2xl text-white">
              Manage your notes more easily
            </p>
          </div>
        </div>
        <div className="m-auto">{children}</div>
      </div>
    </div>
  );
}

export default AuthLayout;
