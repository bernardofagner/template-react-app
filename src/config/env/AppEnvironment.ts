import { DevEnvironment } from "./DevEnvironment";
import { HomEnvironment } from "./HomEnvironment";
import { IEnvironment } from "./IEnvironment";
import { LocalEnvironment } from "./LocalEnvironment";
import { PrdEnvironment } from "./PrdEnvironment";

class AppEnvironment {

    public GetEnvironmentVariable(): IEnvironment {

        const hostName = window.location.hostname;

        if(hostName.startsWith('rpgPlataform.dev')) {
            return DevEnvironment;
        }

        if(hostName.startsWith('rpgPlataform.hom')) {
            return HomEnvironment;
        }

        if(hostName.startsWith('rpgPlataform')) {
            return PrdEnvironment;
        }

        return LocalEnvironment;
    }

}

const instance = new AppEnvironment();
export { instance as AppEnvironment };