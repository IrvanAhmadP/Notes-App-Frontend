import { ReactElement, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "src/contexts/authContext";
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
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Protected Routes */}
          <Route
            index
            element={<ProtectedRoute>{activeNotes}</ProtectedRoute>}
          />
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
    </AuthProvider>
  );
}

type ProtectedRouteProps = {
  children: ReactElement;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const { isLogin } = useAuth();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin]);

  return children;
}

type PublicRouteProps = {
  children: ReactElement;
};

function PublicRoute({ children }: PublicRouteProps) {
  const navigate = useNavigate();
  const { isLogin } = useAuth();
  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin]);

  return children;
}

export default App;
