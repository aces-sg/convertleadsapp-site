import React, { useState, useMemo } from "react";
import data from "content/estates.yaml";

export default function Search() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return !q
      ? []
      : data.filter(
          (item) =>
            item?.shortcode?.toLowerCase().includes(q) ||
            item?.id?.toLowerCase().includes(q) ||
            item?.name?.toLowerCase().includes(q)
        );
  }, [query]);

  const scrollToCard = (shortcode: string) => {
    const el = document.getElementById(`card-${shortcode}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setQuery(""); // optional: clear input after selection
      setFocused(false); // hide dropdown
    } else {
      alert("Listing not found on this page.");
    }
  };

  return (
    <div className="relative w-full max-w-[400px] mt-5 md:mt-8 lg:mt-10 mx-auto">
      <input
        type="text"
        placeholder="Search by Estate Name, i.e. Chai Chee Green"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 150)} // delay to allow click
        className="h-[46px] w-full px-4 text-sm text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
      />
      {focused && results.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto mt-1">
          {results.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToCard(item.shortcode)}
              className="px-4 py-2 text-sm text-gray-800 cursor-pointer hover:bg-gray-100"
            >
              <strong>{item.shortcode}</strong> – {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
