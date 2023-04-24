import {
  Heading,
  Card,
  CardHeader,
  CardBody,
  Skeleton,
  Switch,
  Flex,
} from "@/app/common/chakraui/ChakraUI";
import { memo, Suspense, lazy } from "react";

export default memo(function CountWordChartBox({ words }) {
  const CountWordChart = lazy(() => import("../atoms/CountWordChart"));
  return (
    <>
      <Card mb="2">
        <CardHeader>
          <Heading fontSize="md">最近の学習活動</Heading>
        </CardHeader>
        <Flex direction="rouw" alignItems="center" justifyContent="center">
          <p>週</p>
          <Switch />
          <p>月</p>
        </Flex>
        <CardBody>
          <Suspense fallback={<Skeleton height="90%" />}>
            <CountWordChart />
          </Suspense>
        </CardBody>
      </Card>
    </>
  );
});
