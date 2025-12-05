import type ASSOCIATIONS from "@/constants/associations.ts";
import type DEGREES from "@/constants/degrees.ts";
import type GENDERS from "@/constants/genders.ts";

export type Voter = {
  nationalId: string;
  studentId: string;
  firstName: string;
  lastName: string;
  fatherName: string;
  major: string;
  phoneNumber: string;

  gender: (typeof GENDERS)[keyof typeof GENDERS];
  degree: (typeof DEGREES)[keyof typeof DEGREES];
  association: (typeof ASSOCIATIONS)[keyof typeof ASSOCIATIONS];
};

export type VoterProps = keyof Voter;
