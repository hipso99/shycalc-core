import { Formula } from './Formula';
import { Gender, Units } from './Constans';

export class IWEmpiric2 extends Formula {
    static MALE_CONSTANT = 20;
    static FEMALE_CONSTANT = 25;
    

    calc({gender, height, unit}) {
        //const {gender, height, unit} = params;
        let genderConstant = this.getConstant(gender);
        let h = height;

        if ( unit === Units.m )
            h *= 100;

        return (h / 2) - genderConstant; 
    }

    getConstant(gender) {
        switch (gender) {
            case Gender.male:
                return IWEmpiric2.MALE_CONSTANT;
            case Gender.female:
                return IWEmpiric2.FEMALE_CONSTANT;
        }
        throw Error(`Invalid gender: ${gender}`);
    }
}