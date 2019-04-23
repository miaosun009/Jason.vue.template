<template lang="pug">
    div.home
        h1(@click="handleClick") hello，{{name}}{{count}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Default from '@/store/modules/Default';
import { getModule } from 'vuex-module-decorators';

@Component
export default class Home extends Vue {
	public module = getModule(Default);

	get name() {
		return this.module.name;
	}

	get count() {
		return this.module.count !== 0 ? `-${this.module.count}` : '';
	}

	public handleClick() {
		this.module.update();
	}
}
</script>

<style lang="scss">
.home {
	height: inherit;
	width: inherit;
	display: flex;
	justify-items: center;
	align-items: center;

	h1 {
		flex: auto;
	}
}
</style>
