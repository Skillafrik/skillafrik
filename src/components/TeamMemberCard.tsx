
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  isFounder?: boolean;
}

const TeamMemberCard = ({ name, role, description, image, isFounder = false }: TeamMemberCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm overflow-hidden ${isFounder ? 'border-2 border-orange-500' : ''}`}>
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover object-center"
        />
        {isFounder && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
            Fondateur
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-orange-500 mb-2">{role}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
