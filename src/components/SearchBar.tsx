
import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Recherche:", searchTerm);
    // Implementation de recherche
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Rechercher un cours..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-3 pl-10 pr-24 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/50"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-full px-4 bg-orange-500 text-white font-medium rounded-r-md hover:bg-orange-600 transition-colors"
        >
          Rechercher
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
