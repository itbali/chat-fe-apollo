import {RouterProvider} from "react-router-dom";
import router from "./components/Routes";
import {Guard} from "./components/auth/Guard";

const App = () => (
    <div style={{padding: '24px', width: 'calc(100% - 48px)'}}>
        <Guard>
            <RouterProvider router={router}/>
        </Guard>
    </div>
);

export default App;
