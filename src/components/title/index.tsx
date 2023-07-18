import styled from "styled-components";

const $H2 = styled.h2`
  color: #2089e5;
  padding-top: 16px;
  padding-left: 16px;
`;

interface Props {
  title: string;
}

function Title({ title }: Props) {
  return <$H2>{title}</$H2>;
}

export default Title;
