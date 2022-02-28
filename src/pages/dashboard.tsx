import { Box, Flex, SimpleGrid, Text, theme} from "@chakra-ui/react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const Options = {
  
  chart:{
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false, 
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show:false
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false
  }, 
  xaxis: {
    type: 'datetime',
    categories: [
      '2022-01-18T00:00:00.000Z',
      '2022-01-19T00:00:00.000Z',
      '2022-01-20T00:00:00.000Z',
      '2022-01-21T00:00:00.000Z',
      '2022-01-22T00:00:00.000Z',
      '2022-01-23T00:00:00.000Z',
      '2022-01-24T00:00:00.000Z',
    ],
    
  }
  
}
const series = [
  {name: 'series1', data: [31, 120, 259, 82, 44, 98, 22]}
]


export default function Dashboard(){
  return(
   <Flex flexDir={'column'} h='100vh'>
     <Header/>

     <Flex maxW={1480} w='100%' my='6' mx='auto' px='6'>
       <Sidebar/>
       <SimpleGrid flex='1' gap={"4"} minChildWidth={'320px'} alignItems='flex-start'>
          <Box p='8' bg={"gray.800"} borderRadius="8">
              <Text font-size= 'lg'fontWeight={'medium'} mb='4'>Inscritos da Semana</Text>
              {/*@ts-ignore */}
              <Chart type="area" height={160} options={Options} series={series}/>
          </Box>
          <Box p='8' bg={"gray.800"} borderRadius="8">
              <Text font-size= 'lg'fontWeight={'medium'} mb='4'>Taxa de abertura</Text>
              {/*@ts-ignore */}
              <Chart type="area" height={160} options={Options} series={series}/>
          </Box>




       </SimpleGrid>
     </Flex>
   </Flex> 
  )
}