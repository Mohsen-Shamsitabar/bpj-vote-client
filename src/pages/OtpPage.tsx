import OTPInput from "@/components/OtpInput.tsx";
import { imageContainerSx } from "@/global-sx.ts";
import useBpjLogo from "@/hooks/useBpjLogo.tsx";
import * as sx from "@/styles/otp-page.ts";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import * as React from "react";

const OtpPage = () => {
  const [otp, setOtp] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);

  const BpjLogo = useBpjLogo();

  const otpLength = React.useMemo(() => 5, []);

  const isFinished = otp.length === otpLength;

  const onSubmit = () => {
    setDisabled(true);

    console.log(`Finished "${otp}"`);
  };

  React.useEffect(() => {
    if (isFinished) {
      onSubmit();
    }
  }, [isFinished, onSubmit]);

  return (
    <Box sx={sx.root}>
      <Container
        maxWidth="xs"
        sx={sx.container}
      >
        <Stack sx={sx.textContainer}>
          <Typography variant="h4">ورود</Typography>

          <Typography variant="h5">سامانه انتخابات آنلاین</Typography>
        </Stack>

        <Box sx={sx.logoContainer}>
          <Box sx={imageContainerSx}>{BpjLogo}</Box>
        </Box>

        <Box sx={sx.otpContainer}>
          <OTPInput
            length={otpLength}
            onChange={setOtp}
            value={otp}
            separator={<span>-</span>}
            disabled={disabled}
            gap={0.5}
          />
        </Box>

        <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={onSubmit}
          disabled={disabled}
        >
          Submit
        </Button>
      </Container>
    </Box>
  );
};

export default OtpPage;
