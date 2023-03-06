import { RouterProvider } from "react-router-dom";
import router from './routing/router'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
function App() {
  return (
    <div className="bg-gray-300 h-screen">
     <RouterProvider router={router}> </RouterProvider>
     <ToastContainer />
    </div>
  );
}

export default App;
