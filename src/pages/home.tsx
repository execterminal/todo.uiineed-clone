import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useTranslation } from "react-i18next";

const { t } = useTranslation();

const Home: React.FC = () => {
  return (
    <div>
      <Input placeholder={t("home.inputPlaceholder")}></Input>
      <h1>hiii</h1>
    </div>
  );
};

export default Home;
