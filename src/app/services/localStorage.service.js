const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expires";
const CUSTOMERID_KEY = "customer-local-id";

export function setTokens({
    refreshToken,
    idToken,
    localId,
    expiresIn = 3600
}) {
    const expiresDate = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem(CUSTOMERID_KEY, localId);
    localStorage.setItem(TOKEN_KEY, idToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.setItem(EXPIRES_KEY, expiresDate);
}

export function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function getRefreshToken() {
    return localStorage.getItem(REFRESH_KEY);
}

export function getTokenExpiresDate() {
    return localStorage.getItem(EXPIRES_KEY);
}

export function getCustomerId() {
    return localStorage.getItem(CUSTOMERID_KEY);
}

const localStorageService = {
    setTokens,
    getAccessToken,
    getRefreshToken,
    getTokenExpiresDate,
    getCustomerId
};

export default localStorageService;
