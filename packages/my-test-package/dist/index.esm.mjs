import { jsxs, jsx } from 'react/jsx-runtime';
import { Table } from '@mantine/core';

var classes = {"root":"TestTable-module_root__IMDTx"};

const elements = [
    { mass: 12.011, name: 'Carbon', position: 6, symbol: 'C' },
    { mass: 14.007, name: 'Nitrogen', position: 7, symbol: 'N' },
    { mass: 88.906, name: 'Yttrium', position: 39, symbol: 'Y' },
    { mass: 137.33, name: 'Barium', position: 56, symbol: 'Ba' },
    { mass: 140.12, name: 'Cerium', position: 58, symbol: 'Ce' },
];
function TestTable() {
    const rows = elements.map((element) => (jsxs(Table.Tr, { children: [jsx(Table.Td, { children: element.position }), jsx(Table.Td, { children: element.name }), jsx(Table.Td, { children: element.symbol }), jsx(Table.Td, { children: element.mass })] }, element.name)));
    return (jsxs(Table, { className: classes.root, children: [jsx(Table.Thead, { children: jsxs(Table.Tr, { children: [jsx(Table.Th, { children: "Element position" }), jsx(Table.Th, { children: "Element name" }), jsx(Table.Th, { children: "Symbol" }), jsx(Table.Th, { children: "Atomic mass" })] }) }), jsx(Table.Tbody, { children: rows })] }));
}

export { TestTable };
//# sourceMappingURL=index.esm.mjs.map
