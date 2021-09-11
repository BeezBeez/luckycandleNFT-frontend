import { ReactNode } from "react";

export interface RouteEntry {
    to: string,
    name: string,
    displayName: ReactNode,
    content: ReactNode,
}