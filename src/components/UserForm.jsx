import { useState, useEffect } from "react";

function UserForm({ onAddUser, onUpdateUser, editingUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
  if (editingUser && editingUser.name && editingUser.email) {
    const timeout = setTimeout(() => {
      setName(editingUser.name);
      setEmail(editingUser.email);
    }, 0);

    return () => clearTimeout(timeout);
  }
}, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setError("Name and Email are required");
      return;
    }

    if (editingUser) {
      const updatedUser = {
        ...editingUser,
        name,
        email,
      };

      onUpdateUser(updatedUser);
    } else {
      const newUser = {
        id: Date.now(),
        name,
        email,
        company: { name: "New Company" },
      };

      onAddUser(newUser);
    }

    setName("");
    setEmail("");
    setError("");
  };
  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h3>Add New User</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">{editingUser ? "Update" : "Add"}</button>
    </form>
  );
}

export default UserForm;
