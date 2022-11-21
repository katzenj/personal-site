import { Container } from "./container";

export const Footer = () => {
  return (
    <footer className="bg-neutral-50 bg-eerie-black">
      <Container>
        <hr />
        <div className="py-10 flex flex-col md:flex-row md:justify-center items-center text-white">
          <p>© Jordan Katzen 2022</p>
        </div>
      </Container>
    </footer>
  );
};
