import { Responsive, WidthProvider, Layout, Layouts } from "react-grid-layout";

const layout = [
  { i: "daily-unique-users", x: 0, y: 0, w: 3, h: 1 },
  { i: "daily-visits", x: 3, y: 0, w: 3, h: 1 },
  { i: "daily-active-users", x: 0, y: 0, w: 6, h: 1 },
  { i: "top-referral", x: 0, y: 0, w: 3, h: 1 },
  { i: "country", x: 3, y: 0, w: 3, h: 1 },
];

const getLayouts = () => {
  const savedLayouts = localStorage.getItem("grid-layout");

  return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout };
};

const ResponsiveGridLayout = WidthProvider(Responsive);

function GridLayout() {
  const onLayoutChange = (_: Layout[], layouts: Layouts) => {
    localStorage.setItem("grid-layout", JSON.stringify(layouts));
  };

  return (
    <ResponsiveGridLayout
      layouts={getLayouts()}
      width={1000}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 6, md: 3, sm: 3, xs: 2, xxs: 1 }}
      rowHeight={250}
      onLayoutChange={onLayoutChange}
      isResizable
    >
      <figure key="daily-unique-users">일별 유저</figure>
      <figure key="daily-visits">daily-visits</figure>
      <figure key="daily-active-users">daily-active-users</figure>
      <figure key="top-referral">top-referral</figure>
      <figure key="country">country</figure>
    </ResponsiveGridLayout>
  );
}

export default GridLayout;
