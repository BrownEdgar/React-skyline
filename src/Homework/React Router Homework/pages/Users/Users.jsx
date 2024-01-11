import "./Users.scss";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

export default function Users() {
  const users = useLoaderData();
  console.log(users);

  return (
    <div className="Users">
      <h1>Our Users</h1>
      <div className="Users__container">
        {users?.map((user) => (
          <div className="Users__box" key={user.id}>
            <Link to={`/users/${user.id}`}>
              <div className="image-wrapper">
                <img src={user.image} alt={user.name} />
              </div>
            </Link>
            <h2>{user.username}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const usersLoader = async () => {
  const response = await axios("https://jsonplaceholder.typicode.com/users");
  const updatedUsers = response.data.map(({ id, name, username, email }) => ({
    id,
    name,
    username,
    email,
    image: `./images/Users/user_${id}.jpg`,
  }));
  return updatedUsers;
};
