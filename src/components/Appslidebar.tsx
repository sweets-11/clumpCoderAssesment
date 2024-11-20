import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function AppSidebar() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const handleDropdownToggle = (menu: string) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const menuItems = [
        // { title: "Dashboard", url: "/", icon: "🏠" }, // Replace with actual icons
        {
            title: "Dashboard", url: "/", icon: "🏠",
            dropdown: [
                { title: "eCommerce", url: "/" },
                { title: "Analytics", url: "/analytics" },
                { title: "Marketing", url: "/marketing" },
                { title: "CRM", url: "/crm" },
                { title: "Stocks", url: "/stocks" },
            ],
        },
        { title: "Calendar", url: "/calendar", icon: "📅" },
        { title: "Profile", url: "/profile", icon: "👤" },
        {
            title: "Task",
            dropdown: [
                { title: "Task List", url: "/tasks/list" },
                { title: "Completed Tasks", url: "/tasks/completed" },
            ],
        },
        {
            title: "Forms",
            dropdown: [
                { title: "Form Builder", url: "/forms/builder" },
                { title: "Submitted Forms", url: "/forms/submitted" },
            ],
        },

        {
            title: "Tables",
            dropdown: [
                { title: "Table Builder", url: "/tables/builder" },
                { title: "Created Tables", url: "/tables/create" },
            ],
        },
        {
            title: "Pages",
            dropdown: [
                { title: "Page Builder", url: "/pages/builder" },
                { title: "Submitted Page", url: "/pages/submitted" },
            ],
        },
    ];

    return (
        <Sidebar>
            <SidebarContent className="bg-customBg text-white h-full w-70">
                <SidebarGroup>
                    <SidebarGroupLabel className="p-4 text-2xl font-semibold text-white  mb-10">
                        TailAdmin
                    </SidebarGroupLabel>
                    <p className="p-4 text-base font-semibold text-gray-400">MENU</p>
                    <SidebarMenu>
                        {menuItems.map((item, index) => (
                            <div key={index}>
                                {item.dropdown ? (
                                    <div>
                                        <SidebarMenuItem
                                            onClick={() =>
                                                handleDropdownToggle(item.title)
                                            }
                                            className="cursor-pointer flex items-center justify-between p-3 hover:bg-gray-800 rounded"
                                        >
                                            <span className="flex items-center">
                                                {item.icon && (
                                                    <span className="mr-2">
                                                        {item.icon}
                                                    </span>
                                                )}
                                                {item.title}
                                            </span>
                                            {openDropdown === item.title ? (
                                                <ChevronUp />
                                            ) : (
                                                <ChevronDown />
                                            )}
                                        </SidebarMenuItem>
                                        {openDropdown === item.title && (
                                            <div className="pl-6">
                                                {item.dropdown.map(
                                                    (subItem, subIndex) => (
                                                        <a
                                                            key={subIndex}
                                                            href={subItem.url}
                                                            className="block py-2 px-3 text-sm hover:bg-gray-800 rounded"
                                                        >
                                                            {subItem.title}
                                                        </a>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <SidebarMenuItem className="p-3 hover:bg-gray-800 rounded">
                                        <a
                                            href={item.url}
                                            className="flex items-center"
                                        >
                                            {item.icon && (
                                                <span className="mr-2">
                                                    {item.icon}
                                                </span>
                                            )}
                                            {item.title}
                                        </a>
                                    </SidebarMenuItem>
                                )}
                            </div>
                        ))}
                    </SidebarMenu>
                    <p className="p-4 text-base font-semibold text-gray-400 mt-12">SUPPORT</p>

                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
