import { Container } from "../components/container";
import { AllStories } from "../components/all-stories";
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
          <AllStories posts={allPosts} />
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
