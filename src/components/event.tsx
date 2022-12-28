import { format as formatDate } from "date-fns";

import { Button, Grid, Card, styled } from "@mui/material";
import {
  MoneySquare as MoneySquareIcon,
  PinAlt as PinIcon,
  ClockOutline as ClockIcon,
  ProfileCircled as ProfileIcon,
} from "iconoir-react";

import { Timestamp } from "firebase/firestore";

import "./event.css";
import { maxHeight, maxWidth } from "@mui/system";

export interface EventType {
  id: string;
  name: string;
  description: string;
  heroImage: string;
  cost?: number;
  location: string;
  time: Timestamp;
  fullDay?: boolean;
  organiser: string;
  signUpLink: string;
}

interface EventPropsType {
  key?: string;
  event: EventType;
}

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function Event({ event }: EventPropsType) {
  return (
    <Grid item lg={3} md={4} sm={6} xs={12} key={event.id} alignSelf="stretch">
      <Card
        // variant="outlined"
        raised={true}
        sx={{ padding: "30px", borderRadius: "20px" }}
      >
        <Grid container justifyContent="space-around">
          <Grid item xs={8}>
            <h3 className="EventName">{event.name}</h3>
            <p className="EventDescription">{event.description}</p>
          </Grid>
          <Grid item>
            <Button>
              <a href={event.signUpLink}>Sign Up!</a>
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-around">
          <Grid item xs={4}>
            <Img src={event.heroImage} />
          </Grid>
          <Grid item>
            <Grid container justifyContent="space-between">
              <div className="EventInfoContainer">
                <MoneySquareIcon className="EventInfoIcon" />
                <p className="EventInfoText">
                  {event.cost == null ? 0 : event.cost}
                </p>
              </div>
              <div className="EventInfoContainer">
                <PinIcon className="EventInfoIcon" />
                <p className="EventInfoText">{event.location}</p>
              </div>
            </Grid>
            <div className="EventInfoContainer">
              <ClockIcon className="EventInfoIcon" />
              <p className="EventInfoText">
                {formatDate(event.time.toDate(), "eee dd MMM, HH:mm")}
              </p>
            </div>
            {/* <div className="EventInfoContainer">
              <ProfileIcon className="EventInfoIcon" />
              <p className="EventInfoText">{event.organiser}</p>
            </div> */}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export { Event };
