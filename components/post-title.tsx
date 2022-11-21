import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-5xl font-bold tracking-tighter leading-tight md:leading-none my-12 text-center md:text-left text-white">
      {children}
    </h1>
  );
};
