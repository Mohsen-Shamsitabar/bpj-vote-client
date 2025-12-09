import LoginForm from "@/components/forms/LoginForm.tsx";
import useBpjLogo from "@/hooks/useBpjLogo.tsx";

const LoginPage = () => {
  const BpjLogo = useBpjLogo();

  return (
    <div className="bg-stars min-h-dvh px-6 pt-6">
      <div className="bg-background relative container mx-auto my-40">
        <div className="border-primary flex flex-col justify-center gap-6 rounded-2xl border p-4">
          <div className="bg-background absolute top-0 right-0 left-0 m-auto aspect-square w-40 -translate-y-1/2 rounded-full">
            <div className="image-container">{BpjLogo}</div>
          </div>

          <div className="mt-20 text-center text-3xl">
            <h4 className="font-semibold">ورود</h4>

            <h5>سامانه انتخابات آنلاین</h5>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
