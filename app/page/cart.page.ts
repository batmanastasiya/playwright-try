import { AppPage } from '../abstractClasses';
import { Header } from '../component/header.component';

export class CartPage extends AppPage {
	public pagePath = 'cart.html';

	public header = new Header(this.page);

	private cartItem = this.page.locator('.cart_item');

	async getCartItems() {
		return this.cartItem.all();
	}

	async getFirstCartItem() {
		const cartItems = await this.getCartItems();

		return cartItems[0];
	}

	async getFirstCartItemName() {
		const cartItem = await this.getFirstCartItem();

		return cartItem.locator('.inventory_item_name').textContent();
	}

	async removeFirstCartItem() {
		const cartItem = await this.getFirstCartItem();
		const removeButton = cartItem.locator('[id^=remove-]');
		await removeButton.click();
	}
}
