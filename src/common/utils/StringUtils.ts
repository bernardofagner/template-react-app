class StringUtils {

    public static IsEmail(email: string): boolean {
        const regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
        return regex.test(String(email).toLowerCase());
    };
}

const instance = new StringUtils();
export { instance as StringUtils };