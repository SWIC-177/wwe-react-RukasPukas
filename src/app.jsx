import Search from "./components/search";
import Table from "./components/table";
import { BELTS, CHAMPIONS } from "./data";
import { useState } from "react";
import { filterItemsByTerm } from "./utils";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResults = filterItemsByTerm({
    terms1: this.#champions,
    terms2: this.#belts,
    actionTerm: this.#search,
  });

  return (
    <div className="container mx-auto p-8 text-center">
      <Search />
      <Table
        col1={BELTS}
        col2={CHAMPIONS}
        col1Header="Belt"
        col2Header="Champion"
      />
    </div>
  );
}
