class Util {
  baseKey = 'token'
  getSession (name) {
    return window.sessionStorage.getItem(name)
  }
  setSession (key, value) {
    window.sessionStorage.setItem(key, value)
  }
  removeSession (key) {
    window.sessionStorage.removeItem(key)
  }
  getLocal (name) {
    return window.localStorage.getItem(name)
  }
  setLocal (key, value) {
    window.localStorage.setItem(key, value)
  }
  removeLocal (key) {
    window.localStorage.removeItem(key)
  }
  setCookie () {

  }
  getCookie () {

  }
}

export default Util