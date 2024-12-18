import React from "react";
// import SignUp from "./Pages/Website/Auth/SignUp";
import { Route, Routes } from "react-router-dom";
// import Login from "./Pages/Website/Auth/Login";
import Home from "./Pages/Website/Home";
import Login from "./Pages/Website/Auth/login";
// import Login from "./Pages/Website/Auth/Login";

// import Dashboard from "./Pages/Dashboard/Dashboard";
// import Users from "./Pages/Dashboard/Users/Users";
// import UpdateUser from "./Pages/Dashboard/Users/UpdateUser";
// import CreateUser from "./Pages/Dashboard/Users/CreateUser";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/register" element={<SignUp />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashboard />}> */}
        {/* <Route path="users" element={<Users />} /> */}
        {/* <Route path="user/create" element={<CreateUser />} /> */}
        {/* <Route path="user/:id" element={<UpdateUser />} /> */}
        {/* </Route> */}
      </Routes>
      {/* <SignUp /> */}
    </div>
  );
};

export default App;
