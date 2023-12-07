import { AppPage } from '../abstractClasses';

export class LoginPage extends AppPage {
	public pagePath = '';

	private loginButton = this.page.locator('#login-button');
	private usernameInput = this.page.getByPlaceholder('Username');
	private passwordInput = this.page.getByPlaceholder('Password');

	async logIn(user: { username: string; password: string }) {
		await this.usernameInput.fill(user.username);
		await this.passwordInput.fill(user.password);
		await this.loginButton.click();
	}
}
