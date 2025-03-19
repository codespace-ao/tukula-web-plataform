import { NavBarItemsTypes } from "@/enums/navbar/navbarItemsTypes";

export interface INavbarData {
    label: string;
    href: string;
    show: boolean;
    type: NavBarItemsTypes;
}