import Button from './Button';

function ButtonsContainer(){
    const alertAction1 =()=>alert('Button 1 clicked!');
    const alertAction2 =()=>alert('Button 2 clicked!');
    const alertAction3 =()=>alert('Button 3 clicked!');

    return (
        <div>
            <Button action={alertAction1}size="small"theme="light" text="Small Light Button"/>
            <Button action={alertAction2}size="medium"  theme="dark" text="Medium Dark Button"/>
            <Button action={alertAction3}size="large"theme="light" text="Large Light Button"/>
        </div>
    );
}
export default ButtonsContainer;

