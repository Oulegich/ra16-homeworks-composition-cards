/// <reference types="vite/client" />

interface ICardProps {
    alt?: string,
    imgSrc?: string,
    className?: string,
    position?: 'top' | 'bottom',
    styleCard?: HTMLAttributes<HTMLDivElement>['style']
}

interface ICardTextProps {
    title: string,
    text: string
}

interface ICardLink {
    link: string,
    text: string
}
