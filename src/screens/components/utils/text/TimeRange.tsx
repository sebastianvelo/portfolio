
interface TimeRangeProps {
    start: number;
    end?: number;
}

const TimeRange = (props: TimeRangeProps) => {
    const end = props.start === props.end ? "" : `-${props.end ? ` ${props.end}` : " Now"}`
    return (
        <p className="text-lg">
            {props.start} {end}
        </p>
    );
}

export default TimeRange;
