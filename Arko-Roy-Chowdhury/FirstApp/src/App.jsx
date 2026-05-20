import React from "react";
import Login from './pages/Login'
import Registration from './pages/Registration'
import { useState } from "react";
import {css} from tailwindcss/defaultConfig;
import {routes} from 'react-router-dom';

const App = () => {
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <div>
      {currentPage === "login" ? (
        <Login onCClick={() => setCurrentPage("register")} />
      ) : (
        <Registration onCClick={() => setCurrentPage("login")} />
      )}
    </div>
  );
};

export default App;
