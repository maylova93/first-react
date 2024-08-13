import Greeting from './Greeting'

function ParentComponent(){
    return(
        <div>
            <Greeting name="Makka" />  
            <Greeting name="Laura" />
            <Greeting name="Maja" />
        </div>
    );
}

export default ParentComponent;