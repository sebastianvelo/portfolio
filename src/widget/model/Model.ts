import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";

abstract class Model {

    abstract toCard(className?: string): CardPropsBuilder;
}

export default Model;