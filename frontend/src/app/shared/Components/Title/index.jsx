import './Title.css'

export const Title = (props) => {
    return(
        <span>
            <h2>{props.children}</h2>
            <hr />
        </span>
    )
}