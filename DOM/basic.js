/*

- Cookies: Small pieces of data stored by the browser and sent along with requests to the same server. Useful for persistent data that needs to be included with HTTP requests.

- Session Storage: Part of the Web Storage API, providing a way to store data for one session. The data is cleared when the tab or window is closed.

- Local Storage: Also part of the Web Storage API, similar to session storage but persists even when the browser is closed and reopened.


Usage:-

1) Cookies:
- Set and retrieve using document.cookie.
- Cookies are included with every HTTP request, making them useful for session management, user tracking, etc.
- Cookies have properties like expiration dates and paths that further refine how they are stored and sent.

2) Local Storage:
- Data persists even when the browser is closed and reopened.
- Use localStorage.setItem and localStorage.getItem to store and retrieve data.
- No expiration date; data stays until it is explicitly removed.

3) Session Storage:
- Data is cleared when the page session ends (when the tab is closed).
- Use sessionStorage.setItem and sessionStorage.getItem for storing and retrieving.
- Useful for data that should not persist between sessions, such as sensitive application state information.

*/

// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    // document.cookie = user = value 22/01/2024; path=/
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    console.log('Cookie set:', document.cookie);
}

// Function to get a cookie
function getCookie(name) {
    // let nameEQ = name + "=";
    // let ca = document.cookie.split(';');
    // for(let i=0; i < ca.length; i++) {
    //     let c = ca[i];
    //     while (c.charAt(0)==' ') c = c.substring(1,c.length);
    //     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    // }
    // return null;
    console.log('Cookie get:', document.cookie);
}

// Function to set data in local storage
function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
    console.log('Local Storage set:', key, value);
}

// Function to get data from local storage
function getLocalStorage(key) {
    console.log('Local Storage:', key, localStorage.getItem(key));
}

// Function to set data in session storage
function setSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
    console.log('Session Storage set:', key, value);
}

// Function to get data from session storage
function getSessionStorage(key) {
    console.log('Session Storage:', key, sessionStorage.getItem(key));
}


