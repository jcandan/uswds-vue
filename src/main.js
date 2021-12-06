import Logger from './utils/Logger';
import 'bootstrap';

/*
import UsForm from './components/form/UsForm';
import UsFormInput from './components/form/UsFormInput';
import UsFormInputMasked from './components/form/UsFormInputMasked';
import UsFormTextarea from './components/form/UsFormTextarea';
import UsFormGroup from './components/form/UsFormGroup';
import UsFormCombobox from './components/form/UsFormCombobox';
import UsFormDate from './components/form/UsFormDate';
//import UsFormDateRange from './components/form/UsFormDateRange';
//import UsFormDatePicker from './components/form/UsFormDatePicker';
import UsFormRadio from './components/form/UsFormRadio';
import UsFormBoolean from './components/form/UsFormBoolean';
import UsFormCheckbox from './components/form/UsFormCheckbox';

import UsStepIndicator from './components/form/UsStepIndicator';

import UsButtonGroup from './components/UsButtonGroup';
//import UsButtonGroup from './components/UsButtonGroup';
import UsImg from './components/UsImg';
import UsTab from './components/tabs/UsTab';
import UsTabs from './components/tabs/UsTabs';
import UsListGroup from './components/lists/UsListGroup';
import UsListGroupItem from './components/lists/UsListGroupItem';

*/

// Debug components
//import UsResponsiveInfo from './components/debug/UsResponsiveInfo';

import UsContainer from './components/layout/UsContainer';
import UsRow from './components/layout/UsRow';
import UsCol from './components/layout/UsCol';
import UsAlert from './components/UsAlert';
import UsButton from './components/UsButton';
import UsProgress from './components/UsProgress';
import UsBadge from './components/UsBadge';
import UsSideNav from './components/side-nav/UsSideNav';
import UsOfficialHeader from './components/header/UsOfficialHeader';
import UsCard from './components/cards/UsCard';

import UsHeader from './components/header/UsHeader';
import UsFooter from './components/UsFooter';
import UsNavItem from './components/header/UsNavItem';
import UsHeaderNav from './components/header/UsHeaderNav';
import UsHeaderBrand from './components/header/UsHeaderBrand';

import UsTable from './components/UsTable';
import UsModal from './components/UsModal';

export const Components = {
    UsOfficialHeader,
    UsCard,
    UsHeader, 
    UsFooter, 
    UsNavItem,
    UsHeaderNav,
    UsHeaderBrand,
    UsContainer,
    UsRow,
    UsCol,
    UsAlert,
    UsButton,
    UsProgress,
    UsBadge,
    'UsTag': UsBadge,
    UsSideNav,
    UsTable,
    UsModal
};

/**
 * Install function to enable global install;
 * import { UswdsVue } from 'uswds-vue';
 * Vue.use(UswdsVue);
 *
 * @param {*} Vue
 * @param {*} config
 */
const UswdsVue = {
    install(Vue, config = {}) {

        Vue.use(Logger);

        Object.keys(Components).forEach((name) => {
            //console.log(`Installing component ${Components[name]}`)
            Vue.component(name, Components[name]);
        });
    }
};

export { UswdsVue };

// Export utils
//import Validator from './utils/Validator';
//export {Validator}

