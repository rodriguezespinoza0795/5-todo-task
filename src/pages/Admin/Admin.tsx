import * as React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Box,
  Tooltip,
  IconButton,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate, useParams } from 'react-router-dom';
import { Data, Column } from './Admin.types';
import { Layout } from '~/components';

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
  { id: 'action', label: 'Actions', align: 'right', minWidth: 170 },
];

function createData(
  name: string,
  code: string,
  population: number,
  size: number,
  action: boolean,
): Data {
  const density = population / size;
  return { name, code, population, size, density, action };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263, true),
  createData('China', 'CN', 1403500365, 9596961, true),
  createData('Italy', 'IT', 60483973, 301340, true),
  createData('United States', 'US', 327167434, 9833520, true),
  createData('Canada', 'CA', 37602103, 9984670, true),
  createData('Australia', 'AU', 25475400, 7692024, true),
  createData('Germany', 'DE', 83019200, 357578, true),
  createData('Ireland', 'IE', 4857000, 70273, true),
  createData('Mexico', 'MX', 126577691, 1972550, true),
  createData('Japan', 'JP', 126317000, 377973, true),
  createData('France', 'FR', 67022000, 640679, true),
  createData('United Kingdom', 'GB', 67545757, 242495, true),
  createData('Russia', 'RU', 146793744, 17098246, true),
  createData('Nigeria', 'NG', 200962417, 923768, true),
  createData('Brazil', 'BR', 210147125, 8515767, true),
];

const Admin = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Layout width='xl'>
      <Box paddingBottom={1}>
        <Typography variant='h4'>Descripción {id}</Typography>
      </Box>
      <Paper sx={{ width: '100%', overflow: 'hidden', display: 'grid' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === 'action')
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Tooltip title={'View Details'}>
                              <IconButton
                                size='large'
                                aria-label='language system'
                                aria-controls='menu-appbar'
                                aria-haspopup='true'
                                color='inherit'
                                onClick={() => navigate(`/admin/${row.name}`)}
                              >
                                <VisibilityIcon />
                              </IconButton>
                            </Tooltip>
                          </TableCell>
                        );
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Layout>
  );
};

export default Admin;
