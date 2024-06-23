"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { formUrlQuery } from "@/sanity/utils";

const links = ["all", "Next13", "frontend", "backend", "fullstack"];

export default function Filters() {
    const [active, setActive] = useState("");

    const searchParams = useSearchParams();
    const router = useRouter();

    const handleFilter = (link: string) => {
        console.log(link)
        let newUrl = ''
        if (active === link) {
            setActive("");
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ["category"],
                
            });
        } else {
            setActive(link);
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "category",
                value: link.toLocaleLowerCase(),
            });
        }
        router.push(newUrl,{ scroll: false })
    };

    return (
        <ul className="text-white-800 body-text no-scrollbar flex w-full fmax-w-full gap-2 oferflow-auto py-12 sm:max-w-2xl">
            {links.map((link) => (
                <button
                    key={link}
                    onClick={() => handleFilter(link)}
                    className={`whitesapce-nowrap rounded-lg px-8 py-2.5 capitalize ${active === link ? "gradient_blue-purple" : ""}`}
                >
                    {link}
                </button>
            ))}
        </ul>
    );
}
