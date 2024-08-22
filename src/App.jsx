import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute"; // Default import
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import Loader from "./components/Loader/Loader";
import Layout from "./components/Layout/Layout"; // Corrected import path
import { Toaster } from "react-hot-toast"; // Імпорт Toaster

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const UserPage = lazy(() => import("./pages/UserPage/UserPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (!isRefreshing) {
      navigate("/chats");
    }
  }, [isRefreshing, navigate]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/chats"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/chats" component={<LoginPage />} />
            }
          />
          <Route
            path="/chats"
            element={
              <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          />
        </Routes>
      </Suspense>
      <Toaster /> {/* Додано Toaster */}
    </Layout>
  );
}
