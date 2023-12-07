import { AppPage } from '../abstractClasses';
import { Header } from '../component/header.component';

export class InventoryPage extends AppPage {
	public pagePath = 'inventory.html';

	public header = new Header(this.page);

	//private sorting = this.page.locator('.product_sort_container');
	private product = this.page.locator('.inventory_item');

	async getAllProducts() {
		return this.product.all();
	}

	async addProductToCart() {
		const products = await this.getAllProducts();
		const filteredProducts = products.filter(async (product) => {
			const addToCartbutton = product.locator('[id^=add-to-cart-]');
			if (addToCartbutton) {
				return product;
			}
		});
		const productName = filteredProducts[0].locator('.inventory_item_name');
		await filteredProducts[0].locator('[id^=add-to-cart-]').click();

		return productName.textContent();
	}
}
