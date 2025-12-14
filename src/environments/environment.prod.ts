import {EnvironmentInterface} from './environments-interface/environment.interface';

export const environment: EnvironmentInterface = {
  production: true,
  apiUrl: '{API_URL}',
  firebase: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  }
}
