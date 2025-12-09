import { Button } from "@/components/ui/button.tsx";
import VoterField from "@/components/VoterField.tsx";
import { voterPropsToLabel } from "@/constants/labels.ts";
import type { Voter, VoterProps } from "@/types/voter.ts";
import { CircleArrowLeftIcon } from "lucide-react";

const VoterInformationPage = () => {
  const voter: Voter = {
    nationalId: "۰۰۲۷۲۹۶۵۴۹",
    studentId: "۴۰۰۱۲۳۳۹۰۱۶۷۴۹",
    firstName: "محسن",
    lastName: "شمسی تبار",
    fatherName: "امین",
    major: "علوم کامپیوتر",
    phoneNumber: "۰۹۳۵۵۲۸۰۳۶۰",
    gender: "مرد",
    association: "علوم کامپیوتر",
    degree: "لیسانس",
  };

  const renderVoterFields = () => {
    const keys = Object.keys(voter) as VoterProps[];

    return keys.map(key => (
      <VoterField
        key={key}
        label={voterPropsToLabel[key]}
        value={voter[key]}
      />
    ));
  };

  const handleOnContinueClick = () => {
    console.log("Continue");
  };

  return (
    <div className="bg-stars min-h-dvh pt-6">
      <div className="container mx-auto px-6">
        <div className="mb-6 flex flex-col gap-2 text-center">
          <h3 className="text-2xl font-bold md:text-3xl">
            لطفا اطلاعات خود را برسی کنید
          </h3>
          <h4 className="text-primary font-semibold md:text-lg">
            در صورت مغایرت، به اپراتور اطلاع دهید!
          </h4>
        </div>

        <div className="bg-background border-border grid grid-cols-1 gap-4 rounded-3xl border p-4 md:grid-cols-3">
          {renderVoterFields()}
        </div>

        <div className="my-4 flex items-center justify-center">
          <Button
            className="flex items-center justify-center"
            variant="glass"
            size="lg"
            onClick={handleOnContinueClick}
          >
            <span>ادامه</span>
            <CircleArrowLeftIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VoterInformationPage;
