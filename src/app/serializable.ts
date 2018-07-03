export class Serializable {

    constructor( ) { }

    populateFromJSON(json: string) {
        const jsonObj = JSON.parse(json);
        // tslint:disable-next-line:forin
        for (const propName in jsonObj) {
            // if (this.hasOwnProperty(propName)) {
            const camelCased = this.underscoreToCamelCased(propName);
            this[camelCased] = jsonObj[propName];
            // }
        }
    }

    underscoreToCamelCased(input: string): string {
        const toUpper = (i: string) => i[1].toUpperCase();
        return input.replace(/_([a-z])/g, toUpper);
    }
}
