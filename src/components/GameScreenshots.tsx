import useGameScreenshots from '../hooks/useGameScreenshots'
import { Image, SimpleGrid } from '@chakra-ui/react'

interface Props{
    gameId : number
}

const GameScreenshots = ({gameId} : Props) => {
    const {data,isLoading,error} = useGameScreenshots(gameId)
    console.log(data)

    if(isLoading) return null
    if(error) throw error

  return (
    <SimpleGrid spacing={2} columns={{base : 1, md : 2}}>
      {data?.results.map(file => <Image key={file.id} src={file.image}></Image>)}
    </SimpleGrid>
  )
}

export default GameScreenshots