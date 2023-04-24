import {
  Card,
  CardBody,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@/app/common/chakraui/ChakraUI";
import { memo, useMemo } from "react";
import dayjs from "dayjs";
export default memo(function CountWordBox({ words }) {
  const date = useMemo(() => {
    const now = new Date();
    const startYear = dayjs(now).startOf("year").format("YYYY");
    const today = dayjs(now).format("MM/DD");
    const yesterday = dayjs(now).subtract(1, "day").format("MM/D");
    const weekStartDay = dayjs(now).startOf("week").format("MM/D");
    const weekEndDay = dayjs(now).endOf("week").format("MM/D");
    return { today, yesterday, weekStartDay, weekEndDay, startYear };
  }, [words]);
  return (
    <>
      <Card mb="2">
        <CardBody>
          <StatGroup>
            <Stat>
              <StatLabel fontSize="xs">総単語</StatLabel>
              <StatNumber>{Object.keys(words).length}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel fontSize="xs">本日の学習</StatLabel>
              <StatNumber>2</StatNumber>
              <StatHelpText fontSize="xs" color="gray.500">
                {date.today}
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel fontSize="xs">今週の学習</StatLabel>
              <StatNumber>{Object.keys(words).length}</StatNumber>
              <StatHelpText fontSize="xs" color="gray.500">
                {date.weekStartDay} - {date.weekEndDay}
              </StatHelpText>
            </Stat>
          </StatGroup>
        </CardBody>
      </Card>
    </>
  );
});
