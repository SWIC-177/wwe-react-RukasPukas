import Search from "./components/search";
import Table from "./components/table";
import { BELTS, CHAMPIONS } from "./data";
import { useState } from "react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
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
