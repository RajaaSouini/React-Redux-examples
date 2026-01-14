import {   Routes, Route } from "react-router-dom";
import ListeUsers from "./ListPayes";
import UpdateUser from "./update";
function App() {
  return (
       <Routes>
        <Route path="/" element={<ListeUsers />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
  
  );
}

export default App;
