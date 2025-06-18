import { axiosClient } from "@/lib/axios-client"
import { SignupFormTypes } from "@/types/authTypes"
import { useMutation } from "@tanstack/react-query"

// =============================SIGN UP============================= //
const useCreateUser = () => {
    const createUserMutation = useMutation({
        mutationFn: async (data: SignupFormTypes) => {
            return axiosClient.post('/auth/signup/', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        }
    })
    return { createUserMutation }
}

export { useCreateUser }