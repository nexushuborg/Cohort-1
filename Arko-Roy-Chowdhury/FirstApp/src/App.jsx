import React from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <div>
      {currentPage === "login" ? (
        <Login onSwitch={() => setCurrentPage("register")} />
      ) : (
        <Registration onSwitch={() => setCurrentPage("login")} />
      )}
    </div>
  );
};

export default App;
