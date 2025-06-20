"use client";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { LOGO } from "@/constants/images";
import { selectIsExpanded, selectNavItems, toggleSidebar } from "@/lib/features/dashboard/sidebarSlice";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function Sidebar() {

    const dispatch = useAppDispatch();

    const navItems = useAppSelector(selectNavItems);

    const isExpanded = useAppSelector(selectIsExpanded);

    const handleToggleSidebar = useCallback(() => {
        dispatch(toggleSidebar());
    }, [dispatch, toggleSidebar]);

    return (
        <motion.aside
            initial={false}
            animate={{ width: isExpanded ? 200 : 100 }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed top-0 left-0 h-screen bg-secondary rounded-r-[20px] border-r-[3px] border-text px-[1.6rem] py-[2rem] flex flex-col z-50"
        // style={{ overflow: "hidden" }}
        >
            <button
                className="mb-8 self-end bg-primary rounded-full p-2 absolute top-[1.5rem] right-[-1.5rem] border-[3px] border-text transition cursor-pointer hover:bg-gray-200 hover:text-text"
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
                        className={`h-auto transition-all duration-300 ${isExpanded ? "w-[100px]" : "w-[50px]"
                            }`}
                    />
                </Link>
            </div>
            <nav className="flex-1">
                <ul className="flex flex-col gap-6">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.path}
                                className={`flex items-center gap-3 px-2 py-2 rounded-md hover:bg-gray-100 transition-colors text-text  font-medium
                                    ${isExpanded
                                        ? "justify-start"
                                        : "justify-center flex-col"
                                    }`}
                                title={item.name}
                            >
                                <Icon icon={item.icon} width={28} height={28} />
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
                                    className="text-sm  font-semibold transition-all duration-300"
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