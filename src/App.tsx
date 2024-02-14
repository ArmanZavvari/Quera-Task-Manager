import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthLayout from "./components/layout/authLayout.tsx/AuthLayout";
import LoginForm from "./components/login form/loginform";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" index element={<LoginForm />} />
            {/* Add more routes as needed */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}
