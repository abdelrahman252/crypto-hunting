import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CryptoState } from "../CryptoContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const TypographyH6 = styled(Typography)(({ theme }) => ({
  flex: 1,
  color: "gold",
  fontFamily: "Montserrat",
  fontWeight: "bold",
  cursor: "pointer",
}));

function Header() {
  const { currency, setCurrency } = CryptoState();

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="sticky">
        <Container>
          <Toolbar>
            <TypographyH6 onClick={() => navigate(`/`)} variant="h6">
              Crypto Hunter
            </TypographyH6>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15, color: "white" }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
            </Select>
            <Button
              variant="contained"
              style={{
                backgroundColor: "gold",
                marginLeft: "10px",
              }}
            >
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;


