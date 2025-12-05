import type { VoterProps } from "@/types/voter.ts";

export const voterPropsToLabel: Record<VoterProps, string> = {
  nationalId: "كد ملى",
  studentId: "شماره دانشجويى",
  association: "انجمن",
  degree: "سطح تحصيلات (مقطع)",
  firstName: "نام",
  lastName: "نام خانوادگی",
  fatherName: "نام پدر",
  gender: "جنسیت",
  major: "رشته تحصيلى",
  phoneNumber: "شماره تلفن همراه",
} as const;
