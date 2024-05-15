import Search from "./components/search";
import Table from "./components/table";
import { BELTS, CHAMPIONS } from "./data";
import { useState } from "react";
import { filterItemsByTerm } from "./utils";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const { terms1: champs, terms2: belts } = filterItemsByTerm({
    terms1: CHAMPIONS,
    terms2: BELTS,
    actionTerm: searchTerm,
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="container mx-auto p-8 text-center">
      <Search />
      <Table
        col1={champs}
        col2={belts}
        col1Header="Belt"
        col2Header="Champion"
      />
    </div>
  );
}
