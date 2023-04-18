"use client";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

interface SearchBoxProps {}

const SearchBox: FC<SearchBoxProps> = ({}) => {
  const router = useRouter();
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!location) return;
    router.push(`/search/${location}`);
  };

  return (
    <form action="">
      <div className="flex justify-center m-auto py-3 gap-3">
        <input
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          className="rounded outline-none px-2"
          type="text"
          placeholder="State,city or town"
        />
        <button
          onClick={handleSubmit}
          className="bg-red-600 px-9 py-2 rounded text-white disabled:bg-red-300"
          disabled={!location}
        >
          Le's Go
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
