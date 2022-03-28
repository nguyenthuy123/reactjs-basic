CLick LOGIN
- Call API to login
- Sucess -> redirect ADMIN
- Failed -> show Error

LOGIN
LOGOUT

authSlice: định nghĩa ra action và reducer
authSaga: xử lý effect

LOPP
- if logged in, watch LOGOUT
- else watch LOGIN

LOGIN
- call login API to get token + user info
- set token to local storage
- redirect to admin page

LOGOUT
- clear token from local storage
- redirect to login page
