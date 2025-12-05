import type { SystemSX } from "@/types/mui.ts";
import type { Theme } from "@mui/material";

export const gridItem: SystemSX = (theme: Theme) => ({
  direction: theme.direction,
});

export const inputLabel: SystemSX = (theme: Theme) => ({
  right: theme.spacing(1),
  transformOrigin: "top right",
});
