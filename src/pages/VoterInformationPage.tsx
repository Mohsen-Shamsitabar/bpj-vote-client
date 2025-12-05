import VoterInfoGridItem from "@/components/VoterInfoGridItem.tsx";
import { voterPropsToLabel } from "@/constants/labels.ts";
import * as sx from "@/styles/voter-information-page.ts";
import type { Voter, VoterProps } from "@/types/voter.ts";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

const VoterInformationPage = () => {
  const voter: Voter = {
    nationalId: "۰۰۲۵۲۷۰۴۲۷",
    studentId: "۴۰۰۱۲۳۳۰۱۱۷۰۱۰",
    firstName: "محسن",
    lastName: "شمسی تبار",
    fatherName: "امین",
    major: "علوم کامپیوتر",
    phoneNumber: "۰۹۳۵۴۳۶۰۸۹۰",
    gender: "مرد",
    association: "علوم کامپیوتر",
    degree: "لیسانس",
  };

  const renderGridItems = () => {
    const keys = Object.keys(voter) as VoterProps[];

    return keys.map(key => (
      <VoterInfoGridItem
        key={key}
        label={voterPropsToLabel[key]}
        value={voter[key]}
      />
    ));
  };

  return (
    <Container
      maxWidth="md"
      sx={sx.root}
    >
      <Box sx={sx.textContainer}>
        <Typography variant="h5">به سایت انتخابات آنلاین خوش آمدید.</Typography>

        <Typography variant="h6">لطفا اطلاعات خود را برسی کنید!</Typography>
      </Box>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        columns={12}
        justifyContent="center"
        alignItems="center"
        sx={sx.gridContainer}
      >
        {renderGridItems()}
      </Grid>

      <Button
        color="primary"
        variant="contained"
        fullWidth
      >
        ادامه
      </Button>
    </Container>
  );
};

export default VoterInformationPage;
