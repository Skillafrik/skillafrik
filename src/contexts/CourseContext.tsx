
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Course, getAllCourses, addCourse, updateCourse, deleteCourse, getCourseById, getPublishedCourses, getCoursesByCategory } from '../utils/courseStorage';

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
