interface LoginScenariosInterface {
  username: string;
  password: string;
  expectedStatus: string;
  desc: string;
}

export const loginScenarios: LoginScenariosInterface[] = [
  { username: 'John', password: 'pwd', expectedStatus: 'Welcome, John!', desc: 'successfull login' },
  { username: 'John', password: 'wrong', expectedStatus: 'Invalid username/password', desc: 'invalid password' },
  { username: '', password: 'pwd', expectedStatus: 'Invalid username/password', desc: 'empty username' },
  { username: '', password: '', expectedStatus: 'Invalid username/password', desc: 'empty fields' },
];
