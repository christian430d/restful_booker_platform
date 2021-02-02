import { Selector, t } from "testcafe";

class RoomPage {
  constructor() {
    this.roomNumber_tb = Selector("#roomNumber");
    this.type_dd = Selector("#type");
    this.accessible_dd = Selector("#accessible");
    this.roomPrice_tb = Selector("#roomPrice");
    this.wifi_cb = Selector("#wifiCheckbox");
    this.create_btn = Selector("#createRoom");
  }

  async createRoom(roomNumber, price) {
    await t
      .typeText(this.roomNumber_tb, roomNumber)
      .click(this.type_dd)
      .pressKey("down enter")
      .click(this.accessible_dd)
      .pressKey("down enter")
      .typeText(this.roomPrice_tb, price)
      .click(this.wifi_cb)
      .click(this.create_btn);
  }

  async deleteRoom() {
    await t.click(Selector(".roomDelete").nth(0));
  }
}
export default new RoomPage();
