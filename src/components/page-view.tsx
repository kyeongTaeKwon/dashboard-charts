import { useMemo } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { useTotalEventCountQuery } from "../hooks/use-event-count";

const $H3 = styled.h3`
  padding-top: 16px;
  padding-left: 16px;
`;

interface Props {
  date: string;
}

function UniqueView({ date }: Props) {
  const { data: totalView } = useTotalEventCountQuery();

  const datetime = dayjs(date).format("YYYY-MM-DD");
  const prevDate = dayjs(date).subtract(1, "day").format("YYYY-MM-DD");

  const diff = useMemo(() => {
    if (totalView[prevDate]) {
      return Number(totalView[datetime]) - Number(totalView[prevDate]);
    }
    return "이전 날의 데이터가 없습니다.";
  }, [datetime]);

  return (
    <>
      <$H3>{totalView[datetime]}</$H3>
      <$H3>{diff}</$H3>
    </>
  );
}

export default UniqueView;
