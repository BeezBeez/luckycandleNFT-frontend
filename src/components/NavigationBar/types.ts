import { ReactNode } from "react";
import { RouteEntry } from "../../routes/types";

export interface NavigationItemProps {
    path: string,
    name: string,
    displayName: ReactNode
}

export interface NavigationBarProps {
    items: RouteEntry[],
    rightItems?: RouteEntry[],
}