import { cn } from "@/lib/utils.ts";
import type { Candidate } from "@/types/candidate.ts";
import { CircleCheckIcon, CircleXIcon } from "lucide-react";

type Props = {
  candidate: Candidate;
  handleCardSelect: () => void;
  isSelected: boolean;
  isDisabled: boolean;
};

const CandidateCard = (props: Props) => {
  const { candidate, handleCardSelect, isSelected, isDisabled } = props;
  const { firstName, lastName, id, img } = candidate;

  const handleSelect = () => {
    if (isDisabled && !isSelected) return;

    handleCardSelect();
  };

  const renderCheckIcon = () => {
    if (isSelected) {
      return <CircleCheckIcon className="stroke-successful" />;
    }

    return <CircleXIcon className="stroke-destructive" />;
  };

  return (
    <div
      onClick={handleSelect}
      className={cn(
        "border-border bg-card relative h-56 w-40 rounded-2xl border p-2",
        isDisabled && !isSelected
          ? "cursor-default brightness-50"
          : "cursor-pointer brightness-100",
      )}
    >
      <div className="relative w-full">
        <div className="image-container size-35 overflow-hidden rounded-lg border">
          <img
            src={img}
            alt="candidate-image"
          />
        </div>

        <div className="absolute right-0 bottom-0 left-0 mx-auto size-8 translate-y-1/2 rounded-full bg-blue-300">
          {/* association logo */}
        </div>
      </div>

      <div className="mt-4 flex w-full flex-col gap-1 text-center">
        <span className="font-bold">{`${firstName} ${lastName}`}</span>
        <div className="text-xs font-extralight opacity-40 brightness-50">
          <span>کد انتخاباتی: </span>
          <span>{id}</span>
        </div>
      </div>

      <div className="bg-card border-border absolute right-0 bottom-0 left-0 mx-auto flex size-6 translate-y-1/2 items-center justify-center rounded-full border">
        {renderCheckIcon()}
      </div>
    </div>
  );
};

export default CandidateCard;
