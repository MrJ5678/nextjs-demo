// theme/components/button.js

const Button = {
  // sizes: {
  //   small: {
  //     fontSize: '14px',
  //   }
  // }
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 1 // <-- px is short for paddingLeft and paddingRight
    }
  },
  variants: {
    solid: {
      bg: '#202020'
    }
  },
  defaultProps: {
    size: 'sm'
    // variant: 'outline'
  }
}

export default Button
