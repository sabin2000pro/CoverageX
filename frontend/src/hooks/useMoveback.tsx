import { useNavigate } from "react-router-dom"

const useMoveback = () => {
    const navigate = useNavigate();
    const moveBack = navigate(-1);
    
    return {moveBack}
}


export default useMoveback