import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

export const FormattedDate = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <i>
      <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>
    </i>
  );
};
