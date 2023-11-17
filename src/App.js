
import { createBrowserRouter } from "react-router-dom";
import Task1 from './tasks/task1/Task1'
import Todo from "./tasks/task2/Todo";

const App = createBrowserRouter([
  {
    path: '/',
    element: (<div>Hello</div>)
  },
  {
    path: '/task1',
    element: <Task1 />
  },
  {
    path: '/task2',
    element: <Todo />
  }
])

export default App;
