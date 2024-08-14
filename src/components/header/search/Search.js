import React from "react";
import { SearchOutlined } from "@ant-design/icons";

const Search = () => {
  return (
    <div className="flex flex-grow">
      <input
        placeholder="Search"
        type="text"
        className="appearance-none  p-2 border pl-5 flex-grow focus:outline-none focus:ring-2 focus:ring-transparent"
      />
      <select
        id="categories"
        className="appearance-none bg-zinc-50 border border-l-0 text-gray-900 rounded-none text-sm pr-8 pl-6 focus:outline-none focus:ring-2 focus:ring-transparent hidden md:block"
        value=""
        onChange={() => {}}
      >
        <option value="">All categories</option>
        <option value="A/V Receivers">A/V Receivers</option>
        <option value="Amplifiers">Amplifiers</option>
        <option value="Audio Accessories">Audio Accessories</option>
        <option value="Earbuds">Earbuds</option>
        <option value="Headphones">Headphones</option>
        <option value="Home Cinema">Home Cinema</option>
        <option value="Portable Speakers">Portable Speakers</option>
        <option value="Projectors">Projectors</option>
        <option value="Sound Bars">Sound Bars</option>
        <option value="Speakers">Speakers</option>
        <option value="Subwoofers">Subwoofers</option>
        <option value="Turntables">Turntables</option>
        <option value="TV Accessories">TV Accessories</option>
        <option value="TVs">TVs</option>
        <option value="Walkmans">Walkmans</option>
      </select>
      <button className="w-12 bg-zinc-50 text-zinc-900 flex-shrink-0 hover:bg-zinc-700 hover:text-zinc-50">
        <SearchOutlined />
      </button>
    </div>
  );
};

export default Search;
