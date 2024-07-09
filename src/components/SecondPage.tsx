import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { fetchApiData } from '../services/api';
import DepartmentListComponent from './DepartmentListComponent';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'title', headerName: 'Title', width: 150 },
  // Add more columns as needed based on API response
];

const SecondPage: React.FC = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchApiData();
      setApiData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <DataGrid rows={apiData} columns={columns} pageSize={5} />
      <DepartmentListComponent />
    </div>
  );
};

export default SecondPage;