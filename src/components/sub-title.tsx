import styled from "styled-components";

const $H3 = styled.h3`
  padding-top: 16px;
  padding-left: 16px;
`;

interface Props {
  title: string;
}

function SubTitle({ title }: Props) {
  return (
    <>
      <$H3>{title}</$H3>
    </>
  );
}

export default SubTitle;
