import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users when component loads
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="app-container">
      <h1>User Dashboard</h1>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="user-grid">
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              phone={user.phone}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;