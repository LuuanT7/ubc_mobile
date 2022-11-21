import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    fuchsia: {
      100:'#fae8ff',
      200:'#f5d0fe',
      300:'#f0abfc',
      400: '#e879f9',
      500:'#d946ef',
      600:'#c026d3',
      700:'#a21caf',
      800:'#86198f',
      900:'#701a75'
    },
    cyan:{
      100: '#cffafe',
      200:'#a5f3fc',
      300:'#67e8f9',
      400:'#22d3ee',
      500:'#06b6d4'
    }
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
    medium: 'Roboto_500Medium'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
  sizes: {
    14: 56
  }
});