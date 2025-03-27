import React from "react";
import { Button } from "../ui/button";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";
import { useSignInAndOut } from "@/hooks/useSignInAndOut";
import { CiUser } from "react-icons/ci";
import { PiSignOut } from "react-icons/pi";
import { signOutWithGoogle } from "@/lib/actions";

function SignInAndOutInfoMenubar({setShowMenu}: {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const t = useTranslations("homePage.navLinks");
  const { accessToken, isAuthenticatedWithGoogle, isPending, mutate, user } =
    useSignInAndOut();
  const pathname = usePathname();
  const locale = useLocale();
  const isHomeSection = pathname === `/${locale}`;

  if (!accessToken)
    return (
      <Link href={"/sign-up&in"} onClick={()=> setShowMenu(false)}>
        <Button
          className={`text-light-400 dark:!text-light-100  w-full mt-6 bg-light-100 dark:bg-dark-100 ${
            isHomeSection ? "md:!bg-light-100 md:dark:!text-light-400" : ""
          }`}
          variant="outline"
        >
          {t("signin")}
        </Button>
      </Link>
    );

  return (
    <div>
      <Button
        variant="ghost"
        className="my-2 w-full   [&_svg]:size-5 hover:bg-transparent pointer-events-none !justify-start relative capitalize font-semibold font-mont"
      >
        <div className="flex gap-2 rtl:flex-row-reverse">
          <span>{`${user?.name} ${user?.lastname}`}</span>
          <span>
            <CiUser />
          </span>
        </div>
      </Button>
      {isAuthenticatedWithGoogle ? (
        <Button
          disabled={isPending}
          onClick={() => {
            signOutWithGoogle();
          }}
          variant="ghost"
          className="my-2 w-full !justify-start relative"
        >
          {t("logout")}

          <PiSignOut />
        </Button>
      ) : (
        <Button
          variant="ghost"
          className="my-2 w-full !justify-start relative"
          disabled={isPending}
          onClick={() => mutate()}
        >
          {t("logout")}

          <PiSignOut />
        </Button>
      )}
    </div>
  );
}

export default SignInAndOutInfoMenubar;
