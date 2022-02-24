import { ChangeEvent, MouseEvent } from "react";
import { AtomEffect as Effect } from "recoil";

// Types
export type TOnChange<T> = (event: ChangeEvent<T>) => void;
export type TMouseEvent<T> = (event: MouseEvent<T>) => void;
export type TAtomEffect = <T>(key: string) => Effect<T>;

// Interfaces
export interface ICurrency {
  name: string;
  value: number;
}
