import { createInstance } from '$lib/pocketbase';
import type { Admin, Record } from 'pocketbase'
import { writable } from 'svelte/store'



export const pb = createInstance()

export const currentUser = writable(pb.authStore.model);
pb.authStore.onChange(() => {
    currentUser.set(pb.authStore.model);
});