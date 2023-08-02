<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { pb } from '$lib/pocketbase';
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<div class="flex items-center justify-center relative isolate overflow-hidden py-16">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none">
			<div class="w-full max-w-md space-y-8">
				<div>
					<h1 class="text-center text-3xl md:text-3xl xl:text-3xl font-bold tracking-tight">
						Jetzt Registrieren !
					</h1>
				</div>
				<div class="text-sm">
					<p class="mt-2 text-center text-sm text-gray-600">
						Du hast schon noch ein Account?
						<a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500"
							>Jetzt einloggen.</a
						>
					</p>
				</div>
				<form
					method="POST"
					class="card"
					use:enhance={() => {
						return async ({ result }) => {
							pb.authStore.loadFromCookie(document.cookie);
							await applyAction(result);
						};
					}}
				>
					<div class="grid grid-cols-2 grid-gap">
						<div>
							<label for="firstname" class="block text-sm font-semibold leading-6">Vorname</label>
							<div class="mt-2.5">
								<input
									type="text"
									name="firstname"
									required
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label for="name" class="block text-sm font-semibold leading-6">Nachname</label>
							<div class="mt-2.5">
								<input
									type="text"
									name="name"
									required
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label for="street" class="block text-sm font-semibold leading-6">Straße</label>
							<div class="mt-2.5">
								<input
									type="text"
									name="street"
									required
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label for="streetnumber" class="block text-sm font-semibold leading-6"
								>Hausnummer</label
							>
							<div class="mt-2.5">
								<input
									type="text"
									name="streetnumber"
									required
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label for="city" class="block text-sm font-semibold leading-6">Ort</label>
							<div class="mt-2.5">
								<input
									type="text"
									name="city"
									required
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label for="zipcode" class="block text-sm font-semibold leading-6">Plz</label>
							<div class="mt-2.5">
								<input
									type="text"
									name="zipcode"
									required
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div class="sm:col-span-2">
							<label for="email" class="block text-sm font-semibold leading-6">Email</label>
							<div class="mt-2.5">
								<input
									type="email"
									name="email"
									required
									id="email"
									autocomplete="email"
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label for="last-name" class="block text-sm font-semibold leading-6">Passwort</label>
							<div class="mt-2.5">
								<input
									type="password"
									name="password"
									required
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label for="last-name" class="block text-sm font-semibold leading-6"
								>Passwort wiederholen</label
							>
							<div class="mt-2.5">
								<input
									type="password"
									name="passwordConfirm"
									required
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div class="flex gap-x-4 sm:col-span-2">
							<div class="flex h-6 items-center">
								<input type="checkbox" class="sr-only peer" />
								<span class="sr-only">Agree to policies</span>
								<label class="relative inline-flex items-center cursor-pointer">
									<input required type="checkbox" class="sr-only peer" />
									<div
										class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
									/>
								</label>
							</div>
							<label class="text-sm leading-4 text-gray-600" id="switch-1-label">
								Hiermite bestätige ich, dass ich die Datenschutzerklärung gelesen und akzeptiert
								habe.
								<a href="/privacy" class="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
							</label>
						</div>
						<button class="bg-yellow-300 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
							>Registrieren</button
						>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
