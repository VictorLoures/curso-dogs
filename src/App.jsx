import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Photo from "./components/Photo/Photo";
import UserProfile from "./components/user/UserProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import { UserStorage } from "./UserContext";
import User from "./components/user/User";
import ProtectedRoute from "./components/helper/ProtectedRoute";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
