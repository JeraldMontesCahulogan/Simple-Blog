import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "./ui/button";
import { Heart, MessageCircle } from "lucide-react";

type Post = {
  id: string;
  title: string;
  author: {
    name?: string;
    image?: string;
  };
  createdAt: string | number | Date;
  // Add other fields as needed
};

export default function PostCard({ post }: { post: Post }) {
  const likeLoading = true;
  const liked = false;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={post.author.image || ""} />
            <AvatarFallback>{post.author.name?.[0] || "A"}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{post.author.name}</p>
            <p className="text-xs text-muted-foreground">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <CardTitle className="text-xl">
          <Link href={`/posts/${post.id}`} className="hover:underline">
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>

      <CardFooter className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-1"
          // onClick={handleLike}
          // disabled={!session}
        >
          <Heart
            className={`h-4 w-4 ${
              likeLoading
                ? "animate-pulse"
                : liked
                ? "fill-red-500 text-red-500"
                : ""
            }`}
          />
          <span></span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-1"
        >
          <MessageCircle className="h-4 w-4" />
          <span>4</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
