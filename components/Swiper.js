import { Carousel } from 'react-responsive-carousel'
import Head from 'next/head'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Box, Heading, Text, Button, Image } from '@chakra-ui/react'
import axios from 'axios'
import { baseURL } from '../axiosConfig'
import Link from 'next/link'

const swiperContainer = css`
  position: relative;
  & > .carousel:last-child {
    position: absolute;
    left: 0;
    bottom: 0;
    & > .thumbs-wrapper .thumbs {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
const CarouselItem = styled.div`
  position: relative;
  & > div {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%);
    color: #fff;
    padding-top: 180px;
    text-align: left;
    width: 100%;
    max-width: 1200px;
    & > p {
      margin: 15px 0;
      font-size: 14px;
      width: 450px;
    }
  }
  & > img {
    filter: brightness(50%);
  }
`
export default function Swiper({ data }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/carousel.min.css" />
      </Head>
      <Carousel
        css={swiperContainer}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
      >
        {data.map(swiper => (
          <CarouselItem key={swiper.id}>
            <Image src={swiper.url} alt="" />
            <Box color="#000">
              <Heading as="h2" size="lg">
                {swiper.title}
              </Heading>
              <Text>{swiper.description}</Text>
              <Button colorScheme="red">
                <Link href={'/detail/[id]'} as={`/detail/${swiper.vid}`}>
                  <a>CHECK DETAIL</a>
                </Link>
              </Button>
            </Box>
          </CarouselItem>
        ))}
      </Carousel>
    </>
  )
}

export function loadSwiper() {
  return axios.get('/api/swiper', {
    baseURL
  })
}
