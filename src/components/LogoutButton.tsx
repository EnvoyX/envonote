"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { logOutAction } from "@/action/users";

async function LogOutButton() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  async function handleLogout() {
    setLoading(true);
    const { errorMessage } = await logOutAction();
    if (!errorMessage) {
      toast.success("Logged out!", {
        description: "You have been successfully logged out.",
      });
      router.push("/");
    } else {
      toast.error("Error has occurred", {
        description: "Logout has failed.",
      });
    }
    setLoading(false);
  }

  return (
    <Button
      variant={"outline"}
      onClick={handleLogout}
      className="w-24"
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
    </Button>
  );
}

export default LogOutButton;
