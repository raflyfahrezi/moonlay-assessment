export interface CardProps {
    title: string
    titleSpan?: string
    description: string
    openDetails?: () => void
    deleteCard?: () => void
}
