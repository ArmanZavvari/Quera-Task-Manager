import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Changepsw from "./components/changepsw/changepsw";
import Forgot from "./components/forgot/forgot";
import Forgotmsg from "./components/forgotmsg/forgotmsg";
import AuthLayout from "./components/layout/authLayout.tsx/AuthLayout";
import Register from "./components/register/register";
import Dashboard from "./components/layout/dashboard/dashboard";
import Calendar from "./components/dashboardCalendar/dashboardCalendar";
import WorkSpaces from "./components/workSpaces/workSpaces";
import PersonalInf from "./components/profilePage/personal-information/personalinf";
import ProfileForm from "./components/profilePage/profile-information/profileInfo";
import ProfileSettings from "./components/profilePage/profileSetting/profilesetting";
import LoginForm from "./components/loginForm/liginform";
import ListComponent from "./components/list/list";
import BoardView from "./components/boardView/boardView";
import Filter from "./components/filter/filter";
import Card from "./components/task/task";
import { DarkModeProvider } from "./components/common/darkmode/DarkModeContext";

const dummyHandleFilterClose = () => {};
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

export default function App() {
  return (
    <Router>
      <DarkModeProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/" element={<LoginForm />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot" element={<Forgot />} />
            <Route path="changepassword" element={<Changepsw />} />
            <Route path="forgot-message" element={<Forgotmsg />} />
            <Route
              path="filter"
              element={
                <Filter
                  tasks={tasks}
                  handleFilterClose={dummyHandleFilterClose}
                />
              }
            />
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<Card />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="workspaces" element={<WorkSpaces />} />
            <Route
              path="listview/:wid?/projects/:pid?/"
              element={<ListComponent />}
            />
            <Route
              path="boardview/:wid?/projects/:pid?/"
              element={<BoardView />}
            />
          </Route>
          <Route path="/profile" element={<Dashboard />}>
            <Route path="/profile" element={<PersonalInf />} />
            <Route path="info/account" element={<ProfileForm />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Routes>
      </DarkModeProvider>
    </Router>
  );
}
