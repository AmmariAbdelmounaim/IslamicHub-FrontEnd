"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { ChangeEvent, useTransition } from "react";

const LangSwitcher = () => {
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }
  return (
    <select
      className="bg-transparent  font-poppins font-medium text-primary-orange-darker text-[18px] rounded-lg  block  p-1 "
      defaultValue={locale}
      disabled={isPending}
      onChange={onSelectChange}
    >
      {["en", "fr"].map((cur) => (
        <option key={cur} value={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </select>
  );
};
export default LangSwitcher;
