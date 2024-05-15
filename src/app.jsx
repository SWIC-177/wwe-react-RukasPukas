import { Fragment } from "react";
import Search from "./components/search";
import Table from "./components/table";
import { BELTS, CHAMPIONS } from "./data";

export default function App() {
  return (
    <Fragment>
      <Search />
      <Table
        col1={BELTS}
        col2={CHAMPIONS}
        col1Header="Belt"
        col2Header="Champion"
      />
    </Fragment>
  );
}
