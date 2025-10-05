"use client";
import type { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import unitLogo from "../assets/images/icon-units.svg";
import dropdownLogo from "../assets/images/icon-dropdown.svg";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function DropdownMenuCheckboxes() {
  const [showCelsiusBar, setShowCelsiusBar] = useState<Checked>(true);
  const [showFahrenheitBar, setShowFahrenheitBar] = useState<Checked>(false);
  const [showKmhBar, setShowKmhBar] = useState<Checked>(true);
  const [showMphBar, setShowMphBar] = useState<Checked>(false);
  const [showMmBar, setShowMmBar] = useState<Checked>(true);
  const [showInBar, setShowInBar] = useState<Checked>(false);
  const [position, setPosition] = useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="cursor-pointer bg-blue-950">
          <img src={unitLogo} alt="Unit Logo" />
          Units
          <img src={dropdownLogo} alt="Dropdown Logo" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        <Button className="cursor-pointer">Switch to Imperial</Button>
        <DropdownMenuLabel>Temperature</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">
            Celsius (°C)
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">
            Fahrenheit (°F)
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>

        <DropdownMenuLabel>Temperature</DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={showCelsiusBar}
          onCheckedChange={setShowCelsiusBar}
        >
          Celsius (°C)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showFahrenheitBar}
          onCheckedChange={setShowFahrenheitBar}
        >
          Fahrenheit (°F)
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Wind Speed</DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={showKmhBar}
          onCheckedChange={setShowKmhBar}
        >
          km/h
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showMphBar}
          onCheckedChange={setShowMphBar}
        >
          mph
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Precipitation</DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={showMmBar}
          onCheckedChange={setShowMmBar}
        >
          Millimeters (mm)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showInBar}
          onCheckedChange={setShowInBar}
        >
          Inches (in)
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
