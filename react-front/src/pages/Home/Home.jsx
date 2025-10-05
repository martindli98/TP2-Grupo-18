import MembershipCard from "../../components/Membership/MembershipCArd";

const Home = () => {
  return (
    <div>
      <div className="relative w-full h-screen bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
  
        {/* Texto centrado encima de la imagen */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40">
          <h1 className="text-5xl font-bold mb-4 text-white">NUKE GYM</h1>
          <p className="text-xl mb-8 text-white">No se trata de ser el mejor del gimnasio, sino de ser mejor que la versión de ayer. Cada gota de sudor es un paso más hacia tu mejor versión.</p>
        </div>
      </div>

    </div>
  );
};
export default Home;