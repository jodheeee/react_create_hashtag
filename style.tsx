import { Box, styled, CardContent, Typography, Card, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const MainBox = styled(CardContent)(({ theme }) => ({
  padding: "10px",
  border: "solid 1px #C1C1C1",
  width: 280,
  borderRadius: 5,
  backgroundColor: "#fff",
  display: "inline-block",
  "&::after": {
    content: '""',
    display: "block",
    clear: "both",
  },
  "&:last-child": {
    paddingBottom: 10,
  },
  "&:hover": {
    border: "solid 1px #F5BF41",
  },
}));

export const FilterBar = styled(Box)(({ theme }) => ({
  padding: "3px 0",
  paddingBottom: 11,
  cursor: "pointer",
}));

export const SearchIconSet = styled(SearchIcon)(({ theme }) => ({
  color: "#F5BF41", 
  fontSize: "29px", 
  position: "absolute"
}));

export const NormalBox = styled(Box)(({ theme }) => ({
}));

export const BoldTypo = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  float: "left",
}));

interface IArrowBox {
  filterState: boolean;
}

export const ArrowBox = styled(Card, {
  shouldForwardProp: (prop) => prop !== "filterState",
})<IArrowBox>(({ theme, filterState }) => ({
  width: "25px",
  height: "25px",
  float: "right",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: `url(/images/floating/filter_${filterState ? "bottom" : "top"}.png)`,
}));

export const SearchBox = styled(Card)(({ theme }) => ({
  width: 280,
  height: 215,
  borderRadius: 5,
  marginTop: 10,
  boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.25)",
  padding: 10,
}));

export const SearchBar = styled(InputBase)(({ theme }) => ({
  width: 230,
  height: 30,
  borderRadius: 5,
  padding: 3,
  border: "1px solid #3F3F3F",
  marginRight: 5,
}));

export const ResultBox = styled(Box)(({ theme }) => ({
  width: 260,
  height: 165,
  padding: 5,
  marginRight: 5,
  overflowY: "auto",
}));

export const ResultTypo = styled(Typography)(({ theme }) => ({
  color: "#a1a1a1",
  marginBottom: 6,
  cursor: "pointer",
  "&:hover": {
    color: "#3F3F3F",
  },
}));

export const PickBox = styled(Box)(({ theme }) => ({
  width: 280,
  marginTop: 10,
}));

interface HoverEvent {
  hover : boolean,
};

export const PickTag = styled(Box, {
  shouldForwardProp: (props) => props !== "hover",
  })<HoverEvent>(({ theme,hover }) => ({
  padding: "4px 8px",
  position: "relative",
  display: "inline-block",
  backgroundColor: "#F5BF41",
  color: "black",
  borderRadius: 6,
  fontSize: 14,
  marginRight: 6,
  marginBottom: 5,
  cursor: "pointer",
  fontWeight: 500,
  height: 30,
  ...hover && {
    "&:after": {
      position: "absolute",
      right: -5,
      top: -10,
      content: '"✖︎"',
      fontSize: 16,
      transition: "all 0.2s ease", 
    },
  }
}));

export const RemoveBox = styled(Box)(({ theme }) => ({
  display: "inline-block",
  color: "#F5BF41",
  fontSize: 14,
  fontWeight: 500,
}));
