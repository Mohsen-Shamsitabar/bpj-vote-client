import z from "zod";

const loginFormSchema = z.object({
  username: z.string().min(3, { error: "بیشتر از ۳ حرف وارد کنید!" }),
  password: z.string().min(3, { error: "بیشتر از ۳ حرف وارد کنید!" }),
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;

export { loginFormSchema, type LoginFormSchema };
