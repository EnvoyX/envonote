"use server";

import { getUser } from "@/app/auth/server";
import { prisma } from "@/db/prisma";
import { handleError } from "@/lib/utils";

export async function createNoteAction(noteId: string) {
  try {
    const user = await getUser();
    if (!user) throw new Error("You must be logged in to update a note.");

    await prisma.note.create({
      data: {
        id: noteId,
        text: "",
        authorId: user.id,
      },
    });

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
}

export async function updateNoteAction(noteId: string, text: string) {
  try {
    const user = await getUser();
    if (!user) throw new Error("You must be logged in to update a note.");

    await prisma.note.update({
      where: {
        id: noteId,
      },
      data: {
        text,
      },
    });

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
}
