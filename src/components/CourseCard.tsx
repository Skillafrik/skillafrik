
import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice: number;
  imageUrl?: string;
  level: string;
  duration: number;
  students: number;
  id: string;
  featured?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  instructor,
  rating,
  reviewCount,
  price,
  originalPrice,
  level,
  duration,
  students,
  id,
  featured = false,
}) => {
  return (
    <div className="course-card h-full flex flex-col">
      <div className="relative bg-gray-100 h-32 flex items-center justify-center">
        <div className="level-badge">{level}</div>
        <div className="text-lg font-medium text-gray-500">{title.substring(0, 2).toUpperCase()}</div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-1">Par {instructor}</p>
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                fill={i < Math.floor(rating) ? "currentColor" : "none"}
                className="h-4 w-4"
              />
            ))}
          </div>
          <span className="ml-1 text-sm font-medium text-gray-600">
            {rating.toFixed(1)} ({reviewCount} avis)
          </span>
        </div>
        <div className="flex items-center text-gray-500 text-xs space-x-4 mb-2">
          <div className="flex items-center">
            <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{duration} heures</span>
          </div>
          <div className="flex items-center">
            <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>{students.toLocaleString()} étudiants</span>
          </div>
        </div>
        <div className="mt-auto">
          <div className="flex items-center mt-2">
            <span className="font-bold text-lg">{price.toLocaleString()} FCFA</span>
            {originalPrice > price && (
              <span className="text-gray-400 line-through text-sm ml-2">
                {originalPrice.toLocaleString()} FCFA
              </span>
            )}
          </div>
          <div className="mt-3 flex justify-between">
            <Link
              to={`/cours/${id}`}
              className="text-orange-500 hover:text-orange-600 text-sm"
            >
              Voir détails
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
