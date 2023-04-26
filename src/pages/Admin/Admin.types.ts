export interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
  action: boolean;
}

export interface Column {
  id: 'name' | 'code' | 'population' | 'size' | 'density' | 'action';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}
