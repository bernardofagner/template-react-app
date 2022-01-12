import { EnvironmentNames } from "./EnvironmentNames";
import { IEnvironment } from "./IEnvironment";

class DevEnvironment implements IEnvironment{
    public readonly ENVIROMNENT_NAME = EnvironmentNames.Development;
}

const instance = new DevEnvironment();
export {instance as DevEnvironment };