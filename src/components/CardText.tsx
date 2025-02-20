import { PropsWithChildren } from "react";

const CardText = ({ children, ...props }: PropsWithChildren<ICardTextProps>) => {

    return (
        <>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            {children}
        </>
    )
}

export default CardText