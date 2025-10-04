import React, { useState } from "react";
import Modal from "react-modal";
import { createFeedback } from "../../api/feedback";

Modal.setAppElement("#root");

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("jwt");

  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      await createFeedback({ message, token });
      setSuccess("¡Gracias por tu comentario!");
      setMessage("");
      setTimeout(() => setIsOpen(false), 1500);
    } catch (err) {
      setError(err.message || "Error al enviar el comentario");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Bienvenido al Dashboard 🔐</h1>
      {user && (
        <p>
          Estás logueado como <strong>{user.username}</strong>
        </p>
      )}

      <button
        onClick={() => setIsOpen(true)}
        style={{ marginTop: "10px", marginRight: "10px" }}
      >
        Enviar Feedback
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          content: {
            maxWidth: "400px",
            margin: "auto",
            padding: "20px",
            borderRadius: "10px",
          },
        }}
      >
        <h2>Enviar Comentario</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe tu comentario..."
            rows="4"
            style={{ width: "100%", marginBottom: "10px" }}
            required
          />
          <button type="submit">Enviar</button>
        </form>
        {success && <p style={{ color: "green" }}>{success}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button onClick={() => setIsOpen(false)} style={{ marginTop: "10px" }}>
          Cerrar
        </button>
      </Modal>

      <button onClick={handleLogout} style={{ marginTop: "20px" }}>
        Cerrar sesión
      </button>
    </div>
  );
}
