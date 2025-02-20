const CardLink = (props: ICardLink) => {
    return (
        <a href={props.link} className="btn btn-primary">{props.text}</a>
    )
}

export default CardLink