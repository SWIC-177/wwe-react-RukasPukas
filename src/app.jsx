import Search from "./components/search";
import Table from "./components/table";
import { BELTS, CHAMPIONS } from "./data";
import { useState } from "react";
import { filterItemsByTerm } from "./utils";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResults = filterItemsByTerm({
    terms1: CHAMPIONS,
    terms2: BELTS,
    actionTerm: searchTerm,
  });

  return (
    <div className="container mx-auto p-8 text-center">
      <Search />
      <Table
        col1={filteredResults.terms1}
        col2={filteredResults.terms2}
        col1Header="Belt"
        col2Header="Champion"
      />
    </div>
  );
}
