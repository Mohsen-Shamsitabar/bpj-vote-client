import CandidateCard from "@/components/CandidateCard.tsx";
import { Button } from "@/components/ui/button.tsx";
import ROUTES from "@/constants/routes.ts";
import type { Candidate } from "@/types/candidate.ts";
import { CircleCheckIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

const VotingPage = () => {
  const candidates: Candidate[] = [
    {
      id: "21846581",
      firstName: "مانی",
      lastName: "باقری نژاد",
      img: "https://picsum.photos/id/223/200/200",
    },
    {
      id: "218412381",
      firstName: "مانی",
      lastName: "باقری نژاد",
      img: "https://picsum.photos/id/223/200/200",
    },
    {
      id: "25126581",
      firstName: "مانی",
      lastName: "باقری نژاد",
      img: "https://picsum.photos/id/223/200/200",
    },
    {
      id: "21892781",
      firstName: "مانی",
      lastName: "باقری نژاد",
      img: "https://picsum.photos/id/223/200/200",
    },
    {
      id: "69696969",
      firstName: "محسن",
      lastName: "شمسی تبار",
      img: "https://picsum.photos/id/232/200/200",
    },
    {
      id: "69691269",
      firstName: "محسن",
      lastName: "شمسی تبار",
      img: "https://picsum.photos/id/232/200/200",
    },
    {
      id: "23696969",
      firstName: "محسن",
      lastName: "شمسی تبار",
      img: "https://picsum.photos/id/232/200/200",
    },
    {
      id: "69656969",
      firstName: "محسن",
      lastName: "شمسی تبار",
      img: "https://picsum.photos/id/232/200/200",
    },
  ];

  // store candidate id
  const [selected, setSelected] = useState<string[]>([]);

  const navigate = useNavigate();

  const maxSelectCount = 5;

  const makeHandleCardSelect = (candidateId: string) => () => {
    if (selected.includes(candidateId)) {
      const newSelected = selected.filter(id => id !== candidateId);

      setSelected(newSelected);
    } else {
      if (selected.length >= maxSelectCount) return;

      const newSelected = [...selected, candidateId];

      setSelected(newSelected);
    }
  };

  const handleOnContinueClick = () => {
    console.log(selected);

    void navigate(ROUTES.VOTE_CONFIRMED_PAGE);
  };

  const renderCandidates = () => {
    return candidates.map(candidate => {
      const isSelected = selected.includes(candidate.id);
      const isDisabled = selected.length >= maxSelectCount;

      return (
        <CandidateCard
          key={candidate.id}
          candidate={candidate}
          handleCardSelect={makeHandleCardSelect(candidate.id)}
          isSelected={isSelected}
          isDisabled={isDisabled}
        />
      );
    });
  };

  return (
    <div className="bg-stars min-h-dvh pt-6">
      <div className="container mx-auto px-6">
        <div className="my-6 flex flex-col gap-2 text-center">
          <h3 className="text-2xl font-bold md:text-3xl">
            به کاندیدهای موردنظرتون رأی بدید
          </h3>
          <h4 className="text-primary font-semibold md:text-lg">
            تا 5 نفر از کاندیدها رو میتونید انتخاب کنید!
          </h4>
        </div>

        <div className="bg-background border-border flex flex-col flex-wrap items-center justify-center gap-x-4 gap-y-6 rounded-3xl border p-4 md:flex-row">
          {renderCandidates()}
        </div>

        <div className="my-4 flex items-center justify-center">
          <Button
            className="flex items-center justify-center"
            variant="glass"
            size="lg"
            onClick={handleOnContinueClick}
          >
            <span>ثبت</span>
            <CircleCheckIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VotingPage;
