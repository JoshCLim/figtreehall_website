import { format as formatDate } from "date-fns";

import { Button, Grid, Card, styled, Link } from "@mui/material";
import {
  MoneySquare as MoneySquareIcon,
  PinAlt as PinIcon,
  ClockOutline as ClockIcon,
  ProfileCircled as ProfileIcon,
} from "iconoir-react";

import { Timestamp } from "firebase/firestore";

import "./event.css";

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
interface EventInfoContainerPropsType {
  light: string;
  dark: string;
}

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const EventInfoContainer = styled("div")(
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    padding: "10px 15px",
    marginTop: "0.5em",

    fontWeight: "500",

    borderRadius: "20px",
  },
  (props: EventInfoContainerPropsType) => ({
    backgroundColor: props.light,
    color: props.dark,
    border: "1px solid",
    borderColor: props.dark,
  })
);

const EventCard = styled(Card)({
  maxWidth: "220px",
  padding: "15px 15px 15px 20px",
  borderRadius: "20px",
});

const Divider = () => {
  return (
    <div
      style={{
        height: "1px",
        width: "30%",
        backgroundColor: "#000",
        margin: ".5em 0",
      }}
    ></div>
  );
};

const COLOURS = {
  LightBeige: "hsl(48, 36%, 71%)",
  DarkBeige: "hsl(48, 36%, 25%)",
  LightBrown: "hsl(25, 29%, 65%)",
  DarkBrown: "hsl(25, 29%, 25%)",
  LightBrown2: "hsl(41, 39%, 75%)",
  DarkBrown2: "hsl(41, 39%, 25%)",
};

function Event({ event }: EventPropsType) {
  return (
    <Grid
      item
      lg={3}
      md={4}
      sm={6}
      xs={12}
      key={event.id}
      alignSelf="stretch"
      // whiteSpace="normal"
    >
      <EventCard
        // raised={true}
        variant="outlined"
      >
        <Grid
          container
          whiteSpace="normal"
          flexDirection="column"
          // justifyContent="space-around"
        >
          <h3 className="EventName">{event.name}</h3>
          <Divider />
          <p className="EventDescription">{event.description}</p>
        </Grid>
        <Grid container justifyContent="flex-end" gap="0.5em">
          {/* <Grid item xs={4} padding="10px 0">
            <Img src={event.heroImage} />
          </Grid> */}
          <Grid item>
            <Grid container justifyContent="flex-end" gap="0.5em">
              <EventInfoContainer
                light={COLOURS.LightBeige}
                dark={COLOURS.DarkBeige}
              >
                <MoneySquareIcon className="EventInfoIcon" />
                <p className="EventInfoText">
                  {event.cost == null ? 0 : event.cost}
                </p>
              </EventInfoContainer>
              <EventInfoContainer
                light={COLOURS.LightBrown}
                dark={COLOURS.DarkBrown}
              >
                <PinIcon className="EventInfoIcon" />
                <p className="EventInfoText">{event.location}</p>
              </EventInfoContainer>
            </Grid>
            <EventInfoContainer
              light={COLOURS.LightBrown2}
              dark={COLOURS.DarkBrown2}
            >
              <ClockIcon className="EventInfoIcon" />
              <p className="EventInfoText">
                {formatDate(event.time.toDate(), "eee dd MMM, HH:mm")}
              </p>
            </EventInfoContainer>
            <EventInfoContainer
              light={COLOURS.LightBrown}
              dark={COLOURS.DarkBrown}
            >
              <ProfileIcon className="EventInfoIcon" />
              <p className="EventInfoText">{event.organiser}</p>
            </EventInfoContainer>
            <Button
              href={event.signUpLink}
              variant="contained"
              sx={{ borderRadius: "20px", marginTop: "10px" }}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </EventCard>
    </Grid>
  );
}

export { Event };
