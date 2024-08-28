"use client";

import useToggleStore from "@/lib/store/useToggle";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import cn from "classnames";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="sticky top-0 z-10 flex justify-between border-2 bg-white p-5 px-10 pr-6 text-blue-800 shadow-sm md:hidden">
      <Link href="/" className="text-xl font-bold">
        {/* Save<span className="text-amber-600">a</span>Life */}
        Vital Aid
      </Link>

      <div className="flex items-center gap-5">
        {/* <EllipsisVertical
          className="h-6 w-6 cursor-pointer"
          onClick={toggleSidebar}
        /> */}
      </div>
    </div>
  );
}
