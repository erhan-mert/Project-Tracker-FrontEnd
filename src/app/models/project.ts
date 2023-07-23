import {Task} from "./task";

export interface Project {
  id: number;
  name: string;
  description?: string;
  startDate?: Date;
  completedPercent: number;
  departmentId: number;
  tasks?: Task[];
}
