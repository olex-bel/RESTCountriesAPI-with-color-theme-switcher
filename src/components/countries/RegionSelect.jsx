
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export default function RegionSelect({ region, onSelect }) {
    const changeReionHandler = (event) => {
        onSelect(event.target.value);
    }

    return (
        <FormControl
            sx={{
                width: {
                    xs: '60%',
                    md: 'auto',
                },
            }}
        >
            <InputLabel id="demo-simple-select-label">Filter by region</InputLabel>
            <Select 
                label="Filter by region" 
                value={region} 
                labelId="demo-simple-select-label" 
                onChange={changeReionHandler} 
                sx={{ 
                    minWidth: {
                        xs: '0px',
                        md: '200px', 
                    },
                }}
            >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="Asia">Asia</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
                <MenuItem value="Africa">Africa</MenuItem>
                <MenuItem value="Oceania">Oceania</MenuItem>
                <MenuItem value="Americas">Americas</MenuItem>
                <MenuItem value="Polar">Polar</MenuItem>
                <MenuItem value="Antarctic Ocean">Antarctic Ocean</MenuItem>
                <MenuItem value="Antarctic">Antarctic</MenuItem>
            </Select>
        </FormControl>
    )
}