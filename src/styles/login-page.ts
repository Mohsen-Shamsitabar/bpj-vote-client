import type { SystemSX } from "@/types/mui.ts";
import type { Theme } from "@mui/material";

export const root: SystemSX = (theme: Theme) => ({
  border: "1px solid black",
  margin: theme.spacing(2, 0),
});

export const container: SystemSX = (theme: Theme) => ({
  border: "1px solid red",
  padding: theme.spacing(1, 0),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: theme.spacing(1.5),
});

export const textContainer: SystemSX = {
  textAlign: "center",
};

export const logoContainer: SystemSX = (theme: Theme) => ({
  width: theme.spacing(8),
  aspectRatio: "1/1",
  margin: "auto",
});
