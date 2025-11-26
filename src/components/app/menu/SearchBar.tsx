import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300); // 300ms debounce time

    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      console.log("Searching for:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <div className="relative w-full max-w-md">
      <Input
        type="text"
        placeholder="Quick search..."
        className="pl-8 p-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Search
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        size={18}
      />
    </div>
  );
}
