import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ListComponent from "./components/list/list"; // Make sure to capitalize component names
import SmartSidebar from "./components/common/sidebar/sidebar";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/list" element={<ListComponent />} />
        <Route path="/pro" element={<SmartSidebar />} />

      </Routes>
    </Router>
  );
}
