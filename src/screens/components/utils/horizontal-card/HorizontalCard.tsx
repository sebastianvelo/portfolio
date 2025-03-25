import Card, { CardProps } from "../card/Card";

export interface HorizontalCardProps extends CardProps { }

const HorizontalCard = (props: HorizontalCardProps) => {
    return (
        <Card color={props.color}>
            <div className="p-4 flex flex-col justify-between w-full h-full">
                {props.children}
            </div>
        </Card>
    );
};

export default HorizontalCard;
