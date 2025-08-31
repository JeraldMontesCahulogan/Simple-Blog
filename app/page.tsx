import AuthButton from "@/components/AuthButton";
import ModeToggle from "@/components/ModeToggle";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { dummyPosts } from "@/dummy-post";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const isAdmin = true;
  const loading = false;
  const posts = dummyPosts;

  return (
    <div className="min-h-screen ">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Simple Blog
          </Link>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            {isAdmin && (
              <Button asChild>
                <Link href="/admin/create">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Post
                </Link>
              </Button>
            )}
            <AuthButton />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Simple Blog</h1>
            <p className="text-muted-foreground">
              A clean, functional blog focused on great content
            </p>
          </div>

          {/* if (loading) display loading message
              if (posts.length === 0)/no posts then display no posts message 
              else display posts if they exist*/}
          {loading ? (
            <div className="text-center">Loading posts...</div>
          ) : posts.length === 0 ? (
            <div className="text-center text-muted-foreground">
              No posts yet. {isAdmin && "Create your first post!"}
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
