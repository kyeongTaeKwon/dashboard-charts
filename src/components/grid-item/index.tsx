import Title from "../title";
import SubTitle from "../sub-title";
import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  subTitle?: string;
}

function GridItem({ title, subTitle, children }: Props) {
  return (
    <figure>
      <Title title={title} />
      {subTitle && <SubTitle title={subTitle} />}
      {children}
    </figure>
  );
}

export default GridItem;
