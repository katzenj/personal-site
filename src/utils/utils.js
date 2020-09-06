import { PROJECTS, HOME } from 'src/utils/defs';

export const getPage = (pathname) => {
  switch(pathname) {
  case '/projects':
    return PROJECTS;
  case '/home':
    return HOME;
  default:
    return HOME
  }
}