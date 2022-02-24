import { ChangeEvent, MouseEvent } from "react";
import { AtomEffect as Effect } from "recoil";

// Types
export type OnChangeT<T> = (event: ChangeEvent<T>) => void;
export type MouseEventT = (event: MouseEvent<HTMLButtonElement>) => void;
export type AtomEffect = <T>(key: string) => Effect<T>;

// Interfaces
export interface ICurrency {
  name: string;
  value: number;
}
