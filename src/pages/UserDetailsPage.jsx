import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p className="loading">Loading user...</p>;

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="details-card">
        <div className="avatar">
          {user.name.charAt(0)}
        </div>

        <h2>{user.name}</h2>

        <div className="details-info">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p>
            <strong>Address:</strong> {user.address.street}, {user.address.city}
          </p>
          <p><strong>Company:</strong> {user.company?.name}</p>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsPage;