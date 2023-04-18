import { FC } from "react";
import SearchBox from "./SearchBox";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <>
      <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f5984] rounded-lg">
        <div className="text-center mt-10 w-3/5 mx-auto">
          <h1 className="text-white text-5xl mb-2">
            Find your table for any occasion
          </h1>
          <SearchBox />
        </div>
      </div>
    </>
  );
};

export default Header;
