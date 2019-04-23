import { Module, Action, Mutation, VuexModule } from 'vuex-module-decorators';
import store from '@/store';

export interface IDefaultState {
	name: string;
	count: number;
}

@Module({ dynamic: true, name: 'default', store, namespaced: true })
export default class Default extends VuexModule implements IDefaultState {
	public name: string = 'Jason';
	public count: number = 0;

	@Action
	public update() {
		this.context.commit('UPDATE');
	}

	@Mutation
	private UPDATE() {
		this.count++;
	}
}
