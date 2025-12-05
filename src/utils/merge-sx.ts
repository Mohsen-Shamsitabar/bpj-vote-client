import type { SystemSX } from "@/types/mui.ts";
import type { Theme } from "@mui/material";
import type { SystemStyleObject } from "@mui/system";

const mergeSx =
  (...sxList: (SystemSX | undefined)[]) =>
  (theme: Theme) => {
    const mergedSx = sxList.reduce((result, currentSx) => {
      const sx =
        typeof currentSx === "function" ? currentSx(theme) : (currentSx ?? {});

      return { ...result, ...sx };
    }, {}) as SystemStyleObject<Theme>;

    return mergedSx;
  };

export default mergeSx;
