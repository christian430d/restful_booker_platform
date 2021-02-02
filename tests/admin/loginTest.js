/*  Description: 
    validate Admin Login Flow
    Validate Admin Logout Flow
*/

import { Selector, t } from 'testcafe';
import adminPage from '../../main/page-objects/admin/loginPage.js' 


var data;
var path = require('path')
var testfile = path.basename(__filename).split('.')[0]


fixture `Admin Login Test`
  .page `${process.env.HomeURL}` 
  .before( async t => {
    data = config.getTestData(__dirname,__filename)
  })

test
(testfile+': Validate Admin Login Flow', async t =>{

  await t.maximizeWindow()
  
  await adminPage.adminLogin(data.username,data.password)
  await adminPage.adminLogout()

});


