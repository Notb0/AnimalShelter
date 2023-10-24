import TasksDesktop from "./TasksDesktop";
import TasksMobile from "./TasksMobile";
import { useMediaQuery } from 'react-responsive'


function Tasks() {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return isMobile === true? <TasksMobile/> : <TasksDesktop/>;
}

export default Tasks