import {
  Card,
  CardHeader,
  Heading,
  Divider,
  CardBody,
} from "@/app/common/chakraui/ChakraUI";
import { memo } from "react";

export default memo(function DashboardDammy(params) {
  return (
    <>
      {Array(10)
        .fill(1)
        .map((_, index) => (
          <Card key={index} mb="2">
            <CardHeader>
              <Heading>Dashboard</Heading>
              <Divider w="full" />
            </CardHeader>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                distinctio sequi tempora! Distinctio exercitationem, explicabo
                animi expedita debitis modi repudiandae dicta similique
                praesentium doloremque mollitia repellendus amet officiis
                laboriosam sit.
              </p>
            </CardBody>
          </Card>
        ))}
    </>
  );
});
