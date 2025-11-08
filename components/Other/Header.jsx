import React from "react";

const Header = (props) => {
  const handleLogout = () => {
    localStorage.removeItem("loggedinuser");
    props.changeUser('');
  };

  return (
    <div className="flex items-end justify-between border-b border-gray-700 pb-4">
      <h1 className="text-2xl font-light tracking-wide">
        Hello 👋 <br />
        <span className="text-4xl font-semibold text-emerald-400">
          {props.data ? `${props.data.firstName} 😎` : "Admin 😎"}
        </span>
      </h1>
      <button
        onClick={handleLogout}
        className="bg-emerald-500 hover:bg-emerald-600 transition-colors text-lg font-medium text-white px-6 py-2 rounded-lg shadow-md cursor-pointer"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
