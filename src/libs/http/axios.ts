import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export default class HttpRequet {
	private readonly baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	public getInsideConfig() {
		return {
			baseURL: this.baseUrl,
			headers: {},
			params: {}
		} as AxiosRequestConfig;
	}

	public interceptors(instance: AxiosInstance) {
		instance.interceptors.request.use((value: AxiosRequestConfig) => value, error => Promise.reject(error));
		instance.interceptors.response.use((res: AxiosResponse) => res, error => Promise.reject(error));
	}

	public request(options: AxiosRequestConfig) {
		const instance = axios.create();
		options = Object.assign(this.getInsideConfig(), options);
		this.interceptors(instance);
		return instance(options);
	}
}
