import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "./action";

function EditUser() {
  const { id } = useParams();     //id دائمًا string حتى لو كان رقمًا في الرابط
  const userId = Number(id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) =>
    state.users.find((u) => u.id === userId)
  );
//1ere methode
//  const [name, setName] = useState(user?.name || "");
//   const [email, setEmail] = useState(user?.email || ""); kndroha fi  blast use effect
// 2éme methode
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);


  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateUser({
        id: userId,
        name,
        email,
      })
    );

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit User</h2>
      
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
         
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
         
      />

      <button type="submit">Update</button>
    </form>
  );
}

export default EditUser;

 ;
