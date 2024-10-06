import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { UserSchema } from '../../../common/src/index'

// export interface UserType {
//     name: string;
//     email: string;
//     password: string;
//     phone: string;
//     domain: 'TRANSPORT' | 'REAL_ESTATE';
//     role?: 'TRUCKER' | 'CONSIGNER';
//     commissionEarned: number;
//     totalReferred: number;
//     createadAt: Date
// }

interface AuthContextType {
    isAuthenticated: boolean;
    user: UserSchema | null;
    login: (token: string) => void;
    logout: () => void;
    fetchUserDetails: (token: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 2. Create an AuthProvider component
type AuthProviderProps = {
    children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const [user, setUser] = useState<UserSchema | null>(null);
    const navigate = useNavigate();

    const fetchUserDetails = async (token: string) => {

        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const fetchedDetails = response.data.user;
            setUser(fetchedDetails);
            if (fetchedDetails.role) {
                navigate('/transport/dash');
            } else {
                navigate('/transport/register');
            }

        } catch (error) {
            console.error('Error fetching user details:', error);
            logout();
        }
    };

    const login = async (token: string) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        await fetchUserDetails(token);
    };

    // On initial load, rehydrate user data from localStorage if token exists
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            fetchUserDetails(token);
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null);
        navigate('/transport/signin'); // Redirect to login page after logout
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user, fetchUserDetails }}>
            {children}
        </AuthContext.Provider>
    );
};


//create a custom hook
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};