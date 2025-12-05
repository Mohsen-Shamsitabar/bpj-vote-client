import { Button } from "@/components/ui/button.tsx";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp.tsx";
import useBpjLogo from "@/hooks/useBpjLogo.tsx";
import * as React from "react";

const OtpPage = () => {
  const [otp, setOtp] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);

  const otpLength = React.useMemo(() => 4, []);

  const BpjLogo = useBpjLogo();

  const isFinished = otp.length === otpLength;

  const renderInputs = () => {
    const elements: React.JSX.Element[] = [];

    for (let i = 0; i < otpLength; i++) {
      const input = (
        <InputOTPGroup key={`${i}-input`}>
          <InputOTPSlot index={i} />
        </InputOTPGroup>
      );

      elements.push(input);

      if (i >= otpLength - 1) continue;

      const separator = <InputOTPSeparator key={`${i}-separator`} />;

      elements.push(separator);
    }

    return elements;
  };

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
    <div className="relative container mx-auto my-40">
      <div className="border-secondary flex flex-col justify-center gap-6 rounded-2xl border p-4">
        <div className="bg-background absolute top-0 right-0 left-0 m-auto aspect-square w-40 -translate-y-1/2 rounded-full">
          <div className="image-container">{BpjLogo}</div>
        </div>

        <div className="mt-20 text-center text-3xl">
          <h4 className="font-semibold">ورود</h4>

          <h5>سامانه انتخابات آنلاین</h5>
        </div>

        <div
          className="rtl flex w-full items-center justify-center"
          style={{ direction: "ltr" }}
        >
          <InputOTP
            disabled={disabled}
            value={otp}
            onChange={setOtp}
            maxLength={otpLength}
          >
            {renderInputs()}
          </InputOTP>
        </div>

        <Button
          disabled={disabled}
          className="w-full"
          onClick={onSubmit}
        >
          ورود
        </Button>
      </div>
    </div>
  );
};

export default OtpPage;
