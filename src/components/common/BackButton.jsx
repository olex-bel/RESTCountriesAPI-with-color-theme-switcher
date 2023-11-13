
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function BackButton() {
    const navigate = useNavigate();

    return (
        <Button 
                variant="contained" 
                color="background" 
                startIcon={<KeyboardBackspaceIcon />} 
                onClick={() => navigate(-1)}
                sx={{
                    my: 8,
                    px: 4,
                }}
            >
            Back
        </Button>
    )
}