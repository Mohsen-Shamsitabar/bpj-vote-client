import StringFieldWidget from "@/components/field-widgets/StringFieldWidget.tsx";
import {
  loginFormSchema,
  type LoginFormSchema,
} from "@/form-schemas/loginFormSchema.ts";
import * as sx from "@/styles/login-form.ts";
import type { SystemSX } from "@/types/mui.ts";
import mergeSx from "@/utils/merge-sx.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

type Props = {
  sx?: SystemSX;
};

const LoginForm = (props: Props) => {
  const { sx: sxProp } = props;

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
    <Stack
      sx={mergeSx(sx.root, sxProp)}
      component="form"
      dir="rtl"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FormProvider {...form}>
        <Stack sx={sx.fieldContainer}>
          <StringFieldWidget<LoginFormSchema>
            label="نام کاربری"
            name="username"
            fullWidth
            type="text"
          />

          <StringFieldWidget<LoginFormSchema>
            label="رمز عبور"
            name="password"
            fullWidth
            type="password"
          />
        </Stack>

        <Button
          color="primary"
          variant="contained"
          type="submit"
          sx={sx.button}
        >
          Submit
        </Button>
      </FormProvider>
    </Stack>
  );
};

export default LoginForm;
