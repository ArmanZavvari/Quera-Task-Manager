import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Changepsw from "./components/changepsw/changepsw";
import Forgot from "./components/forgot/forgot";
import Forgotmsg from "./components/forgotmsg/forgotmsg";
import AuthLayout from "./components/layout/authLayout.tsx/AuthLayout";
import LoginForm from "./components/loginform/loginform";
import Register from "./components/register/register";
import Dashboard from "./components/layout/dashboard/dashboard";
import Card from "./components/task/task";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="forgotmsg" element={<Forgotmsg />} />
          <Route path="changepsw" element={<Changepsw />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="task" element={<Card />} />
        </Route>
        <Route path="/profile" element={<Dashboard />}>
          {/* <Route path="login" element={<LoginForm />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
