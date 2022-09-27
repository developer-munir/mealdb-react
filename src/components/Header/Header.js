import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({search}) => {
    return (
      <div className="block mx-auto">
        <div className="navbar bg-slate-600 ">
          <div className="flex-1">
            <a
              href="/index.html"
              className="btn btn-ghost normal-case text-xl text-gray-50"
            >
              The Meal DB
            </a>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control hidden md:block">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered"
                onChange={search}
              />
            </div>
            <div className="dropdown dropdown-end sm:block md:hidden">
              <label tabindex="0" className="btn btn-ghost">
                <div className="text-gray-50">
                  <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </div>
              </label>
              <ul
                tabindex="0"
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="/index.html" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a href="/index.html">Settings</a>
                </li>
                <li>
                  <a href="/index.html">Logout</a>
                </li>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-3/4"
                  />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;