import Layout from '../../components/Layout'
import { Box, Heading, Divider, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import axios from 'axios'
import { baseURL } from '../../axiosConfig'

const DetailContainer = css`
  padding: 10px 0;
  & > p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  & > img {
    margin-bottom: 10px;
    display: block;
  }
`

export default function Detail({ detail }) {
  return (
    <Layout>
      <Box maxW="1200px" mx="auto" mt="70px" color="#000">
        <Heading as="h2" size="xl">
          {detail.title}
        </Heading>
        <Heading
          mt={'10'}
          as="h4"
          size="lg"
          color="gray.500"
          fontWeight={'light'}
        >
          {detail.subtitle}
        </Heading>
        <Divider mt={'10px'} />
        <Box overflow={'hidden'} mt={'10px'}>
          <Text float={'left'}>作者: {detail.author}</Text>
          <Text float={'right'}>发布时间: {detail.publish}</Text>
        </Box>
        <Divider mt={'10px'} />
        <Box
          css={DetailContainer}
          dangerouslySetInnerHTML={{ __html: detail.content }}
        ></Box>
      </Box>
    </Layout>
  )
}

export async function getStaticPaths() {
  let { data } = await axios.get('/api/videos', { baseURL })
  let paths = data.map(id => ({ params: { id } }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  let id = params.id
  let { data: detail } = await axios.get('/api/detail', {
    baseURL,
    params: {
      id
    }
  })
  return {
    props: {
      detail
    }
  }
}
