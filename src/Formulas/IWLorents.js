import { Formula } from './Formula';
import { Gender, Units } from './Constans';

export class IWLorents extends Formula {
    static MALE_CONSTANT = 0.75;
    static FEMALE_CONSTANT = 0.675;
    static MALE_OFFSET_VALUE = 62.5;
    static FEMALE_OFFSET_VALUE = 56.25;
    

    calc({gender, height, unit}) {
        const { genderConstant, genderOffsetValue }  = this.getConstants(gender);
        let h = height;

        if ( unit === Units.m )
            h *= 100;

        return genderConstant * h - genderOffsetValue; 
    }

    getConstants(gender) {
        switch (gender) {
            case Gender.male:
                return { genderConstant: IWLorents.MALE_CONSTANT, genderOffsetValue: IWLorents.MALE_OFFSET_VALUE };
            case Gender.female:
                return { genderConstant: IWLorents.FEMALE_CONSTANT, genderOffsetValue: IWLorents.FEMALE_OFFSET_VALUE };
        }
        throw Error(`Invalid gender: ${gender}`);
    }
}