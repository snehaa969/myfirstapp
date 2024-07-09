import { SubDepartment } from './SubDepartment';

export interface Department {
  id: number;
  name: string;
  subDepartments: SubDepartment[];
}