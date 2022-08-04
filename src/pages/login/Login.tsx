import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { View } from './loginStyled';
import { TextField, CircularProgress, Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { AccountCircle } from '@mui/icons-material';
import { getAllUsers } from '../../services/users.service';
import { login } from '../../services/auth.service';
import User from '../../interface/user';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getAllDataUsers = async () => {
      const data = await getAllUsers();
      if (data !== undefined) {
        setUsers(data);
      }
    }

    getAllDataUsers()
  })

  const [users, setUsers] = useState<User[]>();
  const [email, setEmail] = useState<string>('');
  const [helperText, setHelperText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleLogin = async () => {
    if (!isValidEmail(email)) {
      setHelperText('Email is invalid');
      setError(true);
      return;
    }
    setError(false);
    setHelperText('');
    let resp;
    if (users === undefined) {
      const data = await getAllUsers();
      resp = await login(email, data);
    } else {
      resp = await login(email, users);
    }
    setLoading(false);
    if (resp === undefined) {
      setHelperText('Email is not register');
      setError(true);
      return;
    }
    navigate("/", { replace: true })
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