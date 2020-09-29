/**
 * Simple base formula class.
 * 
 * By: Alejandro Cardenas.
 */
export class Formula {
    
    /**
     * Apply the formula, return numeric value only.
     * @param {object} params Object with properties needed to apply formula
     */
    calc(params){
        throw new Error("No implemented");
    }

    /**
     * Indicates if the formula has a description for its value.
     */
    hasDescription() {
        return false;
    }

    /**
     * Returns a description for the value returned by the formula.
     * @param {number} value Value returned by this fomula
     */
    description(value) {
        if (this.hasDescription()) {
            throw new Error("No implemented");
        }
        return undefined;
    }


}