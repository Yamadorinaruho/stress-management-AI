/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/uCQSUEJMmbR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import {
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";
import incrementLikeCount from "@/app/api/article/incrementLikeCount";
import { Button } from "@/components/ui/button";
type CardUIProps = {
  Id: string;
  title: string;
  description: string;
  like_count: number;
};
import { useState } from "react";
export default function CardUI({
  Id,
  title,
  description,
  like_count,
}: CardUIProps) {
  const [likeCount, setLikeCount] = useState(like_count);
  const incrementLikeCounthandle = async (Id: string) => {
    try {
      await incrementLikeCount(Id);
      setLikeCount(likeCount + 1);
    } catch (error) {
      console.error("Error incrementing like count:", error);
    }
  };
  return (
    <div className=" flex items-center justify-center">
      <Button onClick={async () => incrementLikeCounthandle(Id)}>いいね</Button>
      <Card className="w-full max-w-sm rounded-lg shadow-md h-[80vh] ">
        <div className="h-[50vh] text-8xl flex items-center justify-center">
          {like_count}
        </div>
        <CardContent className="p-5">
          <CardTitle className="text-2xl font-bold mb-2">{title}</CardTitle>
          <CardDescription className="text-gray-500">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
