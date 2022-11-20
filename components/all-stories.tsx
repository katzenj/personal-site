import { PostPreview } from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

export const AllStories = ({ posts }: Props) => {
  const postsLength = posts.length;
  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold tracking-tighter leading-tight">
        Posts
      </h2>
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
            {idx < postsLength - 1 && <hr className="my-12" />}
          </>
        ))}
      </div>
    </section>
  );
};
