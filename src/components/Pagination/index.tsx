import { Box, Stack, Text } from "@chakra-ui/react";
import PaginationItem from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export default function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  onPageChange,
  currentPage = 1,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPage =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>5</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCount && <PaginationItem number={1} />}

        {previousPage.length > 0 &&
          previousPage.map((page) => {
            return (
              <>
                <PaginationItem key={page} number={page} />
                {currentPage > 2 + siblingsCount && (
                  <Text color="gray.300" width="6" textAlign="center">
                    ...
                  </Text>
                )}
              </>
            );
          })}

        <PaginationItem number={currentPage} isCurrent />
        {nextPage.length > 0 &&
          nextPage.map((page) => {
            return <PaginationItem key={page} number={page} />;
          })}

        {currentPage + siblingsCount < lastPage && (
          <PaginationItem number={lastPage} />
        )}

        {previousPage.length < lastPage &&
          previousPage.map((page) => {
            return (
              <>
                {currentPage + 1 + siblingsCount < lastPage && (
                  <Text color="gray.300" width="6" textAlign="center">
                    ...
                  </Text>
                )}
                <PaginationItem key={page} number={page} />
              </>
            );
          })}
      </Stack>
    </Stack>
  );
}
