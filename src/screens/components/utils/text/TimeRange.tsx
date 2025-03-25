
interface TimeRangeProps {
    start: number;
    end?: number;
}

const TimeRange = (props: TimeRangeProps) => (
    <p className="text-lg">
        {props.start} -{props.end ? ` ${props.end}` : " Now"}
    </p>
);

export default TimeRange;
