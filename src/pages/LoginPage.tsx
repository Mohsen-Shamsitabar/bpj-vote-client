import LoginForm from "@/components/forms/LoginForm.tsx";
import { imageContainerSx } from "@/global-sx.ts";
import useBpjLogo from "@/hooks/useBpjLogo.tsx";
import * as sx from "@/styles/login-page.ts";
import { Box, Container, Stack, Typography } from "@mui/material";

const LoginPage = () => {
  const BpjLogo = useBpjLogo();

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

        <LoginForm />
      </Container>
    </Box>
  );
};

export default LoginPage;
