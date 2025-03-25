import { FlippableCardSideProps } from "./FlippableCard";

const FlippableCardBack = (props: FlippableCardSideProps) => {
  return (
    <div
      className="absolute inset-0 w-full h-full backface-hidden rotate-y-180"
      style={{ transform: "rotateY(180deg)" }}
    >
      <div className="w-full h-full rounded-xl overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20 shadow-xl p-6 flex flex-col justify-between">
        {props.children}
      </div>
    </div>
  );
};

export default FlippableCardBack;
