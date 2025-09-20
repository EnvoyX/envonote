"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function LogoutButton() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  async function handleLogout() {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const errorMessage = null;
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

export default LogoutButton;
