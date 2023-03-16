import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import { Box, ThemeProvider, createTheme } from "@mui/system";

const drawerWidth = 240;

function NavBar() {
  return (
    <>
      {/* <CssBaseline /> */}
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "rgb(0, 0, 0)",
            color: "white",
          },
        }}
        sx={{
          mx: 20,
          my: 10,
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />

        <Box>
          <Typography
            marginLeft={"-10px"}
            marginBottom={"20px"}
            textAlign={"center"}
            variant="h5"
            color={"white"}
          >
            {" "}
            Student <br /> Records{" "}
          </Typography>
        </Box>

        <Divider />
        <List>
          {["Student Records", "Courses Records", "Semester Records"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {["Transcripts Requests"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;
