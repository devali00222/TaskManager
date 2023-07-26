import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import TaskUpdateForm from "./TaskUpdateForm";


const App: React.FC = () => {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />}/> 
        <Route path="/update/:_id" element={<TaskUpdateForm />}/> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
