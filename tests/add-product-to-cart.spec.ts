import { loggedUserFixture } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

loggedUserFixture('Test 2 - Add product to the cart', async ({ app }) => {
	const addedProduct = await app.inventoryPage.addProductToCart();
	const addedProductsQty = await app.inventoryPage.header.getCartQty();

	expect(addedProductsQty).toBe('1');

	await app.inventoryPage.header.openCart();
	const cartProducts = await app.cartPage.getCartItems();
	const firstCartItemName = await app.cartPage.getFirstCartItemName();

	expect(cartProducts.length).toBe(1);
	expect(firstCartItemName).toBe(addedProduct);

	await app.cartPage.removeFirstCartItem();

	expect(await app.cartPage.getCartItems()).toHaveLength(0);
});
