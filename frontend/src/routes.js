import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/Home";
import TasksScreen from "./screens/Tasks";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomeScreen/> }/>
                <Route path="/tasks" element={ <TasksScreen /> }/>
            </Routes>
        </BrowserRouter>
    );
}