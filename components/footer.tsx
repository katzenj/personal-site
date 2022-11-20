import { Container } from "./container";

export const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-10 flex flex-col md:flex-row md:justify-center items-center">
          <p>© Jordan Katzen 2022</p>
        </div>
      </Container>
    </footer>
  );
};
