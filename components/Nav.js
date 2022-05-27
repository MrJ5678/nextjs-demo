import { Box, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import { css } from '@emotion/react'

const nav = css`
  display: flex;
  align-items: center;
  justify-content: center;
  & > a {
    padding: 0 5px;
  }
`

export default function Nav() {
  return (
    <Box h="52px" bgColor="#202020">
      <HStack h="52px" spacing="3" justifyContent="center" alignItems="center">
        <Link href="#">
          <a>影片</a>
        </Link>
        <Link href="#">
          <a>漫画</a>
        </Link>
        <Link href="#">
          <a>电影</a>
        </Link>
        <Link href="#">
          <a>电视</a>
        </Link>
        <Link href="#">
          <a>新闻</a>
        </Link>
      </HStack>
    </Box>
  )
}
