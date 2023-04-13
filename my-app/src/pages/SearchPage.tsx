import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import 'typeface-roboto';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lato',
      'sans-serif'
    ].join(','),
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

interface Props {
  queryString?: string;
}

const SearchPage: React.FC <Props> = ({queryString}) => {
  const [searchTerm, setSearchTerm] = useState(queryString!);
  const navigate = useNavigate();


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      navigate(`/results/${searchTerm}`);
    }
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
          <Typography
            variant="h3"
            align="center"
            style={{ fontWeight: 'bold', fontFamily: 'roboto' }}
          >
          Semantic Search
        </Typography>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <TextField
          id="outlined-basic"
          type="search"
          value={searchTerm}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          sx={{
            width: 600,
            '& .MuiOutlinedInput-root': {
              borderRadius: 16,
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon/>
              </InputAdornment>
            )
          }}
        />
      </Container>
      </ThemeProvider>
    </div>
  );
};

export default SearchPage;