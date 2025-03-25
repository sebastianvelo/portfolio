import { FlippableCardSideProps } from "./FlippableCard";

const FlippableCardFront = (props: FlippableCardSideProps) => {
  return (
    <div
      className="absolute inset-0 w-full h-full backface-hidden"
      style={{ transform: "rotateY(0deg)" }}
    >
      <div className="w-full h-full rounded-xl overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
        {props.children}
      </div>
    </div>
  );
};

export default FlippableCardFront;
