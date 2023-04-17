import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import data from "./data.json";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

function App() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

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

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredData = tableData.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={{ margin: "20px" }}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Acciones
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onSelect={() => alert('A')}>A</Dropdown.Item>
          <Dropdown.Item onSelect={() => alert('B')}>B</Dropdown.Item>
          <Dropdown.Item onSelect={() => alert('C')}>C</Dropdown.Item>
          <Dropdown.Item onSelect={() => alert('D')}>D</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button variant="primary" className="ml-3" onClick={() => alert('Enter')}>Enter</Button>

      <input
        type="text"
        value={searchText}
        onChange={handleSearch}
        placeholder="Buscar por nombre"
      />
      <DataTable
        title="Data"
        columns={columns}
        data={filteredData}
        progressPending={loading}
        pagination
        searchable
      />
    </div>
  );
}

export default App;
