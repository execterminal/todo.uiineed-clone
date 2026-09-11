import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-background w-full h-screen">
      <div className="flex justify-center items-center flex-col">
        <div className="w-full h-30 flex justify-center items-center">
          <Input placeholder={t("home.inputPlaceholder")}></Input>
          <Button className="rounded-r-2xl border-border border-l-0 h-17 w-25 bg-myred cursor-pointer">
            {t("home.inputAddButton")}
          </Button>
        </div>

        <div className="flex justify-end items-start w-265">
          <div>
            <div className="flex">
              <Button className="bg-mygreen border-border border-r-0 border-b-0 rounded-tl-2xl h-10 w-40">
                {t("home.mainT1")}
              </Button>
              <Button className="font-bold hover:bg-#8cd4cb border-border border-b-0 rounded-tr-2xl bg-foreground hover:bg-myyellow1 h-10 w-135 flex justify-start p-5">
                {t("home.mainT2")}
              </Button>
            </div>

            <div className="border w-175 bg-foreground p-10 flex flex-col gap-4 pb-20 ">
              <p>{t("home.mainText1")}</p>
              <p>{t("home.mainText2")}</p>
              <p>{t("home.mainText3")}</p>
              <p>{t("home.mainText4")}</p>
              <p>{t("home.mainText5")}</p>
              <p>{t("home.mainText6")}</p>
              <p>{t("home.mainText7")}</p>
              <p>{t("home.mainText8")}</p>
            </div>

            <div className="border border-t-0 rounded-b-2xl bg-foreground w-175 h-10 hover:bg-myyellow1"></div>
          </div>

          <div className="flex flex-col ml-10 text-center">
            <p className="bg-mygreen border rounded-t-lg border-b-0 font-bold w-35 h-8 flex justify-center items-center">
              OPEN✨
            </p>
            <Button className="bg-myred border-berder border-b-0  w-35 h-8 flex justify-center items-center">
              All
            </Button>
            <Button className="bg-foreground border-berder border-b-0  w-35 h-8 flex justify-center items-center">
              Trash
            </Button>
            <Button className="bg-foreground border-berder rounded-b-lg  w-35 h-8 flex justify-center items-center">
              import(txt/json)
            </Button>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Home;
