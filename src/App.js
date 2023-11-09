
import { createBrowserRouter } from "react-router-dom";
import Task1 from './tasks/task1/Task1'

const App = createBrowserRouter([
  {
    path: '/',
    element: <Task1 />
  }
])

export default App;
