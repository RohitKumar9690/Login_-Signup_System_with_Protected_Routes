import axiosPrivate from "../axios/privateAxios";
import { persistor } from "../Redux/store";

const logout = async()=>{
    console.log('Logging out...');
    try {
        const response = await axiosPrivate.get('/api/user/logout');
        console.log('Logout response:', response);
        if (response.status === 200) {
            // Clear the client-side storage (localStorage or sessionStorage)
            localStorage.removeItem('token');  // Clears token from localStorage
            sessionStorage.removeItem('token');  // Optionally, clear sessionStorage as well
            persistor.purge();  // Clear persisted Redux state

        }
    } catch (error) {
        console.log('Logout error:', error);
    }
    console.log('Logout complete.');
}

export {logout}