import Table from "./components/table";
import {BELTS, CHAMPIONS}

export default function App() {
  return (
    <Table
      col1={["item1", "item2", "item3"]}
      col2={["stuff1", "stuff2", "stuff3"]}
      col1Header="Belt"
      col2Header="Champion"
    />
  );
}
