import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col px-3 pt-5">
      <nav className="flex justify-between">
        <Link className="text-2xl font-bold text-gray-700" href="/">
          Open Table
        </Link>
        <div>
          <div className="flex gap-2">
            <button className="bg-blue-400 rounded border text-white py-1 px-3">
              SignIn
            </button>
            <button className="rounded border py-1 px-3">SignUp</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
