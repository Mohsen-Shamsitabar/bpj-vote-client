import type { SystemSX } from "@/types/mui.ts";
import type { Theme } from "@mui/material";

export const root: SystemSX = (theme: Theme) => ({
  direction: theme.direction,
});

export const helperText: SystemSX = {
  textAlign: "right",
};

export const inputLabel: SystemSX = (theme: Theme) => ({
  right: theme.spacing(1),
  transformOrigin: "top right",
});
