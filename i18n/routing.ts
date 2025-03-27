import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  // pathnames: {
  //   home: {
  //     en: "home",
  //     ar: "الرئيسية",
  //   },
  // },
});
