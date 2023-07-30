import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Protected: React.FC = ({children}: any) => {
    const navigate = useNavigate();

    const isUserLoggedIn = () => {
        const authToken = localStorage.getItem('authToken');
        return authToken !== null;
    }

    useEffect(() => {
        if(!isUserLoggedIn) {
            navigate('/')
        }

    }, [navigate])

  return <>{children}</>
}

export default Protected