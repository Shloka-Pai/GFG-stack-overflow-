import React, { useEffect, useState } from 'react';
import api from '../services/api'; // Axios instance

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await api.get('/users'); // Replace with your backend endpoint
      setUsers(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching users:', err);
      setError('Failed to fetch users.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>

      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {!loading && !error && users.length === 0 && <p>No users found.</p>}

      {!loading && !error && users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id || user._id}>{user.name || user.username}</li>
          ))}
        </ul>
      )}

      <button onClick={fetchUsers} style={{ marginTop: '10px' }}>
        Refresh Users
      </button>
    </div>
  );
};

export default UsersList;
