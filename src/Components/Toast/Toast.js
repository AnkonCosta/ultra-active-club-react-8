import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast() {
    const notify = () => toast("Congratulations, your activity is now complete.");

    return (
        <div>
            <button onClick={notify}>Activities Completed!</button>
            <ToastContainer />
        </div>
    );
}
export default Toast;