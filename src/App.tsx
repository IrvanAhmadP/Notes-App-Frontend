import { ReactElement } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "src/contexts/authContext";

//pages
import Login from "src/pages/Login";
import Register from "src/pages/Register";
import Note from "src/pages/Note";
import Notes from "src/pages/Notes";
import NewNote from "src/pages/NewNote";
import NotFound from "src/pages/404";

import { Spinner } from "src/components";

function App() {
  const activeNotes = <Notes page="active" />;
  const archivedNotes = <Notes page="archived" />;

  return (
    <BrowserRouter>
      <Routes>
        {/* Protected Routes */}
        <Route index element={<ProtectedRoute>{activeNotes}</ProtectedRoute>} />
        <Route
          path="archived"
          element={<ProtectedRoute>{archivedNotes}</ProtectedRoute>}
        />
        <Route
          path="new-note"
          element={
            <ProtectedRoute>
              <NewNote />
            </ProtectedRoute>
          }
        />
        <Route
          path="note/:id"
          element={
            <ProtectedRoute>
              <Note />
            </ProtectedRoute>
          }
        />

        {/* Public Routes */}
        <Route
          path="/login"
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />
        <Route
          path="/register"
          element={
            <AuthRoute>
              <Register />
            </AuthRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

type ProtectedRouteProps = {
  children: ReactElement;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isLoading, auth } = useAuth();

  if (!isLoading && !auth) {
    return <Navigate to="/login" />;
  }

  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh)]">
        <Spinner classes="w-10 m-auto" />
      </div>
    );
  }

  return children;
}

type AuthRouteProps = {
  children: ReactElement;
};

function AuthRoute({ children }: AuthRouteProps) {
  const { isLoading, auth } = useAuth();

  if (!isLoading && auth) {
    return <Navigate to="/" />;
  }

  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh)]">
        <Spinner classes="w-10 m-auto" />
      </div>
    );
  }

  return children;
}

export default App;
