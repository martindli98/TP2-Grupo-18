

const MembershipCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
          View Schedule
        </button>
      </div>
    </div>
  );
};

export default MembershipCard;
