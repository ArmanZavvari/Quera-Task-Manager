import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Changepsw from "./components/changepsw/changepsw";
import Forgot from "./components/forgot/forgot";
import Forgotmsg from "./components/forgotmsg/forgotmsg";
import AuthLayout from "./components/layout/authLayout.tsx/AuthLayout";
import LoginForm from "./components/loginForm/loginform";
import Register from "./components/register/register";
import Dashboard from "./components/layout/dashboard/dashboard";
import Card from "./components/task/task";

import Filter from "./components/filter/filter";

import ProfileForm from "./components/profilePage/profile-information/profileInfo";
import ProfileSettings from "./components/profilePage/profileSetting/profilesetting";
import PersonalInf from "./components/profilePage/personal-information/personalinf";
import Calendar from "./components/dashboardCalendar/dashboardCalendar";
import WorkSpaces from "./components/workSpaces/workSpaces";

export default function App() {
  const tasks = [
    {
      id: 1,
      date: "2024-02-27",
      tag: "Work",
      member: "John",
      priority: "",
    },
    {
      id: 2,
      date: "2024-02-28",
      tag: "Study",
      member: "Alice",
      priority: "Medium",
    },
    {
      id: 3,
      date: "", // No date
      tag: "Project",
      member: "Bob",
      priority: "",
    },
    {
      id: 4,
      date: "2024-03-01",
      tag: "Work",
      member: "",
      priority: "High",
    },
    {
      id: 5,
      date: "", // No date
      tag: "Study",
      member: "John",
      priority: "Medium",
    },
    {
      id: 6,
      date: "2024-03-02",
      tag: "Project",
      member: "Bob",
      priority: "",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<LoginForm />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="forgotmsg" element={<Forgotmsg />} />
          <Route path="changepsw" element={<Changepsw />} />
          <Route path="filter" element={<Filter tasks={tasks} />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<Card />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="workspaces" element={<WorkSpaces />} />
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

// for filter component :
// const App = () => {

//   return (
//     <div>
//       <Filter tasks={tasks} />
//     </div>
//   );
// };
