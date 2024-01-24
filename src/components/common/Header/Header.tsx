import React, { useState } from "react";

import PatientProfileModal from "../../PatientProfile/PatientProfileModal/PatientProfileModal";
import HpButton from "../HpComponents/HpButton";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import HpAvatar from "../HpComponents/HpAvatar";

const Logo =
  "https://image.hamropatro.com/5Q7JFb_-JVXtJQfBZ-hOHdOHbP_TeTwIp0e4FLnXV3E/rs:fit:0:0/g:no/aHR0cHM6Ly9ldmVyZXN0ZGIuc2dwMS5jZG4uZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS9wYXJld2EvaW1hZ2UtcHJveHktY29udmVyc2lvbi8wNzMzNzEzNi01NGVlLTQ5OGItYjJlYi1kODQ5MDE5N2RjYjU.webp";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenProfile = () => {
    setOpen(true);
  };

  const handleCloseProfile = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="w-full h-[65px] bg-white px-8 py-1 shadow-md flex items-center sticky top-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-[120px] h-[40px] overflow-hidden">
            <img
              src={Logo}
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>

          <ul className="flex items-center gap-8">
            <li>About</li>
            <li>Contact</li>
            <li>
              <HpButton onClick={handleOpenProfile}>Profile</HpButton>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="rounded-full">
                  <HpAvatar>N</HpAvatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>nlama@gmail.com</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    Settings
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Button variant={"outline"}>Hello</Button>
            </li>
          </ul>
        </div>
      </div>

      <PatientProfileModal open={open} handleClose={handleCloseProfile} />
    </React.Fragment>
  );
};

export default Header;
