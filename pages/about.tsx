import Head from "next/head";
import { useRouter } from "next/router";
import { Container } from "../components/container";
import { Header } from "../components/header";
import { Layout } from "../components/layout";

export default function About() {
  const router = useRouter();

  return (
    <Layout>
      <Container>
        <Header />

        <p>woof</p>
      </Container>
    </Layout>
  );
}
