'use strict';

var jsxRuntime = require('react/jsx-runtime');
var core = require('@mantine/core');

var classes = {"root":"TestTable-module_root__IMDTx"};

const elements = [
    { mass: 12.011, name: 'Carbon', position: 6, symbol: 'C' },
    { mass: 14.007, name: 'Nitrogen', position: 7, symbol: 'N' },
    { mass: 88.906, name: 'Yttrium', position: 39, symbol: 'Y' },
    { mass: 137.33, name: 'Barium', position: 56, symbol: 'Ba' },
    { mass: 140.12, name: 'Cerium', position: 58, symbol: 'Ce' },
];
function TestTable() {
    const rows = elements.map((element) => (jsxRuntime.jsxs(core.Table.Tr, { children: [jsxRuntime.jsx(core.Table.Td, { children: element.position }), jsxRuntime.jsx(core.Table.Td, { children: element.name }), jsxRuntime.jsx(core.Table.Td, { children: element.symbol }), jsxRuntime.jsx(core.Table.Td, { children: element.mass })] }, element.name)));
    return (jsxRuntime.jsxs(core.Table, { className: classes.root, children: [jsxRuntime.jsx(core.Table.Thead, { children: jsxRuntime.jsxs(core.Table.Tr, { children: [jsxRuntime.jsx(core.Table.Th, { children: "Element position" }), jsxRuntime.jsx(core.Table.Th, { children: "Element name" }), jsxRuntime.jsx(core.Table.Th, { children: "Symbol" }), jsxRuntime.jsx(core.Table.Th, { children: "Atomic mass" })] }) }), jsxRuntime.jsx(core.Table.Tbody, { children: rows })] }));
}

exports.TestTable = TestTable;
//# sourceMappingURL=index.cjs.map
