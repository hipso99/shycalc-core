//const imc = require('./imc');
import * as imc from './imc';
import { IWEmpiric1 } from './Formulas/IWEmpiric1';
import { IWEmpiric2 } from './Formulas/IWEmpiric2';
import { IWRobinson } from './Formulas/IWRobinson'
import { IWLorents } from './Formulas/IWLorents'
import { IWMLIC } from './Formulas/IWMLIC'

export {
    imc,
    IWEmpiric1,
    IWEmpiric2,
    IWRobinson,
    IWLorents,
    IWMLIC
}