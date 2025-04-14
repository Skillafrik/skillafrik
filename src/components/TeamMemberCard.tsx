
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  isFounder?: boolean;
}

const TeamMemberCard = ({ name, role, description, image, isFounder = false }: TeamMemberCardProps) => {
  const initials = name.split(' ').map(n => n[0]).join('');
  
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg ${isFounder ? 'border-2 border-orange-500' : ''}`}>
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover object-center"
        />
        {isFounder && (
          <Badge className="absolute top-2 right-2 bg-orange-500 hover:bg-orange-600">
            Fondateur
          </Badge>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-orange-500 text-sm font-medium">{role}</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
