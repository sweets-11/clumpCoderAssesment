import React, { useState } from "react";
import { Search } from "lucide-react";
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const SearchBar = ({ placeholder = "Search...", onSearch }: { placeholder?: string; onSearch?: (query: string) => void }) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div className="flex items-center bg-white p-4 shadow-md mb-4 w-[71rem]">
            <div className="flex items-center w-full max-w-md mr-[120px]">
                <Search className="text-gray-500" size={20} />
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    className="flex-1 bg-transparent text-gray-500 placeholder-gray-400 focus:outline-none p-2"
                />

            </div>
            <div className="ml-[18rem]">
                <Switch />
            </div>
            <div className="flex ml-5">
                <div className="mr-4">
                    <h3 className="text-base font-semibold">Thomas Anree</h3>
                    <p className="text-xs">UX Designer</p>
                </div>
                <div>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

            </div>
        </div>
    );
}

export default SearchBar