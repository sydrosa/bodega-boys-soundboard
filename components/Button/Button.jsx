import Button from 'semantic-ui-react'

const Button = (props) => {
    return(
        <>
    <Button onClick={props.handleAudio}>
        {props.title}
    </Button>
        </>
    )
}