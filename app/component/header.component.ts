import { Component } from '../abstractClasses';

export class Header extends Component {
	private cartButton = this.page.locator('.shopping_cart_link');
	private cartBadge = this.page.locator('.shopping_cart_badge');
	private menuButton = this.page.getByRole('button', { name: 'Open Menu' });
	private subHeaderLabel = this.page.locator(
		'.header_secondary_container .title',
	);
	// async expectLoaded(message = 'Expected Header to be loaded'): Promise<void> {
	// 	await expect(this.cartButton, message).toBeVisible();
	// 	await expect(this.subHeaderLabel, message).toBeVisible();
	// }

	async openCart() {
		await this.cartButton.click();
	}
	async openMenu() {
		await this.menuButton.click();
	}
	async getCartQty() {
		return await this.cartBadge.innerText();
	}
	async getLabelText() {
		return await this.subHeaderLabel.innerText();
	}
	async getCartButton() {
		return this.cartButton;
	}
}
