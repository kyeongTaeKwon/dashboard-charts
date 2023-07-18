import { Responsive, WidthProvider, Layout, Layouts } from "react-grid-layout";

import layout from "../../layoutConfig";
import GridItem from "../grid-item";
import UniqueView from "../unique-view";
import PageView from "../page-view";

const getLayouts = () => {
  const savedLayouts = localStorage.getItem("grid-layout");

  return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout };
};

const ResponsiveGridLayout = WidthProvider(Responsive);

interface Props {
  date: string;
}
function GridLayout({ date }: Props) {
  const onLayoutChange = (_: Layout[], layouts: Layouts) => {
    localStorage.setItem("grid-layout", JSON.stringify(layouts));
  };

  return (
    <ResponsiveGridLayout
      layouts={getLayouts()}
      width={1000}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={250}
      margin={[32, 32]}
      onLayoutChange={onLayoutChange}
      isDraggable
      isResizable
    >
      <div key="daily-unique-users">
        <GridItem
          title={"접속유저"}
          subTitle="Unique Event Count"
          children={<UniqueView date={date} />}
        />
      </div>
      <div key="daily-visits">
        <GridItem
          title={"접속횟수"}
          subTitle="Total Event Count"
          children={<PageView date={date} />}
        />
      </div>
      <div key={"daily-active-users"}>
        <GridItem title={"DAU"} />
      </div>
      <div key={"top-referral"}>
        <GridItem title={"Top Referral"} />
      </div>
      <div key={"country"}>
        <GridItem title={"Country"} />
      </div>
    </ResponsiveGridLayout>
  );
}

export default GridLayout;
