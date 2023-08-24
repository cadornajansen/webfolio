"use client";

import { motion } from "framer-motion";
import { StackIcons } from "../icons/free-svg";
import React, { useState, useEffect } from "react";

const Menu = () => {
  const [currentMenu, setCurrentMenu] = useState("Buttons");
  const menu = ["Buttons", "Cards", "Tabs"];

  return (
    <div className="hidden md:block pr-6 space-y-2">
      <span className="inline-flex gap-2 items-center text-slate-600 font-medium">
        <StackIcons color="#6366f1" />
        Categories
      </span>
      <div className="space-y-2 text-sm font-medium">
        <span className=" text-slate-600 font-medium">Components</span>
        <nav>
          <ul className="space-y-2">
            {menu.map((item, index) => {
              return (
                <li
                  onClick={() => setCurrentMenu(item)}
                  className={`cursor-pointer px-5 py-1 rounded  ${
                    currentMenu === item
                      ? "text-white bg-[var(--accent)] shadow-md"
                      : "hover:bg-gray-200"
                  } duration-150`}
                  key={index}
                >
                  <button>{item}</button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
