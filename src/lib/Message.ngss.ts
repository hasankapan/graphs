export class Messages {
    static NO_DATA = "No data to display";
    static EXCEPTION_WHEN(action:string) {
        return "An error occurred when " + action;
    }
    static EXCEPTION_WHEN_AND_CAUSE(action:string, cause:string) {
        return "An error occurred when " + action + " cause : " + cause;
    }
}