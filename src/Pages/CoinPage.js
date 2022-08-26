import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CoinInfo from "../components/CoinInfo.js";
import { SingleCoin } from "../config/api";
import { numberWithCommas } from "../components/CoinsTable.js";
import { CryptoState } from "../CryptoContext";
import { Typography, LinearProgress } from "@mui/material";
import styled from "styled-components";
import HTMLReactParser from "html-react-parser";

const Box = styled("div")(({ theme }) => ({
  display: "flex",
  "@media(max-width: 767px)": {
    flexDirection: "column",
    alignItems: "center",
  },
}));
const Box2 = styled("div")(({ theme }) => ({
  width: "30%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 25,
  borderRight: "2px solid grey",
  "@media(max-width: 767px)": {
    width: "100%",
  },
}));
const Heading = styled(Typography)(({ theme }) => ({
  marginBottom: 20,
}));
const Description = styled(Typography)(({ theme }) => ({
  width: "100%",
  fontFamily: "Montserrat",
  padding: 25,
  paddingBottom: 15,
  paddingTop: 0,
  textAlign: "justify",
}));
const MarketData = styled("div")(({ theme }) => ({
  alignSelf: "start",
  padding: 25,
  paddingTop: 10,
  width: "100%",
  "@media(max-width: 767px)": {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <Box>
      <Box2>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Heading
          variant="h3"
          style={{
            fontWeight: "bold",
            fontFamily: "Montserrat",
            marginBottom: 20,
          }}
        >
          {coin?.name}
        </Heading>
        <Description
          variant="subtitle1"
          style={{

            fontFamily: "Montserrat",

          }}
        >
          {HTMLReactParser(coin?.description.en.split(". ")[0])}.
        </Description>
        <MarketData>
          <span style={{ display: "flex" }}>
            <Heading
              variant="h5"
              style={{
                fontWeight: "bold",
                fontFamily: "Montserrat",
                marginBottom: 20,
              }}
            >
              Rank:
            </Heading>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Heading
              variant="h5"
              style={{
                fontWeight: "bold",
                fontFamily: "Montserrat",
                marginBottom: 20,
              }}
            >
              Current Price:
            </Heading>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Heading
              variant="h5"
              style={{
                fontWeight: "bold",
                fontFamily: "Montserrat",
              }}
            >
              Market Cap:
            </Heading>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </MarketData>
      </Box2>
      <CoinInfo coin={coin} />
    </Box>
  );
};

export default CoinPage;
