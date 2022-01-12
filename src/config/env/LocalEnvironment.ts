import { EnvironmentNames } from "./EnvironmentNames";
import { IEnvironment } from "./IEnvironment";

class LocalEnvironment implements IEnvironment{
    public readonly ENVIROMNENT_NAME = EnvironmentNames.Local;
}

const instance = new LocalEnvironment();
export {instance as LocalEnvironment };