import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import cn from "classnames";

type Props = {
  children: any;
  title: string;
  desc: string;
  className?: string;
};

export default function FormSection({
  className,
  children,
  title,
  desc,
}: Props) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-black">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
