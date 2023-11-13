
import { Stack, Typography } from "@mui/material"

export default function DetailItem({ description, value }) {
    return (
        <Stack direction="row" gap={1}>
            <Typography sx={
                {
                    fontWeight: 600,
                }
            }>
                {description}:
            </Typography>
            <Typography>{value}</Typography>
        </Stack>
    )
}