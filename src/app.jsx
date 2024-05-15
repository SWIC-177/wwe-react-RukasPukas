import Search from "./components/search";
import Table from "./components/table";
import { BELTS, CHAMPIONS } from "./data";

export default function App() {
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
