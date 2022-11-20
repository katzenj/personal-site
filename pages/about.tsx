import Head from "next/head";
import { useRouter } from "next/router";
import { Container } from "../components/container";
import { Layout } from "../components/layout";

export default function About() {
  const router = useRouter();

  return (
    <Layout>
      <Container>
        <p>woof</p>
      </Container>
    </Layout>
  );
}
