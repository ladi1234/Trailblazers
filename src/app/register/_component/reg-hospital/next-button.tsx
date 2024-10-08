"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import cn from "classnames";
import regHospitalForm, {
  useSpecsList,
  useTreatmentList,
} from "@/lib/store/regHospitalForm";
import { addFirstoreData } from "@/lib/firebase/firestore/hospitalFirestore";
import { useToast } from "@/components/ui/use-toast";
import { handleImageUpload } from "../../_libs";
import { useRouter } from "next/navigation";
import { LoadingOutlined } from "@ant-design/icons";

type Props = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const LAST_STEP = 5;
const FIRST_STEP = 1;

export default function NextButton({ step, setStep }: Props) {
  const router = useRouter();

  const {
    hospitalName,
    coverImage,
    description,
    contact,
    address,
    googleMapLink,
    resetAllValue,
  } = regHospitalForm();

  const { getSelectedTreat, resetTreat } = useTreatmentList();
  const { getSelectedSpec, resetSpec } = useSpecsList();
  const { toast } = useToast();
  const [imageUrl, setImageUrl] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmitHospital() {
    setIsSending(true);
    await handleImageUpload(coverImage, toast, setImageUrl);

    if (!imageUrl) {
      setIsSending(false);
      return toast({
        description: "Could not upload image. Try again",
        variant: "destructive",
        duration: 1000,
      });
    }

    const hospitalData = {
      hospitalName,
      coverImage: imageUrl,
      description,
      contact,
      address,
      googleMapLink,
      treatments: getSelectedTreat(),
      specialities: getSelectedSpec(),
    };

    console.log(hospitalData);

    //TODO: validate if empty or incorrect format in input

    const result = await addFirstoreData(hospitalData, "hospitals");

    if (result.success) {
      setIsSending(false);

      toast({
        description: "Hospital Registered Successfully",
        variant: "default",
        duration: 1000,
      });

      //clear form
      resetAllValue();
      resetTreat();
      resetSpec();

      return router.push("/");
    }

    toast({
      description: "Something went wrong. Could not register Hospital",
      variant: "destructive",
      duration: 1000,
    });
  }

  return (
    <div className="mb-5 mt-10 flex w-full items-center justify-between">
      <button
        className={cn(
          "w-28 rounded-md bg-blue-800/80 py-1.5 text-white",
          step === FIRST_STEP && "opacity-0",
        )}
        onClick={() => {
          if (step == 1) return;
          setStep((prev) => prev - 1);
        }}
      >
        Previous
      </button>
      <button
        className="w-28 rounded-md bg-black py-1.5 text-white opacity-80 hover:opacity-100"
        onClick={() => {
          if (step === LAST_STEP) {
            if (isSending) return;
            handleSubmitHospital();
            return;
          }
          setStep((prev) => prev + 1);
        }}
      >
        {isSending && <LoadingOutlined />}

        {!isSending && <p>{step === LAST_STEP ? "Submit" : "Next"}</p>}
      </button>
    </div>
  );
}
