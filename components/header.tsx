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
    <header>
      <Container>
        <div className="pt-10 columns-3">
          <div className="my-auto">
            <h2 className="text-2xl font-bold tracking-tighter text-white ">
              <Link href="/" className="hover:text-blue-green">
                Jordan.
              </Link>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center items-center translate-y-1/4">
            <a
              className="px-1 text-white hover:text-blue-green"
              href="mailto:jkatzen8@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </a>
            <a
              className="px-1 text-white hover:text-blue-green"
              href="https://www.github.com/katzenj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="px-1 text-white hover:text-blue-green"
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
              <FontAwesomeIcon
                className="px-1 text-white hover:text-blue-green"
                icon={faPersonBiking}
              />
            </a>
          </div>
        </div>
        <hr className="mt-5" />
      </Container>
    </header>
  );
};
