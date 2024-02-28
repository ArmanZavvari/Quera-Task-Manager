import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ListComponent from "./components/list/list"; // Make sure to capitalize component names

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/list" element={<ListComponent />} />
      </Routes>
    </Router>
  );
}
