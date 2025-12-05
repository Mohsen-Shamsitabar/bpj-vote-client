import { Button } from "@/components/ui/button.tsx";
import VoterInfoGridItem from "@/components/VoterInfoGridItem.tsx";
import { voterPropsToLabel } from "@/constants/labels.ts";
import type { Voter, VoterProps } from "@/types/voter.ts";

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

  const handleOnContinueClick = () => {
    console.log("Continue");
  };

  return (
    <div className="border-secondary container mx-auto flex flex-col gap-8 rounded-2xl border-0 p-8 md:border">
      <div className="text-center">
        <h5 className="text-2xl">به سایت انتخابات آنلاین خوش آمدید.</h5>

        <h6 className="text-xl">لطفا اطلاعات خود را برسی کنید!</h6>
      </div>

      <div className="flex flex-col gap-3 px-4 py-8">{renderGridItems()}</div>

      <Button
        onClick={handleOnContinueClick}
        className="w-full"
      >
        ادامه
      </Button>
    </div>
  );
};

export default VoterInformationPage;
