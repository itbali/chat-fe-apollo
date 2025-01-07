import {RouterProvider} from "react-router-dom";
import router from "./components/Routes";

const App = () => (
    <div style={{padding: '24px', width: 'calc(100% - 48px)'}}>
        <RouterProvider router={router}/>
    </div>
);

export default App;
