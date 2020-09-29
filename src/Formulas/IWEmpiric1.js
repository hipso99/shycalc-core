import { Formula } from './Formula';
import { Gender, Units } from './Constans';

export class IWEmpiric1 extends Formula {
    static MALE_CONSTANT = 23;
    static FEMALE_CONSTANT = 21.5;
     
    calc(params) {
        const {gender, height, unit} = params;
        let genderConstant = this.getConstant(gender);
        let h = height;

        if ( unit === Units.cm )
            h /= 100;

        return Math.pow(h, 2) * genderConstant; 
    }

    getConstant(gender) {
        switch (gender) {
            case Gender.male:
                return MALE_CONSTANT;
            case Gender.female:
                return FEMALE_CONSTANT;
        }
        throw Error(`Invalid gender: ${gender}`);
    }
}