import * as react_jsx_runtime from 'react/jsx-runtime';

declare function TestTable(): react_jsx_runtime.JSX.Element;

type Vector = {
    x: number;
    y: number;
};
type Point = {
    x: number;
    y: number;
};
type Coordinates = Point & Vector;
type Size = {
    height: number;
    width: number;
};
type TestLocalization = {
    actions: string;
};

export { type Coordinates, type Point, type Size, type TestLocalization, TestTable, type Vector };
