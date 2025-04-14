
import { ReactNode } from 'react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
}

const TeamMemberCard = ({ name, role, description, image }: TeamMemberCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-orange-500 mb-2">{role}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
