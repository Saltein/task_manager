import {authorisationAPI} from './APIs/authorisationAPI';
import {registrationApi} from './APIs/registrationAPI';
import {taskApi} from './APIs/taskAPI';

export const APIs = {...authorisationAPI,
                     ...registrationApi,
                     ...taskApi}
