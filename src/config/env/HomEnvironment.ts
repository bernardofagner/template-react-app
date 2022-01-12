import { EnvironmentNames } from "./EnvironmentNames";
import { IEnvironment } from "./IEnvironment";

class HomEnvironment implements IEnvironment{
    public readonly ENVIROMNENT_NAME = EnvironmentNames.Homologation;
}

const instance = new HomEnvironment();

export {instance as HomEnvironment };