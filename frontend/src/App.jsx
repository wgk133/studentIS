import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DepartmentComponent from "./components/DepartmentComponent";
import HeaderComponent from "./components/HeaderComponent";
import LandingPage from "./components/LandingPage";
import ListDepartmentComponent from "./components/ListDepartmentComponent";
import ListStudentComponent from "./components/ListStudentComponent";
import StudentComponent from "./components/StudentComponent";

function App() {
    return (
        <BrowserRouter>
            <HeaderComponent />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/students" element={<ListStudentComponent />} />
                <Route path="/add-student" element={<StudentComponent />} />
                <Route path="/edit-student/:id" element={<StudentComponent />} />
                <Route path="/departments" element={<ListDepartmentComponent />} />
                <Route path="/add-department" element={<DepartmentComponent />} />
                <Route path="/edit-department/:id" element={<DepartmentComponent />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
