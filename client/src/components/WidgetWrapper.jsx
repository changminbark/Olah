import { Box } from "@mui/material";
import { styled } from "@mui/system";
// styled import allows me to use theme.palette

const WidgetWrapper = styled(Box)(({ theme }) => ({
    // TOP RIGHT BOTTOM LEFT (CLOCKWISE)
    padding: "1.5rem 1.5 rem 0.75rem 1.5rem",
    backgroundColor: theme.palette.background.alt,
    borderRadius: "0.75rem"
}));

export default WidgetWrapper;