import { extendTheme } from '@chakra-ui/react'
import Button from './components/button'

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      'html, body': {
        height: '100%',
        fontSize: 'sm',
        color: '#fff'
      }
      // body: {
      //   height: '100%',
      //   fontSize: 'sm'
      // }
    }
  },
  components: {
    Button
  }
})

export default theme
