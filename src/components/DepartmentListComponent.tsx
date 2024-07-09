import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, Checkbox, ListItemIcon } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { departmentData } from '../data/department'; // Hardcoded JSON data

const DepartmentListComponent: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSubDepartmentClick = (departmentId: number) => {
    // Handle sub department selection logic
  };

  return (
    <List>
      {departmentData.map((department) => (
        <React.Fragment key={department.id}>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <Checkbox /* Implement selection logic */ />
            </ListItemIcon>
            <ListItemText primary={department.name} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {department.subDepartments.map((subDepartment) => (
              <ListItem key={subDepartment.id} button>
                <ListItemIcon>
                  <Checkbox /* Implement selection logic */ />
                </ListItemIcon>
                <ListItemText primary={subDepartment.name} />
              </ListItem>
            ))}
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default DepartmentListComponent;