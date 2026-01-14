
import{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./action";

const UserListt = () => {
  const dispatch = useDispatch();
 
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListt;
