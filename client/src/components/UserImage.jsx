import { Box } from "@mui/material";

const UserImage = ( { image, size = "60px" } ) => {
  let imagePath = image ? image : "No-Image.png"
  const urlHost = process.env.REACT_APP_SERVER_HOST+'/assets';

  return (
    <Box width={ size } height={ size }>
      <img
        style={ { objectFit: "cover", borderRadius: "50%" } }
           width={ size }
           height={ size }
           alt="user"
           src={ `${ urlHost }/${imagePath }` }
      />
    </Box>
  )
}

export default UserImage;