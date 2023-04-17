import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import data from "./data.json";

function App() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Nombre",
      selector: (row) => row.name,
    },
    {
      name: "Apellido Paterno",
      selector: (row) => row.username,
    },
    {
      name: "Apellido Materno",
      selector: (row) => row.username,
    },
    {
      name: "CURP",
      selector: (row) => row.email,
    },
    {
      name: "RFC",
      selector: (row) => row.email,
    },
  ];

  useEffect(() => {
    setLoading(true)
    setTableData(data);
    setLoading(false)
  }, []);


  return (
    <div style={{ margin: "20px" }}>
      <DataTable
        title="Data"
        columns={columns}
        data={tableData}
        progressPending={loading}
        pagination
      />
    </div>
  );
}

export default App;
