import Link from 'next/link';
import { ListItem, ListItemText, ListItemIcon } from '@mui/material';
import {LucideIcon } from "lucide-react"
import React from 'react';
interface SidebarItemProps {
  icon: LucideIcon | React.ElementType;
  label: string;
  href: string;
  onClick?: () => void;
  children:React.ReactNode;
  className?:string;
  classNameText?:string;
  isActive?:boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, href, onClick,children,className,classNameText,isActive }) => {
  return (
    <Link href={href} passHref>
      <ListItem button onClick={onClick} className={className}>
        <ListItemIcon>
        {Icon && <Icon className={`${isActive ? 'text-[#00000080]':'text-[#7C8493CC]'} w-[20px] h-[20px]`} />}
        </ListItemIcon>
        <ListItemText primary={label} primaryTypographyProps={{ className: classNameText }}/>
        {children}
      </ListItem>
    </Link>
  );
};

export default SidebarItem;