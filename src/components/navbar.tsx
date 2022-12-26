import { useState } from "react";

import { Link } from "react-router-dom";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  Home as HomeIcon,
  Newspaper as NewspaperIcon,
  CalendarMonth as CalendarIcon,
  QuestionMark as QuestionIcon,
  Comment as CommentIcon,
} from "@mui/icons-material";

function Navbar() {
  const [currPage, setCurrPage] = useState(0);

  return (
    <div className="Navbar">
      <Box width="100vw">
        <BottomNavigation
          showLabels={true}
          value={currPage}
          onChange={(event, newValue) => {
            setCurrPage(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="News" icon={<NewspaperIcon />} />
          <BottomNavigationAction label="Events" icon={<CalendarIcon />} />
          <BottomNavigationAction label="FAQs" icon={<QuestionIcon />} />
          <BottomNavigationAction label="Feedback" icon={<CommentIcon />} />
        </BottomNavigation>
      </Box>
    </div>
  );
}

export { Navbar };
