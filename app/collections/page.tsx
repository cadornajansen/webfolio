"use client";

import Image from "next/image";
import Sidebar from "@/components/ui/Sidebar";
import Component from "@/components/ui/Component";
import AllButtons from "@/components/collections/buttons";
import { useState } from "react";

export default function Collection() {

  return (
    <div className="h-full flex mt-5">
      <Sidebar />
      <main className="flex flex-col h-fit w-full">
        {AllButtons.map((button, index) => (
          <Component
            key={index}
            title="Nuebrutalism"
            source={button.source}
          >
            {button.component}
          </Component>
        ))}
      </main>
    </div>
  );
}
