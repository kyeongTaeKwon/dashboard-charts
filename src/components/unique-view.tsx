import { useMemo } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { useUniqueEventCountQuery } from "../hooks/use-event-count";

const $H3 = styled.h3`
  padding-top: 16px;
  padding-left: 16px;
`;

interface Props {
  date: string;
}

function UniqueView({ date }: Props) {
  const { data: uniqueEventCount } = useUniqueEventCountQuery();

  const datetime = dayjs(date).format("YYYY-MM-DD");
  const prevDate = dayjs(date).subtract(1, "day").format("YYYY-MM-DD");

  const diff = useMemo(() => {
    if (uniqueEventCount[prevDate]) {
      return (
        Number(uniqueEventCount[datetime]) - Number(uniqueEventCount[prevDate])
      );
    }
    return "이전 날의 데이터가 없습니다.";
  }, [datetime]);

  return (
    <>
      <$H3>{uniqueEventCount[datetime]}</$H3>
      <$H3>{diff}</$H3>
    </>
  );
}

export default UniqueView;
