
// Utility for managing course data with local storage

export interface Course {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice: number;
  level: string;
  duration: number;
  students: number;
  imageUrl?: string;
  category: string;
  featured?: boolean;
  status: 'published' | 'draft';
  description?: string;
  externalUrl?: string;
}

// Initial courses data
const initialCourses: Course[] = [
  {
    id: "1",
    title: "Introduction à l'entrepreneuriat en Afrique",
    instructor: "Dr. Aminata Diallo",
    rating: 4.8,
    reviewCount: 423,
    price: 15000,
    originalPrice: 25000,
    level: "Débutant",
    duration: 18,
    students: 3240,
    category: "Affaires",
    status: "published"
  },
  {
    id: "2",
    title: "Développement Web Full-Stack avec React et Node.js",
    instructor: "Emmanuel Odei",
    rating: 4.7,
    reviewCount: 315,
    price: 20000,
    originalPrice: 35000,
    level: "Intermédiaire",
    duration: 32,
    students: 2150,
    category: "Technologie",
    status: "published"
  },
  {
    id: "3",
    title: "Design Graphique pour les Entrepreneurs Africains",
    instructor: "Fatou Ndiaye",
    rating: 4.9,
    reviewCount: 218,
    price: 12500,
    originalPrice: 20000,
    level: "Tous niveaux",
    duration: 14,
    students: 1876,
    category: "Marketing",
    status: "published"
  },
  {
    id: "4",
    title: "Marketing Digital: Stratégies pour le Marché Africain",
    instructor: "Omar Sow",
    rating: 4.6,
    reviewCount: 189,
    price: 17500,
    originalPrice: 30000,
    level: "Intermédiaire",
    duration: 20,
    students: 1520,
    category: "Marketing",
    status: "published"
  },
  {
    id: "5",
    title: "Agriculture Durable en Afrique Subsaharienne",
    instructor: "Dr. Kofi Mensah",
    rating: 4.9,
    reviewCount: 156,
    price: 15000,
    originalPrice: 22500,
    level: "Débutant",
    duration: 15,
    students: 980,
    category: "Agriculture",
    status: "published"
  },
  {
    id: "6",
    title: "Intelligence Artificielle: Applications Pratiques",
    instructor: "Amina Toure",
    rating: 4.7,
    reviewCount: 112,
    price: 25000,
    originalPrice: 125000,
    level: "Avancé",
    duration: 25,
    students: 645,
    imageUrl: "/lovable-uploads/ae605dec-9ca4-4a78-8ed7-7a0dadbadc30.png",
    category: "IA",
    status: "published",
    externalUrl: "https://skillafrik.mychariow.com/prd_pycgdm"
  },
  {
    id: "7",
    title: "Gestion de Projet Agile pour Startups",
    instructor: "Jean-Pierre Kouassi",
    rating: 4.8,
    reviewCount: 98,
    price: 17500,
    originalPrice: 27500,
    level: "Intermédiaire",
    duration: 12,
    students: 520,
    category: "Affaires",
    status: "published"
  },
  {
    id: "8",
    title: "Finance pour Entrepreneurs Africains",
    instructor: "Nadia Ahmed",
    rating: 4.5,
    reviewCount: 76,
    price: 20000,
    originalPrice: 25000,
    level: "Intermédiaire",
    duration: 16,
    students: 430,
    category: "Affaires",
    status: "published"
  }
];

// Function to initialize courses in local storage
const initializeStorage = () => {
  const storedCourses = localStorage.getItem('courses');
  if (!storedCourses) {
    localStorage.setItem('courses', JSON.stringify(initialCourses));
    return initialCourses;
  }
  return JSON.parse(storedCourses);
};

// Get all courses
export const getAllCourses = (): Course[] => {
  return initializeStorage();
};

// Get courses by category
export const getCoursesByCategory = (category: string): Course[] => {
  const courses = getAllCourses();
  return courses.filter(course => 
    course.category === category && course.status === "published"
  );
};

// Get published courses
export const getPublishedCourses = (): Course[] => {
  const courses = getAllCourses();
  return courses.filter(course => course.status === "published");
};

// Get a specific course
export const getCourseById = (id: string): Course | undefined => {
  const courses = getAllCourses();
  return courses.find(course => course.id === id);
};

// Add a new course
export const addCourse = (course: Omit<Course, "id">): Course => {
  const courses = getAllCourses();
  const newId = crypto.randomUUID();
  
  const newCourse = {
    ...course,
    id: newId,
  };
  
  courses.push(newCourse);
  localStorage.setItem('courses', JSON.stringify(courses));
  return newCourse;
};

// Update an existing course
export const updateCourse = (id: string, updatedCourse: Partial<Course>): Course | undefined => {
  const courses = getAllCourses();
  const courseIndex = courses.findIndex(course => course.id === id);
  
  if (courseIndex === -1) return undefined;
  
  const updatedCourses = [...courses];
  updatedCourses[courseIndex] = {
    ...updatedCourses[courseIndex],
    ...updatedCourse
  };
  
  localStorage.setItem('courses', JSON.stringify(updatedCourses));
  return updatedCourses[courseIndex];
};

// Delete a course
export const deleteCourse = (id: string): boolean => {
  const courses = getAllCourses();
  const filteredCourses = courses.filter(course => course.id !== id);
  
  if (filteredCourses.length === courses.length) {
    return false;
  }
  
  localStorage.setItem('courses', JSON.stringify(filteredCourses));
  return true;
};

// Create a context for courses
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CourseContextType {
  courses: Course[];
  addCourse: (course: Omit<Course, "id">) => Course;
  updateCourse: (id: string, course: Partial<Course>) => Course | undefined;
  deleteCourse: (id: string) => boolean;
  getCourseById: (id: string) => Course | undefined;
  getPublishedCourses: () => Course[];
  getCoursesByCategory: (category: string) => Course[];
  refreshCourses: () => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider = ({ children }: { children: ReactNode }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  
  const refreshCourses = () => {
    setCourses(getAllCourses());
  };
  
  useEffect(() => {
    // Initialize courses on first load
    refreshCourses();
  }, []);
  
  return (
    <CourseContext.Provider 
      value={{ 
        courses, 
        addCourse, 
        updateCourse, 
        deleteCourse, 
        getCourseById,
        getPublishedCourses,
        getCoursesByCategory,
        refreshCourses
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = (): CourseContextType => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourses must be used within a CourseProvider');
  }
  return context;
};
