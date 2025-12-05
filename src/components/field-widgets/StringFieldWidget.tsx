import * as sx from "@/styles/string-field-widget.ts";
import type { SystemSX } from "@/types/mui.ts";
import mergeSx from "@/utils/merge-sx.ts";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import {
  Controller,
  useFormContext,
  type ControllerFieldState,
  type FieldValues,
  type Path,
} from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  type?: "text" | "password";
  fullWidth?: boolean;
  disabled?: boolean;
  sx?: SystemSX;
};

const StringFieldWidget = <T extends FieldValues>(props: Props<T>) => {
  const { label, name, disabled, fullWidth, sx: sxProp, type } = props;

  const { control } = useFormContext();

  const renderHelperText = (fieldState: ControllerFieldState) => {
    const { error } = fieldState;

    const hasError = error;

    const errorMessage = !error ? "0" : error.message;

    return (
      <FormHelperText
        sx={mergeSx(sx.helperText, {
          visibility: !hasError ? "hidden" : "visible",
        })}
      >
        {errorMessage}
      </FormHelperText>
    );
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl
          fullWidth={fullWidth}
          disabled={disabled}
          error={!!fieldState.error}
          sx={mergeSx(sx.root, sxProp)}
        >
          <InputLabel sx={sx.inputLabel}>{label}</InputLabel>

          <Input
            {...field}
            type={type}
          />

          {renderHelperText(fieldState)}
        </FormControl>
      )}
    />
  );
};

export default StringFieldWidget;
