import * as sx from "@/styles/voter-info-grid-item.ts";
import type { SystemSX } from "@/types/mui.ts";
import mergeSx from "@/utils/merge-sx.ts";
import { FormControl, Grid, Input, InputLabel } from "@mui/material";

type Props = {
  value: string;
  label: string;
  sx?: SystemSX;
};

const VoterInfoGridItem = (props: Props) => {
  const { label, value, sx: sxProp } = props;

  return (
    <Grid size={{ xs: 12, sm: 6, md: 6 }}>
      <FormControl
        fullWidth
        disabled
        sx={mergeSx(sx.gridItem, sxProp)}
      >
        <InputLabel sx={sx.inputLabel}>{label}</InputLabel>

        <Input value={value} />
      </FormControl>
    </Grid>
  );
};

export default VoterInfoGridItem;
