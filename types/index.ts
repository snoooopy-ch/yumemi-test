export type Callable = () => void;
export type CallableWithParam<T> = (param: T) => void;
export type DTO<T = any> = { [key: string]: T };

export type LineSegment = "black" | "gray" | "red";

export default null;
