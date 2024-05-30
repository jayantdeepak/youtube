import { createContext, useState } from "react";

// Create a context for managing video data
const AllVideoContext = createContext([]);

export function AllVideoContextProvider({ children }) {
    // State to hold all video data
    const [allVideoData, setAllVideoData] = useState([]);

    return (
        <AllVideoContext.Provider value={{ allVideoData, setAllVideoData }}>
            {children}
        </AllVideoContext.Provider>
    );
}

export default AllVideoContext;