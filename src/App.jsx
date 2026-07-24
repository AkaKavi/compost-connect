import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import OurSolution from "./pages/OurSolution";
import AIDemo from "./pages/AIDemo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VendorRegister from "./pages/VendorRegister";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />

        <Route
          path="/solution"
          element={
            <MainLayout>
              <OurSolution />
            </MainLayout>
          }
        />

        <Route
          path="/ai-demo"
          element={
            <MainLayout>
              <AIDemo />
            </MainLayout>
          }
        />

        <Route
          path="/login"
          element={
            <MainLayout>
              <Login />
            </MainLayout>
          }
        />

        <Route
          path="/signup"
          element={
            <MainLayout>
              <Signup />
            </MainLayout>
          }
        />

        <Route
          path="/register"
          element={
            <MainLayout>
              <VendorRegister />
            </MainLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}