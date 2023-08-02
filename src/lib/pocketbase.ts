import { PUBLIC_POCKETBASE_URL } from '$env/static/public'
import PocketBase from 'pocketbase'
import { writable } from 'svelte/store';

export function createInstance() {
  return new PocketBase(PUBLIC_POCKETBASE_URL)
}

export const pb = createInstance()

export const currentUser = writable(pb.authStore.model);
pb.authStore.onChange(() => {
    currentUser.set(pb.authStore.model);
});