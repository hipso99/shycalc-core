import { Formula } from './Formula';
import { Gender, Units } from './Constans';

export class IWRobinson extends Formula {
    static MALE_CONSTANT = 1.85;
    static FEMALE_CONSTANT = 1.65;
    static MALE_START_VALUE = 51.65;
    static FEMALE_START_VALUE = 48.67;
    

    calc({gender, height, unit}) {
        const { genderConstant, genderStartValue }  = this.getConstants(gender);
        let h = height;

        if ( unit === Units.m )
            h *= 100;

        return genderStartValue + ( genderConstant * ( h / 2.54 - 60) ); 
    }

    getConstants(gender) {
        switch (gender) {
            case Gender.male:
                return { genderConstant: IWRobinson.MALE_CONSTANT, genderStartValue: IWRobinson.MALE_START_VALUE };
            case Gender.female:
                return { genderConstant: IWRobinson.FEMALE_CONSTANT, genderStartValue: IWRobinson.FEMALE_START_VALUE };
        }
        throw Error(`Invalid gender: ${gender}`);
    }
}