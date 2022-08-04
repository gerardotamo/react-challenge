import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    console.log(user)
    if (user === null) {
      return navigate("/login", { replace: true });
    }else{
      setUser(JSON.parse(window.localStorage.getItem("user") || '{}'))
    }
    return () => { }
  }, [])

  const [user, setUser] = useState()


  return (
    <div>Home</div>
  )
}

export default Home;