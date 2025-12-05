import type { SystemSX } from "@/types/mui.ts";

export const imageContainerSx: SystemSX = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "100%",
  maxHeight: "100%",
  "& > img": { width: "100%", height: "100%" },
};
