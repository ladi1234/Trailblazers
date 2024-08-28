"use client";
import { SendHorizonal } from "lucide-react";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import cn from "classnames";

type SituationProps = {
  situationText: string;
  updateSituation: any;
  handleSubmit: any;
  headerStyles?: string;
};

export default function SituationInput({
  situationText,
  updateSituation,
  handleSubmit,
  headerStyles,
}: SituationProps) {
  const [imageInput, setImageInput] = useState<any>(null);

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <>
      {/* input-area */}
      <div className="relative flex w-full flex-col gap-3 rounded-md border bg-white focus-within:bg-white/70 md:max-w-4xl md:bg-white/50">
        <TextareaAutosize
          className="w-full resize-none p-5 text-base outline-none md:bg-transparent"
          placeholder="Describe the details of Emergency"
          value={situationText}
          autoFocus={true}
          onChange={(e) => updateSituation(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <div className="flex items-center justify-end gap-2 p-2 pb-2 pr-3 text-blue-800">
          <SendHorizonal
            className={cn(
              "h-12 w-12 scale-75 cursor-pointer rounded-full bg-blue-800 p-2 text-white transition-all duration-100",
              !situationText && "bg-blue-800/50",
            )}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
}
