import { Box } from "@mui/material";

const UserImage = ( { image, size = "60px" } ) => {
  let imagePath = image ? image : "No-Image.png"

  return (
    <Box width={ size } height={ size }>
      <img
        style={ { objectFit: "cover", borderRadius: "50%" } }
           width={ size }
           height={ size }
           alt="user"
           src={ `http://localhost:3001/assets/${ imagePath }` }
      />
    </Box>
  )
}

export default UserImage;