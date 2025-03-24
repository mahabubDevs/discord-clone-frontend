import { styled, Typography } from '@mui/material'
import React from 'react'


interface RedirectInfoProps {
    text: string;
    additionalStyles?: React.CSSProperties;
    redirectText: string;
    redirectHandler: () => void;
}


const RedirectText = styled('span')({
    color: "#00AFF4",
    fontWeight: 500,
    cursor: "pointer",
})

const RedirectInfo: React.FC<RedirectInfoProps> = ({
    text,
    additionalStyles,
    redirectText,
    redirectHandler
}) => {
  return (
      <Typography
          sx={{ color: "#72767d" }}
          style={additionalStyles ? additionalStyles : {}}
            variant="subtitle2"
      >
          {text}
          <RedirectText onClick={redirectHandler}>
              {redirectText}
          </RedirectText>
    </Typography>
  )
}

export default RedirectInfo


