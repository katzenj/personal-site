import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto text-white">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
