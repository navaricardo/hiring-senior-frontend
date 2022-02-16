import { ChangeEvent, MouseEvent } from "react";

// Types and Interfaces
export type OnChangeT<T> = (event: ChangeEvent<T>) => void;
export type MouseEventT = (event: MouseEvent<HTMLButtonElement>) => void;
