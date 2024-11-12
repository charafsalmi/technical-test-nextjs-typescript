import React from "react";
import Link from "next/link";
import { NavigationButtonsProps } from "../interfaces/NavigationButtonsProps";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

const NavigationButtons = ({ id, maxId }: NavigationButtonsProps) => (
  <div className=" items-center w-full flex justify-between">
    <Link href={`/pokemon/${id - 1}`}>
      <Button disabled={id <= 1}>
        <ChevronLeft />
        Previous
      </Button>
    </Link>
    <Link href={`/`}>
      <Button>
        <Home />
        Index
      </Button>
    </Link>
    <Link href={`/pokemon/${id + 1}`}>
      <Button disabled={id >= maxId}>
        Next
        <ChevronRight />
      </Button>
    </Link>
  </div>
);

export default NavigationButtons;
