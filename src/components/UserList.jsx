import { useNavigate } from "react-router-dom";

function UserList({ users, onDeleteClick, onEditClick }) {
  const navigate = useNavigate();

  return (
    <div className="card-container">
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <h3>{user.name}</h3>

          <p>{user.email}</p>
          <p className="company">{user.company?.name}</p>

          <div className="card-buttons">
            <button
              className="details-btn"
              onClick={() => navigate(`/users/${user.id}`)}
            >
              View Details →
            </button>
            <button className="edit-btn" onClick={() => onEditClick(user) }>
              Edit
            </button>
            <button className="delete-btn" onClick={() => onDeleteClick(user)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
