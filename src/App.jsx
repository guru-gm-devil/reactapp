import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  return (
    <div>

      <h1>User Dashboard</h1>

      <input
        type="text"
        placeholder="Search user..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="container">

        {filteredUsers.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
          />
        ))}

      </div>

    </div>
  );
}

export default App;