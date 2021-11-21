export interface IAccount {
	name: string
	password: string
}

export interface ILoginResult {
	id: number
	name: string
	token: string
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IDataType<T = any> {
	code: number
	data: T
}
