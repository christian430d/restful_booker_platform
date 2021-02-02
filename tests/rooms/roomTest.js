/*  Description: 
    validate multiple create Room Test
    Validate Delete room test
*/

import { Selector, t } from 'testcafe';
import roomPage from '../../main/page-objects/rooms/roomPage.js' 
import adminPage from '../../main/page-objects/admin/loginPage.js' 


var data;
var path = require('path')
var testfile = path.basename(__filename).split('.')[0]


fixture `Create Room Test`
  .page `${process.env.HomeURL}` 
  .before( async t => {
    data = config.getTestData(__dirname,__filename)
  })

test
(testfile+': Validate Creation and deletion of Rooms Flow', async t =>{

  await t.maximizeWindow()
  await adminPage.adminLogin(data.username, data.password)
  await roomPage.createRoom(data.roomNumber, data.price)
  await roomPage.createRoom(data.roomNumber, data.price)
  await roomPage.createRoom(data.roomNumber, data.price)

  await roomPage.deleteRoom()
  await roomPage.deleteRoom()
  await roomPage.deleteRoom()

});


