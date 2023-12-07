import { test } from '@playwright/test';
import { Application } from '../app';

export const baseFixture = test.extend<{ app: Application }>({
	app: async ({ page }, use) => {
		const app = new Application(page);
		await app.loginPage.open();
		await use(app);
	},
});

export const loggedUserFixture = baseFixture.extend<
	{ defaultUser: { username: string; password: string } } & { app: Application }
>({
	defaultUser: [
		{
			username: 'standard_user',
			password: 'secret_sauce',
		},
		{ option: true },
	],

	app: async ({ app, defaultUser }, use) => {
		await app.loginPage.open();
		await app.loginPage.logIn(defaultUser);

		await use(app);
	},
});
