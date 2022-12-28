import { Tree as TreeIcon } from "iconoir-react";
import {
  Announcement as AnnouncementIcon,
  Event as EventIcon,
} from "@mui/icons-material";
import { Container } from "@mui/material";

import { HomeEvents } from "./homeEvents";

import "./home.css";

function Home() {
  return (
    <div className="Home">
      <header
        className="HomeHeroSection"
        style={{
          padding: "40px 0",
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('https://accommodation.unsw.edu.au/sites/default/files/styles/photo_1400/public/photos/Fig_Tree_Hall_7053_RET.jpg?itok=V45pg8fy')",
          backgroundPosition: "center",
          // backgroundSize: "cover",
        }}
      >
        <TreeIcon fontSize="2em" color="#1b841b" />
        <h1 className="HomeHeroHeading">Fig Tree Hall</h1>
      </header>
      <Container>
        <div className="HomeSectionHeader">
          <EventIcon />
          <h2 className="HomeSectionHeading">Upcoming Events</h2>
        </div>
        <div>
          <HomeEvents />
        </div>
      </Container>
      <Container>
        <div className="HomeSectionHeader">
          <AnnouncementIcon />
          <h2 className="HomeSectionHeading">Announcements</h2>
        </div>
      </Container>
    </div>
  );
}

export { Home };
