"use client";
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";
import { toast } from "sonner";

type Props = {};

const CopyButton = (props: Props) => {
  return (
    <Button
      variant={"outline"}
      onClick={() => {
        navigator.clipboard.writeText("danishaiman2000@gmail.com");
        toast.success("Copied Email!");
      }}
    >
      <MailIcon className="w-4 mr-2" /> Reach by Email
    </Button>
  );
};

export default CopyButton;
