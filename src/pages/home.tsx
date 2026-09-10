import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useTranslation } from "react-i18next";



const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-background w-full h-screen">
      <div className="border border-red-300 w-full h-30 flex justify-center items-center">
        <Input placeholder={t("home.inputPlaceholder")}></Input>
        <Button 
        variant={"main"}
        >{t("home.inputAddButton")}</Button>
        {/* <button className="border border-l-2xl">Add</button> */}
      </div>
    </div>
  );
};

export default Home;
