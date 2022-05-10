import { ListItem as MuiListItem, Stack, styled } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const navData = [
  { title: "Home", path: "/" },
  { title: "Products", path: "/products" },
  { title: "About us", path: "/about" },
  { title: "Contact us", path: "/contact" },
];

const ListItem = styled(MuiListItem, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  whiteSpace: "nowrap",
  flex: 1,
  textTransform: "uppercase",
  fontWeight: 700,
  padding: 0,
  transition: "all 0.3s",
  color: active ? theme.palette.primary.main : "inherit",
  "& a": {
    padding: "16px 8px",
  },
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const HeaderNav = () => {
  const { pathname: locationPath } = useLocation();

  return (
    <Stack
      justifyContent="center"
      direction="row"
      sx={{
        borderTop: "1px solid rgba(0,0,0,0.08)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <Stack component="ul" direction="row" spacing="30px" m={0}>
        {navData.map(({ title, path }) => (
          <ListItem key={title} active={path === locationPath}>
            <Link to={path}>{title}</Link>
          </ListItem>
        ))}
      </Stack>
    </Stack>
  );
};

export default HeaderNav;
