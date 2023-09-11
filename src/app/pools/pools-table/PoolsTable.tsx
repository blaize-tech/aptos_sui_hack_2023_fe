import { TableContainer, Table, Tbody, Flex } from "@chakra-ui/react";
import PoolsTableRow from "./PoolsTableRow";

const PoolsTable: React.FC = () => {
  return (
    <TableContainer>
      <Table variant="unstyled" w="1080px" h="600px">
        <Tbody>
          <PoolsTableRow />
          <PoolsTableRow />
          <PoolsTableRow />
          <PoolsTableRow />
          <PoolsTableRow />
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PoolsTable;
