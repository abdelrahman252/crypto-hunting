import { Container, Typography } from "@mui/material";
import styled from "styled-components";
import Carousel from "./Carousel";

const Cont = styled(Container)(({ theme }) => ({
  height: 400,
  display: "flex",
  flexDirection: "column",
  paddingTop: 25,
  justifyContent: "space-around",
}));
const Box = styled.div(({ theme }) => ({
  backgroundImage: "url(./banner2.jpg)",
}));
const Box2 = styled.div(({ theme }) => ({
  display: "flex",
  height: "40%",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
}));

function Banner() {
  return (
    <Box>
      <Cont>
        <Box2>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Hunter
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </Box2>
        <Carousel />
      </Cont>
    </Box>
  );
}

export default Banner;
