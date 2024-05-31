import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import Quiz from "./pages/Quiz";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Form />} />
          <Route path="/Form" element={<Form/>} />
          <Route path="/Quiz" element={<Quiz/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
