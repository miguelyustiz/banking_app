import React from "react";
import { DarkModeToggle } from "../DarkModeToggle";

const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title dark:text-white">
        {title}
        {type === "greeting" && (
          <span className="text-bankGradient"> {user}</span>
        )}
      </h1>
      <p className="header-box-subtext dark:text-white/70">{subtext}</p>
      <DarkModeToggle />
    </div>
  );
};

export default HeaderBox;
