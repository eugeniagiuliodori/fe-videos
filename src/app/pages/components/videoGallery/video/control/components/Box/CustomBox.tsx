import { Tokens, activeTheme} from "@/types/tokens"
import { Box, BoxProps } from "@mui/material"


export const TokenBox = ({

  ...props
}) => {

  const tokens = activeTheme.tokens;

  return (
    <Box
      {...props}
      sx={{
        borderRadius:tokens.defaultSmallComponent.borderRadius??undefined
      }}
    />
  )
}