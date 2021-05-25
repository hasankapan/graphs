export class Helper {

    static nullOrUndefined(something: any) {
        return (something == null || something == undefined) ? true : false;
    }

    static nullOfUndefinedPromise(something: any): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            try {
                if (something == null || something == undefined) {
                    resolve(true)
                } else resolve(false)
            } catch (exception) {
                reject(exception)
            }
        });
    }
}