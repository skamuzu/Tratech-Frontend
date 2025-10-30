import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import "./App.css";


function App() {
  return (
    <Routes>
      <Route  element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
   
    </Routes>
  );
}

export default App;
