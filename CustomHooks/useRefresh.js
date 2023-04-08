import { useState } from 'react';
import useWebSocketData from "./useWsData";

function useRefresh() {
    const [refreshCount, setRefreshCount] = useState(0);

    function refresh() {
        setRefreshCount(refreshCount + 1);
    }

    return { refresh, refreshCount };
}
export default useRefresh;