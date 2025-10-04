import React from "react";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bienvenido al Dashboard 🔐</h1>
      {user && <p>Estás logueado como <strong>{user.username}</strong></p>}
      <button
        onClick={() => {
          localStorage.removeItem("jwt");
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Dashboard;
