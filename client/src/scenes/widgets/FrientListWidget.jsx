import { Box, Typography, useTheme } from "@mui/material";
import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../../state";
import UserServices from "../../api/UserServices";

const FriendListWidget = ({userId}) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const getFriends = async () => {
    const response = await UserServices.getFriends(userId);
    const data = await response.json();
    dispatch(setFriends({friends:data}));
  };

  useEffect(() => {
    getFriends();
  },[]);

  return (
    <WidgetWrapper>
      <Typography color={palette.neutral.dark} variant="h5" fontWeight="500" sx={{ mb: "1.5rem"}}>
          Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {
          friends.map((friend) => (
            <Friend
              key={friend.id}
              friendId={friend.id}
              name={`${friend.firstName} ${friend.lastName}`}
              subtitle={friend.occupation}
              userPicturePath={friend.picturePath}
            />
          ))
        }
      </Box>
    </WidgetWrapper>
  )
}

export default FriendListWidget;