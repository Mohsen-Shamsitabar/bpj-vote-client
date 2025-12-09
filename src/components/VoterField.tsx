import { Input } from "@/components/ui/input.tsx";
import { Label } from "@radix-ui/react-label";

type Props = {
  value: string;
  label: string;
};

const VoterField = (props: Props) => {
  const { label, value } = props;

  return (
    <div className="flex flex-col gap-2">
      <Label>{`${label}:`}</Label>

      <Input
        disabled
        value={value}
      />
    </div>
  );
};

export default VoterField;
