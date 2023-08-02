<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { pb } from '$lib/pocketbase';
</script>

<div class="flex items-center justify-center relative isolate overflow-hidden py-16">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none">
			<div class="w-full max-w-md space-y-8">
				<div>
					<h1 class="text-center text-3xl md:text-3xl xl:text-3xl font-bold tracking-tight">
						Jetzt Einloggen !
					</h1>
				</div>
				<div class="text-sm">
					<p class="mt-2 text-center text-sm text-gray-600">
						Du hast noch kein Account?
						<a href="/register" class="font-medium text-indigo-600 hover:text-indigo-500"
							>Jetzt registrieren.</a
						>
					</p>
				</div>
				<div class="">
					<form
						class="mt-8 space-y-6"
						method="POST"
						use:enhance={() => {
							return async ({ result }) => {
								pb.authStore.loadFromCookie(document.cookie);
								await applyAction(result);
							};
						}}
					>
						<div class="grid grid-cols-1 grid-gap">
							<div>
								<label for="email" class="block text-sm font-semibold leading-6">Email</label>
								<div class="mt-2.5">
									<input
										type="email"
										name="email"
										required
										class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div>
								<label for="password" class="block text-sm font-semibold leading-6">Passwort</label>
								<div class="mt-2.5">
									<input
										type="password"
										name="password"
										required
										class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<button
								class="bg-yellow-300 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
								>Log in</button
							>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
