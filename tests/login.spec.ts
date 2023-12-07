//import { loggedUserFixture } from '../fixtures/fixtures';
import { expect } from '@playwright/test';
import { baseFixture } from '../fixtures/fixtures';

baseFixture('Test 1 - Perform Login', async ({ app }) => {
	await app.loginPage.logIn({
		username: 'standard_user',
		password: 'secret_sauce',
	});
	const cart = await app.inventoryPage.header.getCartButton();
	const headerLabel = await app.inventoryPage.header.getLabelText();
	const products = await app.inventoryPage.getAllProducts();

	await expect(cart).toBeVisible();
	expect(headerLabel).toBe('Products');
	expect(products.length).toBeGreaterThan(1);
});
