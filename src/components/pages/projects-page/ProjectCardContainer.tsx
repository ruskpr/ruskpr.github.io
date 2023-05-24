import { ReactNode } from "react";

type Props = {
  className?: string;
  children: JSX.Element[] | JSX.Element | ReactNode;
};
export default function ProjectCardContainer({ className, children }: Props) {
  return (
    <div className={className ? className : "flex gap-6 flex-wrap"}>
      {children}
    </div>
  );
}
