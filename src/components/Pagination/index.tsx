import { Box, Text, Stack } from "@chakra-ui/react";
import ButtonActive from "./ButtonActive";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number, 
  onPageChange: (page: number | any) => void; 
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from )]
    .map((_, index) => {
    return from + index + 1; 
    })
    .filter(page => page > 0);
}

export default function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10, 
  currentPage = 1, 
  onPageChange
}: PaginationProps) {
  
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);   
  
  const previousPages = currentPage > 1                                     
  ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
  : [];

  const nextPages = currentPage < lastPage
  ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
  : [];


  
  return (
    <Stack spacing={'6'} mt='8' direction={['column', 'row']} justify={'space-between'} align='center'>
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong> usuários
      </Box>
      <Stack direction={'row'} spacing={'2'}>
        {currentPage > (1 + siblingsCount) && (
          <>
            <ButtonActive onPageChange={onPageChange} number = {1}/>
            {currentPage > (2 + siblingsCount) && <Text align={"center"} width="8">...</Text>}
          </>
        )}
        {previousPages.length > 0 && previousPages.map((page) => {
          return <ButtonActive  onPageChange={onPageChange} key={page} number={page}  />
        }) }

        <ButtonActive onPageChange={onPageChange} number={currentPage} isCurrent />

      {nextPages.length > 0 && nextPages.map(page => {
        return <ButtonActive  onPageChange={onPageChange}key={page} number={page}/>
      })}

      {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 +  siblingsCount) < lastPage && <Text align={"center"} width="8">...</Text>}
            <ButtonActive   onPageChange={onPageChange}number = {lastPage}/>
          </>
        )}
      </Stack>
    </Stack>
  )
}