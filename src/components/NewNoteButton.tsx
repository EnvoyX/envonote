"use client";
import { User } from "@supabase/supabase-js";
import { Button } from "./ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import { createNoteAction } from "@/action/notes";

type Props = {
  user: User | null;
};

function NewNoteButton({ user }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  async function handleClickNewNoteButton() {
    if (!user) {
      router.push("/login");
    } else {
      setIsLoading(true);

      const uuid = uuidv4();
      await createNoteAction(uuid);

      router.push(`/?noteId=${uuid}`);
      toast.success("New note created!", {
        description: "Your new note has been created.",
      });

      setIsLoading(false);
    }
  }
  return (
    <Button
      onClick={handleClickNewNoteButton}
      variant={"secondary"}
      className="w-24"
      disabled={isLoading}
    >
      {isLoading ? <Loader2 className="animate-spin" /> : "New Note"}
    </Button>
  );
}
export default NewNoteButton;
