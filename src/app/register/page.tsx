"use client";
import { useState } from "react";
import HospitalDetailsForm from "./_component/reg-hospital/hospital-details";
import HospitalContactForm from "./_component/reg-hospital/hospital-contact";
import HospitalAddrForm from "./_component/reg-hospital/hospital-address";
import HospitalSpecForm from "./_component/reg-hospital/hospital-spec";
import HospitalTreatForm from "./_component/reg-hospital/hospital-treat";
import NextButton from "./_component/reg-hospital/next-button";

type Props = {};

function Page({}: Props) {
  const [step, setStep] = useState<number>(1);

  return (
    <main className="mx-auto max-w-4xl p-10">
      {step === 1 && <HospitalDetailsForm />}
      {step === 2 && <HospitalContactForm />}
      {step === 3 && <HospitalAddrForm />}
      {step === 4 && <HospitalSpecForm />}
      {step === 5 && <HospitalTreatForm />}

      <NextButton step={step} setStep={setStep} />
    </main>
  );
}

export default Page;
