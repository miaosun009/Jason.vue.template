<template lang="pug">
  div.home
    h1 hello，jason
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
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
