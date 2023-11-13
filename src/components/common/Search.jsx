
import { useState, useMemo, useCallback } from "react";
import { TextField } from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { debounce}  from 'lodash';

export default function Search({ onSearch }) {
    const [value, setValue] = useState('')

    const debouncedSearch = useMemo(
        () =>
          debounce(val => {
            onSearch(val)
          }, 750),
        [onSearch]
      )
    
      const handleChange = useCallback(
        (event) => {
          setValue(event.target.value);
          debouncedSearch(event.target.value);
        },
        [debouncedSearch]
      )

    return (
        <TextField 
            variant="outlined" 
            placeholder='Search for a country...' 
            sx={{ 
              minWidth: {
                xs: '0px',
                md: '450px',
              } 
            }}
            value={value}
            onChange={handleChange}
            InputProps={{
                startAdornment: (<SearchOutlinedIcon sx={{mr: 2}} />)
            }}
        />
    )
}
