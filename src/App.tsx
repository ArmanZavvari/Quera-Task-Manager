import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Changepsw from "./components/changepsw/changepsw";
import Forgot from "./components/forgot/forgot";
import Forgotmsg from "./components/forgotmsg/forgotmsg";
import AuthLayout from "./components/layout/authLayout.tsx/AuthLayout";
import Register from "./components/register/register";
import Dashboard from "./components/layout/dashboard/dashboard";
import Card from "./components/task/task";
import Calendar from "./components/dashboardCalendar/dashboardCalendar";
import WorkSpaces from "./components/workSpaces/workSpaces";
import PersonalInf from "./components/profilePage/personal-information/personalinf";
import ProfileForm from "./components/profilePage/profile-information/profileInfo";
import ProfileSettings from "./components/profilePage/profileSetting/profilesetting";
import Filter from "./components/filter/filter";
import LoginForm from "./components/loginForm/liginform";
import ListComponent from "./components/list/list";
import BoardView from "./components/boardView/boardView";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<LoginForm />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="forgotmsg" element={<Forgotmsg />} />
          <Route path="changepsw" element={<Changepsw />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="calendar" element={<Calendar />} />
          <Route path="/dashboard" element={<WorkSpaces />} />
          <Route path="listview" element={<ListComponent />} />
          <Route path="boardview" element={<BoardView />} />
        </Route>
        <Route path="/profile" element={<Dashboard />}>
          <Route path="login" element={<LoginForm />} />
          <Route path="/profile" element={<PersonalInf />} />
          <Route path="info/account" element={<ProfileForm />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}