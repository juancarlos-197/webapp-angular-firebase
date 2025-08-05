import { Timestamp } from "firebase/firestore";
export type ColumnKeys<T> = Array<keyof T>;
export interface Contact {
    id: number;
    title: string;
    body: string;
    action: string;
    created: Timestamp;
    updated: Timestamp;

} 