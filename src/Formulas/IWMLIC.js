import { Formula } from './Formula';
import { Units } from './Constans';

export class IWMLIC extends Formula {
    static CONSTANT = 0.75;
    static START_VALUE = 50;
    

    calc({height, unit}) {
        let h = height
        if ( unit === Units.m )
            h *= 100;

        return IWMLIC.START_VALUE + ( IWMLIC.CONSTANT * (h - 150) ); 
    }
}