import React from "react";
import "./App.css";
import Login from "./Login";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  const user = null;

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <Login>
          <Header />

          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </Login>
      )}
    </div>
  );
}

export default App;
