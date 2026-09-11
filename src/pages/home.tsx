import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-background w-full h-screen">
      <div className="flex justify-center items-center flex-col">
        <div className="border border-red-300 w-full h-30 flex justify-center items-center">
          <Input placeholder={t("home.inputPlaceholder")}></Input>
          <Button className="rounded-r-2xl border-border border-l-0 h-17 w-25 bg-myred cursor-pointer">
            {t("home.inputAddButton")}
          </Button>
          {/* <button className="border border-l-2xl">Add</button> */}
        </div>

        <div className="flex">
          <Button className="bg-mygreen border-border border-r-0 border-b-0 rounded-tl-2xl h-10 w-40">
            Mark All Done
          </Button>
          <Button className="font-bold hover:bg-#8cd4cb border-border border-b-0 rounded-tr-2xl bg-foreground hover:bg-myyellow1 h-10 w-127 flex justify-start p-5">
            Act Now, Simplify Life.☕
          </Button>
        </div>

        <div className="border w-167 bg-foreground p-10 flex flex-col gap-4 pb-20">
          <p>Add Your First To-Do Item! 📝</p>
          <p>Usage Tips 💡:</p>
          <p>✔️ Press Enter to submit actions.</p>
          <p>✔️ Drag to reorder your to-dos (PC only)</p>
          <p>✔️ Double-click to edit slogan and tasks.</p>
          <p>✔️ Access quick actions in the right sidebar.</p>
          <p>🔒 Your data is stored locally in your browser.</p>
          <p>📝 Supports data download and import. </p>
        </div>

        <div className="border border-t-0 rounded-b-2xl bg-foreground w-167 h-10"></div>
      </div>
    </div>
  );
};

export default Home;
