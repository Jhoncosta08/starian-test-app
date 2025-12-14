export interface EnvironmentInterface {
  production: boolean;
  apiUrl: string;
  firebase: FirebaseConfigInterface;
}

export interface FirebaseConfigInterface {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}
