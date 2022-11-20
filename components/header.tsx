import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonBiking,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Container } from "./container";

export const Header = () => {
  return (
    <header className="flex flex-row justify-between">
      <Container>
        <div className="pt-10 flex flex-col md:flex-row md:justify-center items-center">
          <a
            className="px-1"
            href="mailto:jkatzen8@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </a>
          <a
            className="px-1"
            href="https://www.github.com/katzenj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="px-1"
            href="https://www.linkedin.com/in/jordankatzen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://strava.com/athletes/jordanktz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="px-1" icon={faPersonBiking} />
          </a>
        </div>
        <hr className="mt-5" />
        {/* <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter mb-20 mt-8">
          <Link href="/" className="hover:underline">
            Jordan.
          </Link>
        </h2> */}
      </Container>
    </header>
  );
};
