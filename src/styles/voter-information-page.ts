import type { SystemSX } from "@/types/mui.ts";
import type { Theme } from "@mui/material";

export const root: SystemSX = (theme: Theme) => ({
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  border: `${theme.spacing(0.1)} solid ${theme.palette.secondary.main}`,
  borderRadius: theme.spacing(1),
  overflowX: "hidden",
  overflowY: "scroll",

  [theme.breakpoints.down("md")]: {
    border: "none",
  },
});

export const textContainer: SystemSX = {
  textAlign: "center",
};

export const gridContainer: SystemSX = (theme: Theme) => ({
  padding: theme.spacing(2, 1),
});
