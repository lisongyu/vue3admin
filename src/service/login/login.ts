import hyRequest from "../index"
import { IAccount, IDataType, ILoginResult } from "./type"
enum LoginAPI {
	AccountLogin = "/login",
	LoginUserInfo = "/users/",
	UserMenus = "/role/" // 用法
}
export function accountLoginRequest(account: IAccount) {
	return hyRequest.post<IDataType<ILoginResult>>({
		url: LoginAPI.AccountLogin,
		data: account
	})
}

export function requestUserInfoById(id: number) {
	return hyRequest.get<IDataType>({
		url: LoginAPI.LoginUserInfo + id,
		showLoading: false
	})
}

export function requestUserMenusByRoleId(id: number) {
	return hyRequest.get<IDataType>({
		url: LoginAPI.UserMenus + id + "/menu",
		showLoading: false
	})
}
