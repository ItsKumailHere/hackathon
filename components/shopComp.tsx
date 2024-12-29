"use client";

import { PageProps } from "@/.next/types/app/page";
import { useState } from "react";

export default function ShopComp(p: string | PageProps | undefined) {
  
  const [id, setId] = useState<number | undefined >(0);
  if (typeof p !== undefined) {
    setId(Number(p));
  } else {
    setId(undefined);
  }

  return id;
}