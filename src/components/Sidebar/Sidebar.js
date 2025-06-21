"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { LOGO } from "@/constants/images";
import { selectIsExpanded, selectNavItems, toggleSidebar } from "@/lib/features/sidebar/sidebarSlice";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function Sidebar() {
    const dispatch = useAppDispatch();
    const navItems = useAppSelector(selectNavItems);
    const isExpanded = useAppSelector(selectIsExpanded);
    const pathname = usePathname();

    const handleToggleSidebar = useCallback(() => {
        dispatch(toggleSidebar());
    }, [dispatch, toggleSidebar]);

    return (
        <motion.aside
            initial={false}
            animate={{ width: isExpanded ? 200 : 70 }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed top-0 left-0 h-screen bg-secondary rounded-r-[20px] border-r-[1px] border-text px-[1.25rem] py-[2rem] flex flex-col z-50"
        >
            <button
                className="self-end bg-primary rounded-full absolute top-[2rem] right-[-1rem] border-[1px] border-text transition cursor-pointer hover:bg-gray-200 text-white hover:text-text"
                onClick={handleToggleSidebar}
                aria-label="Toggle sidebar"
            >
                <Icon
                    icon={isExpanded ? "mingcute:arrows-left-line" : "mingcute:arrows-right-line"}
                    width={24}
                    height={24}
                />
            </button>
            <div
                className={`mb-8 flex items-center transition-all duration-300 ${isExpanded ? "justify-start" : "justify-center"
                    }`}
            >
                <Link href={"/"} className="flex items-center">
                    <Image
                        src={LOGO}
                        alt="Evoque Logo"
                        width={200}
                        height={200}
                        className={`h-auto transition-all duration-300 ${isExpanded ? "w-[100px]" : "w-[28px]"
                            }`}
                    />
                </Link>
            </div>
            <nav className="flex flex-1">
                <ul className="flex flex-col gap-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.path}
                                className={`flex items-center gap-3 rounded-md transition-colors text-text font-medium
                                    ${isExpanded
                                        ? "justify-start"
                                        : "justify-center flex-col"
                                    }
                                    ${pathname === item.path ? " text-white" : "hover:text-white"}
                                `}
                                title={item.name}
                            >
                                <Icon icon={item.icon} width={24} height={24} />
                                <motion.span
                                    initial={false}
                                    animate={{
                                        opacity: isExpanded ? 1 : 0,
                                        width: isExpanded ? "auto" : 0,
                                        marginLeft: isExpanded ? 8 : 0,
                                        display: isExpanded ? "inline" : "none",
                                    }}
                                    transition={{ duration: 0.2 }}
                                    style={{
                                        overflow: "hidden",
                                        whiteSpace: "nowrap",
                                    }}
                                    className="text-sm font-semibold transition-all duration-300"
                                >
                                    {isExpanded && item.name}
                                </motion.span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.aside>
    );
}