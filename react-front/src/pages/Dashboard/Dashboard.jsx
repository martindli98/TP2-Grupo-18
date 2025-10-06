import React, { useState } from "react";
import Modal from "react-modal";
import { createFeedback } from "../../api/auth";

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
      console.log(token)
      await createFeedback({ message, token });
      setSuccess("¡Gracias por tu comentario!");
      setMessage("");
      setTimeout(() => {
        setIsOpen(false);
        window.location.href = '/'; // lo lleva a la página principal, asi dashboard queda para el feedback
       }, 1500);
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
    <div
      className="relative w-full h-screen bg-cover bg-center p-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {user && (
        <div className="bg-black/70 p-8 rounded-lg">
          <h1 className="text-white text-2xl font-bold mb-4">
            Envia tu feedback 🔐
          </h1>

          <p className="text-white mb-4">
            Estás logueado como <strong>{user.username}</strong>
          </p>

          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 mb-4 hover:bg-blue-600 transition"
          >
            Escribir Feedback
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
                className="w-full mb-4 p-2 border rounded-md text-black"
                required
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition mr-2"
              >
                Enviar
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition"
              >
                Cerrar
              </button>
            </form>
            {success && <p className="text-green-600 mt-2">{success}</p>}
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </Modal>

          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
};

