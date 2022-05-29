import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { Home } from "../page/Home";


export function AppRoutes() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to='/' />} />
            </Routes>
        </Router>

    );
}