import { ReactElement, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useAuth } from "src/contexts/authContext";
//pages
import Login from "src/pages/Login";
import Register from "src/pages/Register";
import Note from "src/pages/Note";
import Notes from "src/pages/Notes";
import NewNote from "src/pages/NewNote";
import EditNote from "src/pages/EditNote";
import NotFound from "src/pages/404";
import SearchNotes from "./pages/SearchNote";

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
        <Route
          path="edit/:id"
          element={
            <ProtectedRoute>
              <EditNote />
            </ProtectedRoute>
          }
        />
        <Route
          path="search"
          element={
            <ProtectedRoute>
              <SearchNotes />
            </ProtectedRoute>
          }
        />

        {/* Public Routes */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
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
  const [isLoading, setIsLoading] = useState(true);
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    } else {
      setIsLoading(false);
    }
  }, [auth, navigate]);

  if (isLoading) {
    return <div>"loading..."</div>;
  } else {
    return children;
  }
}

type PublicRouteProps = {
  children: ReactElement;
};

function PublicRoute({ children }: PublicRouteProps) {
  const [isLoading, setIsLoading] = useState(true);
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate("/");
    } else {
      setIsLoading(false);
    }
  }, [auth, navigate]);

  if (isLoading) {
    return <div>"loading..."</div>;
  } else {
    return children;
  }
}

export default App;
