import { useState, useEffect } from "react"

const useFetchPolicies = () => {
    const [policies, setPolicies] = useState([]);
    const [isPoliciesLoading, setIsPoliciesLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchPoliciesList = async () => {
            try {

            } 
            
            catch(error) {

            }
        }

        fetchPoliciesList();

        return () => { // Clean-up function

        }

    }, [])

    return {policies, isPoliciesLoading, error};
}

export default useFetchPolicies