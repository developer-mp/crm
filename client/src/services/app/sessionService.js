const localStorage = window.localStorage;

class SessionService {
  static storeToken(token) {
    localStorage.token = token;
  }

  static getToken() {
    return localStorage.token;
  }
}

export default SessionService;

// const localStorage = window.localStorage;

// class SessionService {
//   static storeToken(token, expirationTime, firstName, lastName, email, role) {
//     localStorage.token = token;
//     localStorage.expirationTime = expirationTime;
//     localStorage.firstName = firstName;
//     localStorage.lastName = lastName;
//     localStorage.email = email;
//     localStorage.role = role;
//   }

//   static isTokenExpired() {
//     return (
//       localStorage.expirationTime &&
//       localStorage.expirationTime < Date.now() / 1000
//     );
//   }

//   static getFirstName() {
//     return localStorage.firstName;
//   }

//   static getLastName() {
//     return localStorage.lastName;
//   }

//   static getEmail() {
//     return localStorage.email;
//   }

//   static getToken() {
//     return localStorage.token;
//   }

//   static removeToken() {
//     delete localStorage.token;
//     delete localStorage.expirationTime;
//     delete localStorage.firstName;
//     delete localStorage.lastName;
//     delete localStorage.email;
//     delete localStorage.role;
//   }

//   static setAsExpired() {
//     localStorage.expirationTime = 0;
//   }

//   static updateExpiration(newTime) {
//     localStorage.expirationTime = newTime;
//   }

//   static setPasswordChanged(value) {
//     localStorage.isPasswordChanged = value;
//   }

//   static getPasswordChanged() {
//     return localStorage.isPasswordChanged;
//   }

//   static setTemporaryPasswordSent(value) {
//     localStorage.temporaryPasswordSent = value;
//   }

//   static getTemporaryPasswordSent() {
//     return localStorage.temporaryPasswordSent;
//   }

//   static setSecurityQuestionsUpdated(value) {
//     localStorage.securityQuestionsUpdated = value;
//   }

//   static getSecurityQuestionsUpdated() {
//     return localStorage.securityQuestionsUpdated;
//   }
// }

// export default SessionService;
