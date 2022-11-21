import { PostPreview } from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

export const AllStories = ({ posts }: Props) => {
  const postsLength = posts.length;
  return (
    <section>
      <h1 className="mb-8 text-5xl font-bold tracking-tighter leading-tight text-white my-12">
        Posts
      </h1>
      <div className="pb-12">
        {posts.map((post, idx) => (
          <>
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
            />
            {idx < postsLength - 1 && <hr key={post.slug} className="my-12" />}
          </>
        ))}
      </div>
    </section>
  );
};
