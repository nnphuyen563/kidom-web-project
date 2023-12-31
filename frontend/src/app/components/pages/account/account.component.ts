import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  selectedTab: string = 'account-general'; // Mặc định là tab 'account-general'
  clickedTab: string = '';

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.clickedTab = tab;
  }
  constructor(private router: Router) {
  }
  
  isAddAddressVisible: boolean = false;

  // Thêm phương thức saveChanges
  saveChanges() {
    // Logic để lưu thay đổi, bạn có thể thực hiện các thao tác cần thiết ở đây
    console.log('Changes saved!');
  }
  toggleNewAddress(){
    this.isAddAddressVisible =! this.isAddAddressVisible;
  }
  showAddressDetail(addressId: number) {
    // Sử dụng router để điều hướng đến trang chi tiết địa chỉ
    this.router.navigate(['/account/address', addressId]);
  }

  //click vào nhập địa chỉ mới thì mới hiện khung
  showNewAddressForm: boolean = false;

  toggleNewAddressForm() {
    this.showNewAddressForm = !this.showNewAddressForm;
  }

  
}
