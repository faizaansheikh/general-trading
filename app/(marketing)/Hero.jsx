'use client'
import { Box, Button, Typography, makeStyles } from "@mui/material";
import React from "react";

import IconButton from "@mui/material/IconButton";

function Hero() {
  return (
    <>
      <Box sx={{ mt: "100px",height:'75vh' }}>
        <Box sx={{ display: "flex", justifyContent: "center",alignItems:'center' }}>
          <IconButton sx={{ p: 0 }}>
            <Button
              style={{
                backgroundColor: "#F3F6FA",
                color: "black",
                fontSize: "13px",
                padding: "8px 12px 8px 12px",
              }}
            >
              Fololow along on twitter
            </Button>
          </IconButton>
        </Box>

        <Typography
          sx={{
            textAlign: "center",
            fontSize: {xs:'25px',md:"65px"},
            fontWeight: "bold",
            color: "#0F172A",
          }}
          variant="h1"
        >
          An example app built using <br /> Next.js 13 server components.
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: {xs:'16px',md:"22px"},
            fontWeight: "300",
            color: "grey",
            mt: "18px",
          }}
          variant="h1"
        >
          I'm building a web app with Next.js 13 and open sourcing everything.{" "}
          <br /> Follow along as we figure this out together.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#0F172A",
              marginRight: "20px",
              padding: "10px 20px 10px 20px",
            }}
          >
            Get Started
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "10px 20px 10px 20px",
            }}
          >
            Github
          </Button>
        </Box>


      </Box>
        {/* =====================Features==================== */}

       
      {/* <Box>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: {xs:'25px',md:"55px"},
            fontWeight: "bold",
            color: "#0F172A",
          }}
          variant="h1"
        >
          Features
        </Typography>
        <Typography
         sx={{
            textAlign: "center",
            fontSize: {xs:'16px',md:"22px"},
            fontWeight: "300",
            color: "grey",
          }}
        >
        This project is an experiment to see how a modern app, with features like auth,<br /> subscriptions, API routes, and static pages would work in Next.js 13 app dir.
        </Typography>
        </Box> */}
    </>
  );
}

export default Hero;
