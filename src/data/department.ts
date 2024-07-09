import { Department } from '../models/Department';
import { SubDepartment } from '../models/SubDepartment';

export const departmentData: Department[] = [
  {
    id: 1,
    name: 'Engineering',
    subDepartments: [
      {
        id: 11,
        name: 'Software',
      },
      {
        id: 12,
        name: 'Hardware',
      },
    ],
  },
  {
    id: 2,
    name: 'Human Resources',
    subDepartments: [
      {
        id: 21,
        name: 'Recruitment',
      },
      {
        id: 22,
        name: 'Employee Relations',
      },
    ],
  },
  {
    id: 3,
    name: 'Finance',
    subDepartments: [
      {
        id: 31,
        name: 'Accounting',
      },
      {
        id: 32,
        name: 'Payroll',
      },
    ],
  },
  // Add more departments and sub-departments as needed
];