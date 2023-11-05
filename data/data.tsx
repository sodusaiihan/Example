import {
  Flower2,
  LucideMagnet,
  UserCircle2,
  UserCircleIcon,
} from "lucide-react";

export const role = [
  {
    value: "admin",
    label: "Админ",
    icon: UserCircle2,
  },
  {
    value: "user",
    label: "Хэрэглэгч",
    icon: UserCircleIcon,
  },
];

export const gender = [
  {
    label: "Эрэгтэй",
    value: "MALE",
    icon: LucideMagnet,
  },
  {
    label: "Эмэгтэй",
    value: "FEMALE",
    icon: Flower2,
  },
];
