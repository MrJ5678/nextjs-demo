import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import { MdMovie } from 'react-icons/md'
import { baseURL } from '../axiosConfig'

export default function Movie({ data, title }) {
  return (
    <Box maxW={'1200px'} mx="auto" mt="20px" color="#000">
      <HStack fontSize="24px">
        <MdMovie />
        <Heading as="h3" fontSize="24px">
          {title}
        </Heading>
      </HStack>
      <HStack mt="20px" spacing="20px">
        {data.map(movie => (
          <Box width="290px" key={movie.id}>
            <Image src={movie.url} alt="img" />
            <Text mt="10px">{movie.title}</Text>
          </Box>
        ))}
      </HStack>
    </Box>
  )
}

export function loadMovie() {
  return axios.get('/api/movies', {
    baseURL
  })
}
