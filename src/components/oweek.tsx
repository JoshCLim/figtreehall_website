import { Button, Card, Container } from "@mui/material";

const maxWidth = "500px";

function OWeek() {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h1>O-Week Need-To-Knows and FAQs</h1>
      <Container style={{ display: "flex", gap: " 30px", flexWrap: "wrap" }}>
        <Card
          raised={false}
          variant="outlined"
          style={{ padding: "20px", textAlign: "left", maxWidth: maxWidth }}
        >
          <h2>Getting an opal card 🚊</h2>
          <p style={{ lineHeight: "26px" }}>
            <strong>Domestic students:</strong>
            <br />
            1. Login to <a href="https://my.unsw.edu.au/">myUNSW</a> and click
            on "My Student Profile" <br />
            2. On the left sidebar, choose "Concession Opal Card" and fill out
            the form (this gives permission for UNSW to share your information
            with NSW Transport) <br />
            3. Go to the{" "}
            <a href="https://www.opal.com.au/ordercard?execution=e2s1">
              opal website
            </a>{" "}
            and order a concession card. Note that it may take time for UNSW to
            send your information and Opal may not approve it straight away.
          </p>
          <p style={{ lineHeight: "26px" }}>
            <strong>International students:</strong>
            <br />
            1. Go to the{" "}
            <a href="https://www.opal.com.au/ordercard?execution=e2s1">
              opal website
            </a>{" "}
            and order an adult card. <br />
            2. Alternatively, you may be able to purchase one from some
            convenience stores in the city etc.
            <br />
            3. You can also tap your debit/credit card at all opal scanners as
            well
          </p>
          <Button href=""></Button>
        </Card>
        <Card
          raised={false}
          variant="outlined"
          style={{ padding: "20px", textAlign: "left", maxWidth: maxWidth }}
        >
          <h2>Connecting to university wifi 📶</h2>
          <p style={{ lineHeight: "26px" }}>
            UNSW's official wifi network is called <strong>uniwide</strong>.
            Once you connect, it will prompt you to login with your zID and
            zPass (your student number in the form zXXXXXXX and password).
            <br />
            <br />
            Alternatively, you can also connect to <strong>eduroam</strong>. You
            must use your UNSW email (zXXXXXXX@unsw.edu.au) and zPass to login.
            This wifi network is also available at other participating
            universities.
          </p>
          <Button
            variant="contained"
            href="https://www.myit.unsw.edu.au/services/students/wi-fi-staff-and-students"
          >
            More Info
          </Button>
        </Card>
        <Card
          raised={false}
          variant="outlined"
          style={{ padding: "20px", textAlign: "left", maxWidth: maxWidth }}
        >
          <h2>Receiving mail 💌</h2>
          <p style={{ lineHeight: "26px" }}>
            Parcels sent to Fig Tree will be stored in the accommodation office
            and you will receive an email to pick it up. Letters will be sorted
            and placed in pigeon-holes in the foyer.
            <br />
            <br />
            The address you should mail to is as follows: <br />
            <p style={{ margin: "0 20px" }}>
              Resident Name <br />
              Fig Tree Hall <br />
              Gate 5, High Street <br />
              University of New South Wales <br />
              Sydney NSW 2052 <br />
              Australia <br />
            </p>
          </p>
          <Button
            variant="contained"
            href="https://accommodation.unsw.edu.au/faq/living-campus/i%E2%80%99d-have-mail-delivered-what-address-do-i-use"
          >
            More Info
          </Button>
        </Card>
        <Card
          raised={false}
          variant="outlined"
          style={{ padding: "20px", textAlign: "left", maxWidth: maxWidth }}
        >
          <h2>Doing laundry 🧺</h2>
          <p style={{ lineHeight: "26px" }}>
            There are laundries on floors 2-5.
            <iframe
              width="676"
              height="380"
              src="https://www.youtube.com/embed/WNDe1ELCu7Q"
              title="Laundry at Fig Tree Hall"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </p>
        </Card>

        <Card
          raised={false}
          variant="outlined"
          style={{ padding: "20px", textAlign: "left", maxWidth: maxWidth }}
        >
          <h2>Dining Hall Opening Times 🍴</h2>
          <p style={{ lineHeight: "26px" }}>
            Please note that the closing times refer to when you need to leave
            the dining hall. Meals may stop being served close to closing time.{" "}
            <br /> <br />
            Breakfast: 7.30am - 10am <br />
            Lunch: 12pm - 2.15pm <br />
            Dinner: 5.00pm - 7.30pm <br />
          </p>
        </Card>
        <Card
          raised={false}
          variant="outlined"
          style={{ padding: "20px", textAlign: "left", maxWidth: maxWidth }}
        >
          <h2>Lost on campus? 📍</h2>
          <p style={{ lineHeight: "26px" }}>
            The <strong>Lost On Campus</strong> app is a great for finding your
            way around campus. It has information on every building down to each
            individual room.
          </p>
          <Button
            variant="contained"
            href="https://studentvip.com.au/lost-on-campus"
          >
            Check it out!
          </Button>
        </Card>
        <Card
          raised={false}
          variant="outlined"
          style={{ padding: "20px", textAlign: "left", maxWidth: maxWidth }}
        >
          <h2>Coffee Night and Floor Supper ☕️</h2>
          <p style={{ lineHeight: "26px" }}>
            <iframe
              width="676"
              height="380"
              src="https://www.youtube.com/embed/eP7qdcSMTf4"
              title="What are Coffee Night and Floor Supper?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </p>
        </Card>
        <Card
          raised={false}
          variant="outlined"
          style={{ padding: "20px", textAlign: "left", maxWidth: maxWidth }}
        >
          <h2>myUNSW and Moodle 🎓</h2>
          <p style={{ lineHeight: "26px" }}>
            myUNSW is the place to manage all admin-related things (enrolments,
            classes, fees, etc.).{" "}
            <a href="https://moodle.telt.unsw.edu.au/auth/saml/login.php">
              Moodle
            </a>{" "}
            is the platform through which many course deliver content.
          </p>
          <iframe
            width="676"
            height="380"
            src="https://www.youtube.com/embed/X2OnHGy8CZU"
            title="myUNSW"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="676"
            height="380"
            src="https://www.youtube.com/embed/dUxsc8BdzUg"
            title="All you need to know about Moodle in under 1 minute"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Card>
      </Container>
    </div>
  );
}

export { OWeek };
