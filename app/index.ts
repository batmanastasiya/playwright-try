import { PageHolder } from './abstractClasses';
import { LoginPage } from './page/login.page';
import { InventoryPage } from './page/inventory.page';
import { CartPage } from './page/cart.page';

export class Application extends PageHolder {
	public loginPage = new LoginPage(this.page);
	public inventoryPage = new InventoryPage(this.page);
	public cartPage = new CartPage(this.page);
}
