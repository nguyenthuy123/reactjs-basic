import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import { call, fork,put,take } from "redux-saga/effects";
import { authActions, LoginPayload } from "./authSlice";


function* handleLogin(payload: LoginPayload) {
    console.log('Handle login', payload);
    localStorage.setItem('access_token', 'fake_token');
    yield put(
        authActions.loginSuccess({
            id: 1,
            name: 'Eassy Frontend',
        })
    );
    // redirect to admin page
    yield put(push('/admin'));
}

function* handleLogout() {
    console.log('Handle logout');
    localStorage.removeItem('access_token');

    yield put(push('/login'));
}

function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = Boolean(localStorage.getItem('access_token'));
        if (!isLoggedIn) {
            const action:PayloadAction<LoginPayload> = yield take(authActions.login.type);
            yield fork(handleLogin, action.payload)
        }

        yield take(authActions.logout.type);
        yield call(handleLogout);
    }
}

export default function* authSaga() {
    yield fork(watchLoginFlow);
}