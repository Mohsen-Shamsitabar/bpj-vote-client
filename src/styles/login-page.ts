import type { SystemSX } from "@/types/mui.ts";
import type { Theme } from "@mui/material";

export const root: SystemSX = (theme: Theme) => ({
  margin: theme.spacing(10, 0),
  position: "relative",
});

export const container: SystemSX = (theme: Theme) => ({
  border: `${theme.spacing(0.25)} solid ${theme.palette.secondary.main}`,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: theme.spacing(1.5),
});

export const textContainer: SystemSX = {
  textAlign: "center",
};

export const logoContainer: SystemSX = (theme: Theme) => ({
  width: theme.spacing(10),
  aspectRatio: "1/1",
  margin: "auto",
  position: "relative",
  top: 0,
  transform: "translateY(-50%)",
  backgroundColor: theme.palette.background.default,
  borderRadius: "50%",
  marginBottom: "-25%",
});
