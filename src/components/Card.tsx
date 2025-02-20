import { PropsWithChildren } from "react"

const Card = ({ children, ...props }: PropsWithChildren<ICardProps>) => {

    const {imgSrc, className, position, styleCard, alt} = props;

    return (
        <div className="card mb-4" style={styleCard}>
            {position == 'top' ? <img src={imgSrc} className={className + position} alt={alt}></img> : null}
            <div className="card-body">
                {children}
            </div>
            {position == 'bottom' ? <img src={imgSrc} className={className + position} alt={alt}></img> : null}
        </div>
    )
}

export default Card