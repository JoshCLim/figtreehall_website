import { Tree as TreeIcon } from "iconoir-react";
import {
  Announcement as AnnouncementIcon,
  Event as EventIcon,
} from "@mui/icons-material";
import {} from "@mui/material";

import { HomeEvents } from "./homeEvents";

import "./home.css";

function Home() {
  return (
    <div className="Home">
      <header className="HomeHeroSection">
        <TreeIcon fontSize="2em" color="#1b841b" />
        <h1 className="HomeHeroHeading">Fig Tree Hall</h1>
      </header>
      <section>
        <div className="HomeSectionHeader">
          <EventIcon />
          <h2 className="HomeSectionHeading">Upcoming Events</h2>
        </div>
        <div>
          <HomeEvents />
        </div>
      </section>
      <section>
        <div className="HomeSectionHeader">
          <AnnouncementIcon />
          <h2 className="HomeSectionHeading">Announcements</h2>
        </div>
      </section>
    </div>
  );
}

export { Home };
