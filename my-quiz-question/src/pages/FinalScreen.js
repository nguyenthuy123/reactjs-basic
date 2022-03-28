import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { handleAmountChange, handleScoreChange } from "../redux/action";

const FinalScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { score } = useSelector(state => state);

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    history.push("/");
  }
  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {score}
      </Typography>
      <Button onClick={handleBackToSettings} variant="outlined">
        back to settings!
      </Button>
    </Box>
  )
}

export default FinalScreen;