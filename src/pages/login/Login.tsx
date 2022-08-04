import { useState } from 'react'
import { View } from './loginStyled';
import { TextField, CircularProgress, Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { AccountCircle } from '@mui/icons-material';

const Login = () => {

  const [email, setEmail] = useState<string>('');
  const [helperText, setHelperText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleLogin = async () => {
    
  }

  function isValidEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }

  return (
    <View>
      <h1>Welcome</h1>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '20px', color: 'white' }}>
        <AccountCircle sx={{ color: 'white', mr: 1, my: 0.5 }} />
        <TextField
          label="Email"
          variant="standard"
          inputMode='email'
          sx={{
            input: { color: 'white' },
            '& label.Mui-focused': {
              color: 'white',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: 'white',
            },
            "& label": {
              color: 'white'
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'yellow',
              },
            }
          }}
          required
          value={email}
          onChange={handleChange}
          error={error}
          helperText={error ? helperText : ""}
        />

      </Box>
      <LoadingButton
        onClick={handleLogin}
        loading={loading}
        variant="contained"
        style={{
          background: loading ? "#C69433" : "#C69433",
          color: loading ? "white" : 'white',
          width: '17%', height: "40px",
          minWidth: '20%'
        }}
        size="large"
        loadingIndicator={
          <CircularProgress size={15} style={{ color: 'white' }} />
        }

      >
        {loading ? "" : "Login"}
      </LoadingButton>
    </View>
  )
}

export default Login;