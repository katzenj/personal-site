import { Container } from "./container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonBiking,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
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
        <div className="pb-10 flex flex-col md:flex-row md:justify-center items-center">
          <p>© Jordan Katzen 2022</p>
        </div>
      </Container>
    </footer>
  );
};
