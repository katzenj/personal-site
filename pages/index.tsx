import { Container } from "../components/container";
import { AllStories } from "../components/all-stories";
import { HeroPost } from "../components/hero-post";
import { Layout } from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { Post } from "../interfaces/post";
import { Intro } from "../components/intro";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Jordan</title>
        </Head>
        <Container>
          <Intro />
          {allPosts.length > 0 && <AllStories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
