import {Heading} from '../common/chakraui/ChakraUI'

export default function Home({params}) {
  return <Heading color='red' fontSize='3rem'>{params.name}</Heading>
};
