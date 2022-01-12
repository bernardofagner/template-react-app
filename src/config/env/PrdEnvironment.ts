import { EnvironmentNames } from "./EnvironmentNames";
import { IEnvironment } from "./IEnvironment";

class PrdEnvironment implements IEnvironment{
    public readonly ENVIROMNENT_NAME = EnvironmentNames.Production;
}

const instance = new PrdEnvironment();
export {instance as PrdEnvironment };