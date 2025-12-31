import Header from './presentation/components/header/Header';
import { Box } from '@mui/material';
import './App.css';
import AppRoutes from "./routes/AppRoutes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (<>
    <Header/>
     <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    <Box style={{marginTop:54}}> <AppRoutes />
</Box>
</>
  );
}

export default App;
