import React from "react";
import type { Category } from "../../types/project";
import Card from "./Card";

/**
 * LAB-6 Image 5: Props: Component'ler Arası Veri Aktarımı
 * Bu bileşen artık doğrudan destructuring ile props almaktadır.
 */
interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  tech: string[];
  year: number;
  category: Category;
  featured?: boolean;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  year,
  category,
  featured = false,
  image,
}) => {
  return (
    <Card
      variant={featured ? "elevated" : "outline"}
      title={title}
      image={image}
      imageAlt={`${title} ekran görüntüsü`}
      className={`h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        featured 
          ? "border-2 border-primary/50 bg-primary/5 dark:border-primary/40 dark:bg-primary/10 scale-[1.02]" 
          : "border-gray-200 dark:border-gray-800"
      }`}
    >
      <div className="flex flex-col h-full">
        {featured && (
          <span className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider z-10">
            Öne Çıkan
          </span>
        )}
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t) => (
              <span
                key={t}
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2.5 py-1 rounded-md font-medium"
              >
                {t}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 font-medium">
            <span>{year}</span>
            <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 uppercase tracking-tighter">
              {category}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
