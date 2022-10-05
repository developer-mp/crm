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
