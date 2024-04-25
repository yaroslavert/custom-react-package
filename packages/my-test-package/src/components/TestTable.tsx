import { Table } from '@mantine/core';
import classes from './TestTable.module.css';

const elements = [
  { mass: 12.011, name: 'Carbon', position: 6, symbol: 'C' },
  { mass: 14.007, name: 'Nitrogen', position: 7, symbol: 'N' },
  { mass: 88.906, name: 'Yttrium', position: 39, symbol: 'Y' },
  { mass: 137.33, name: 'Barium', position: 56, symbol: 'Ba' },
  { mass: 140.12, name: 'Cerium', position: 58, symbol: 'Ce' },
];

export function TestTable() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table className={classes.root}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
