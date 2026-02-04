"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MealSearch = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // const params = new URLSearchParams();
        // if (search) params.set("search", search);

        // router.push(`${pathname}?${params.toString()}`);

        const searchQuery ={search};
        const urlQueryParm = new URLSearchParams(searchQuery);
        const url =`${pathname}?${urlQueryParm}`;
        router.push(url);
    }, [search]);

    return (
        <div className="flex justify-center">
            <input
                className="border-2 border-red-600 text-red"
                type="text"
                placeholder="Search meals..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};

export default MealSearch;
