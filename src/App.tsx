import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthLayout from "./components/layout/authLayout.tsx/AuthLayout";
import AuthLayout2 from "./components/layout/authLayout2/AuthLayout2";
import LoginForm from "./components/login form/loginform";
import Register from "./components/register/register";
import Forgot from "./components/forgot/forgot";
import Forgotmsg from "./components/forgotmsg/forgotmsg";
import Changepsw from "./components/changepsw/changepsw";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<LoginForm />} />
        </Route>
        <Route path="/" element={<AuthLayout2 />}>
          <Route path="register" element={<Register />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="forgotmsg" element={<Forgotmsg />} />
          <Route path="changepsw" element={<Changepsw />} />
          <Route path="m" element={<MyComponent />} />
        </Route>
      </Routes>
    </Router>
  );
}
