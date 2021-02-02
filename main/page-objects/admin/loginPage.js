import { Selector, t } from 'testcafe';

class LoginPage{
	constructor(){
        this.username_tb = Selector('#username')
        this.password_tb = Selector('#password')
        this.login_btn = Selector('#doLogin')
        this.logout_lnk = Selector('a').withText('Logout')
        this.letMeHack_btn = Selector('button').withText('Let me hack!')
	}

	async adminLogin(username, password){
        await t
            .click(this.letMeHack_btn)
            .typeText(this.username_tb, username)
            .typeText(this.password_tb, password)
            .click(this.login_btn)	
            .expect(this.logout_lnk.exists).ok('Admin Login is not successful')
    }
    
    async adminLogout(){
        await t
            .click(this.logout_lnk)
            .expect(this.username_tb.exists).ok('Admin Lofout is not successful')
    }
}
export default new LoginPage();