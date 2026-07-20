import { useState, useEffect } from "react";
import api from "../services/api";

export default function userHooks() {
    const [user, setUser] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function usersEffect() {
            try {
                const response = await api.get('/users')
                setUser(response.data)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        usersEffect()
    }, [])
    return { loading, user, setUser }
}