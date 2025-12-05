import { Input as BaseInput } from "@mui/base";
import { Box, styled } from "@mui/material";
import * as React from "react";

const InputElement = styled("input")(
  ({ theme }) => `
  width: ${theme.spacing(2.5)};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: ${theme.spacing(0.5, 0)};
  border-radius: ${theme.spacing(0.5)};
  text-align: center;
  border: ${theme.spacing(0.1)} solid ${theme.palette.secondary.main};
  box-shadow: 0 ${theme.spacing(0.125)} ${theme.spacing(0.25)} ${theme.palette.secondary.main};

  &:hover {
    border-color: ${theme.palette.primary.main};
  }

  &:focus {
    border-color: ${theme.palette.primary.main};
    box-shadow: 0 ${theme.spacing(0.125)} ${theme.spacing(0.25)} ${theme.palette.primary.main};
  }

  /* firefox */
  &:focus-visible {
    outline: 0;
  }
`,
);

type OtpProps = {
  separator: React.ReactNode;
  length: number;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
  gap?: number;
};

const OTPInput = (props: OtpProps) => {
  const {
    length,
    onChange,
    separator,
    value,
    disabled = false,
    gap = 1,
  } = props;

  const inputRefs = React.useRef<HTMLInputElement[]>(
    new Array(length).fill(null),
  );

  const focusInput = (targetIndex: number) => {
    const targetInput = inputRefs.current[targetIndex];

    if (!targetInput) return;

    targetInput.focus();
  };

  const selectInput = (targetIndex: number) => {
    const targetInput = inputRefs.current[targetIndex];

    if (!targetInput) return;

    targetInput.select();
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    currentIndex: number,
  ) => {
    switch (event.key) {
      case "ArrowUp":
      case "ArrowDown":
      case " ":
        event.preventDefault();
        break;
      case "ArrowLeft":
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }

        break;
      case "ArrowRight":
        event.preventDefault();
        if (currentIndex < length - 1) {
          focusInput(currentIndex + 1);
          selectInput(currentIndex + 1);
        }

        break;
      case "Delete":
        event.preventDefault();
        onChange(prevOtp => {
          const otp =
            prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);

          return otp;
        });

        break;
      case "Backspace":
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }

        onChange(prevOtp => {
          const otp =
            prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);

          return otp;
        });
        break;

      default:
        break;
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    currentIndex: number,
  ) => {
    const currentValue = event.target.value;
    let indexToEnter = 0;

    const inputEl = inputRefs.current[indexToEnter];

    if (!inputEl) return;

    while (indexToEnter <= currentIndex) {
      if (inputEl.value && indexToEnter < currentIndex) {
        indexToEnter += 1;
      } else {
        break;
      }
    }

    onChange(prev => {
      const otpArray = prev.split("");
      const lastValue = currentValue[currentValue.length - 1];

      if (!lastValue) return otpArray.join("");

      otpArray[indexToEnter] = lastValue;
      return otpArray.join("");
    });
    if (currentValue !== "") {
      if (currentIndex < length - 1) {
        focusInput(currentIndex + 1);
      }
    }
  };

  const handleClick = (
    _event: React.MouseEvent<HTMLInputElement, MouseEvent>,
    currentIndex: number,
  ) => {
    selectInput(currentIndex);
  };

  const handlePaste = (
    event: React.ClipboardEvent<HTMLInputElement>,
    currentIndex: number,
  ) => {
    event.preventDefault();
    const clipboardData = event.clipboardData;

    // Check if there is text data in the clipboard
    if (clipboardData.types.includes("text/plain")) {
      let pastedText = clipboardData.getData("text/plain");

      pastedText = pastedText.substring(0, length).trim();
      let indexToEnter = 0;
      const inputEl = inputRefs.current[indexToEnter];

      if (!inputEl) return;

      while (indexToEnter <= currentIndex) {
        if (inputEl.value && indexToEnter < currentIndex) {
          indexToEnter += 1;
        } else {
          break;
        }
      }

      const otpArray = value.split("");

      for (let i = indexToEnter; i < length; i += 1) {
        const lastValue = pastedText[i - indexToEnter] ?? " ";

        otpArray[i] = lastValue;
      }

      onChange(otpArray.join(""));
    }
  };

  return (
    <Box sx={{ display: "flex", gap, alignItems: "center" }}>
      {new Array(length).fill(null).map((_, index) => (
        <React.Fragment key={index}>
          <BaseInput
            disabled={disabled}
            slots={{
              input: InputElement,
            }}
            aria-label={`Digit ${index + 1} of OTP`}
            slotProps={{
              input: {
                ref: ele => {
                  inputRefs.current[index] = ele!;
                },
                onKeyDown: event => handleKeyDown(event, index),
                onChange: event => handleChange(event, index),
                onClick: event => handleClick(event, index),
                onPaste: event => handlePaste(event, index),
                value: value[index] ?? "",
              },
            }}
          />
          {index === length - 1 ? null : separator}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default OTPInput;
