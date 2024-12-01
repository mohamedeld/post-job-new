'use client';

import React, { useState } from 'react';
import { Collapse, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { usePathname } from "next/navigation";
import SidebarItem from "./SidebarItem";
import {ChevronDown, FileChartLine, House, Layout,LucideIcon} from "lucide-react";
import { Chat } from '@mui/icons-material';
// Define your routes with children
interface Route {
  icon: LucideIcon | React.ElementType;
  label: string;
  href: string;
  children?: Route[];
}

const guestRoutes: Route[] = [
  {
    icon: House ,
    label: "Dashboard",
    href: "/",
    children: [
      {
        icon: Layout,
        label: "Manage Jobs",
        href: "/managejobs"
      },
      {
        icon: Layout,
        label: "Saved Search",
        href: "/search/saved"
      },
    ]
  },
  {
    icon: FileChartLine,
    label: "MyJob",
    href: "",
    children: [
      {
        icon: Layout,
        label: "Post new Job",
        href: "/post/create"
      },
      {
        icon: Layout,
        label: "Post new internship",
        href: "/internship/create"
      },
      {
        icon: Layout,
        label: "Post new internship",
        href: "/internship/create"
      },
    ]
  },
  {
    icon: FileChartLine,
    label: "CV Search",
    href: "/cv",
    children: [
      {
        icon: Layout,
        label: "New Search",
        href: "/search/new"
      },
      {
        icon: Layout,
        label: "Saved Search",
        href: "/search/saved"
      },
      {
        icon: Layout,
        label: "CV Folders",
        href: "/cv/folders"
      },
    ]
  },
  {
    icon: Layout,
    label: "Billing & Subscription",
    href: "/billing"
  },
  {
    icon: Layout,
    label: "Reports",
    href: "/reports"
  },
  {
    icon: Chat,
    label: "Chat",
    href: "/chat"
  },
];

const SidebarRoutes = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState<{ [key: string]: boolean }>({}); // State to manage open sub-routes

  const handleToggle = (label: string) => {
    setOpen(prev => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <div className="flex flex-col w-full">
      {guestRoutes.map(route => {
        const isActive = pathname === route.href || (route.children && route.children.some(child => pathname === child.href));
        return (
        <div key={route.label}>
          <SidebarItem
            icon={route.icon} 
            label={route.label} 
            href={route.href} 
            onClick={() => route.children && handleToggle(route.label)}
            isActive={isActive}
            className={`flex justify-between ${isActive ? 'bg-green-500 text-gray-200 hover:bg-green-600 ' : ''}`} 
          >
            {route.children && (
              <ListItemIcon className='justify-end'>
                <ChevronDown className={`${isActive ? 'text-gray-200':''} transition-transform ${open[route.label] ? 'rotate-180' : ''}`} />
              </ListItemIcon>
            )}
          </SidebarItem>
          {route.children && (
            <>
              <Collapse in={open[route.label]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {route.children.map(subRoute => (
                    <SidebarItem 
                      key= {subRoute?.label} 
                      icon={subRoute?.icon} 
                      label={subRoute?.label} 
                      href={subRoute?.href} 
                      classNameText={pathname === subRoute.href ? 'bg-gray-500 text-gray-800 p-2 rounded-full w-fit ' : ''}
                    >
                      <></>
                    </SidebarItem>
                  ))}
                </List>
              </Collapse>
            </>
          )}
        </div>
      )})}
    </div>
  );
};

export default SidebarRoutes;