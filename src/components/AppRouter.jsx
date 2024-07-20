import { Routes, Route, Navigate } from "react-router-dom";
import { Login, Profile, Register } from "../pages";
import { AuthRoute } from "../routes";
import Private from "../routes/Private";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/profile" />} />
            <Route path="/login" element={<AuthRoute component={<Login />} />} />
            <Route path="/register" element={<AuthRoute component={<Register />} />} />
            <Route path="/profile" element={<Private component={<Profile />} />} />
        </Routes>
    );
};

export default AppRouter;
