import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { fetchApiData } from '../services/api';
import { Post } from '../models/Post'; // Assuming the API returns Post objects

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'title', headerName: 'Title', width: 150 },
  { field: 'body', headerName: 'Body', width: 300 },
  // Add more columns as needed based on API response
];

const DataGridComponent: React.FC = () => {
  const [rows, setRows] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchApiData();
      setRows(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} loading={loading} />
    </div>
  );
};

export default DataGridComponent;