import { BrowserRouter, Routes, Route } from "react-router-dom";


import Landing from "./pages/Landing/LandingPage";
import Login from "./pages/Login/LoginPage";
import Register from "./pages/Register/RegisterPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={<Landing />}
                />

                <Route
                    path="/login"
                    element=<Login/>
                />

                <Route
                    path="/register"
                    element=<Register/>
                />

                <Route
                    path="/lessons"
                    element={<div>Lessons page</div>}
                />

                <Route
                    path="/typing"
                    element={<div>Typing test</div>}
                />

                <Route
                    path="/dashboard"
                    element={<div>Dashboard</div>}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;