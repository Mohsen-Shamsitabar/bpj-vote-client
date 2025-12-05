import StringFieldWidget from "@/components/field-widgets/StringFieldWidget.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Form } from "@/components/ui/form.tsx";
import {
  loginFormSchema,
  type LoginFormSchema,
} from "@/form-schemas/loginFormSchema.ts";
import { cn } from "@/lib/utils.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Props = {
  className?: string;
};

const LoginForm = (props: Props) => {
  const { className } = props;

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginFormSchema) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        className={cn("rtl flex flex-col items-center gap-8", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-col gap-4">
          <StringFieldWidget<LoginFormSchema>
            required
            label="نام کاربری"
            name="username"
            type="text"
          />

          <StringFieldWidget<LoginFormSchema>
            required
            label="رمز عبور"
            name="password"
            type="password"
          />
        </div>

        <Button
          type="submit"
          className="w-full"
        >
          ورود
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
