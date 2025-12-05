import type { SystemSX } from "@/types/mui.ts";
import type { Theme } from "@mui/material";

export const root: SystemSX = (theme: Theme) => ({
  alignItems: "center",
  gap: theme.spacing(1),
  direction: theme.direction,
});

export const fieldContainer: SystemSX = (theme: Theme) => ({
  width: "100%",
  gap: theme.spacing(1),
});

export const button: SystemSX = {
  width: "100%",
};
