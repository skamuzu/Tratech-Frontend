import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import AdminLayout from "./layouts/AdminLayout";
import Admin from "./pages/admin/Admin";
import Home from "./pages/Home";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import Course from "./pages/admin/Course";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="/admin/courses" element={<Course/>}/>
        </Route>
      </Routes>
    </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
