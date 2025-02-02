"use server";
import prisma from "@/lib/prisma";

async function createArticleByEmail(
  id: string,
  email: string,
  title: string,
  content: string
) {
  try {
    // Find the user based on the email
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // Create the article using the user's ID
    const article = await prisma.article.create({
      data: {
        id: id,
        user_id: user.id,
        title: title,
        content: content,
        like_count: 0,
      },
    });

    return article;
  } catch (error) {
    console.error("Error creating article:", error);
    throw error;
  }
}

export default createArticleByEmail;
