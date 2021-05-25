export class Messages {
    static NO_DATA = "No data to display";
    static EXCEPTION_WHEN(action:string) {
        return "An error occurred when " + action;
    }
}