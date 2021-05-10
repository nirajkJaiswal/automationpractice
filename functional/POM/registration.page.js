import { BasePage,UserDetails } from "../index";

class RegistrationPage extends BasePage {
  get mrTitle() {
    return $$("#uniform-id_gender1")[0];
  }
  get mrsTitle() {
    return $$("#uniform-id_gender2")[0];
  }
  get firstName() {
    return $$("#customer_firstname")[0];
  }
  get lastName() {
    return $$("#customer_lastname")[0];
  }
  get password() {
    return $$("#passwd")[0];
  }
  get dobDays() {
    return $$("#days")[0];
  }
  get dobMonth() {
    return $$("#months")[0];
  }
  get dobYear() {
    return $$("#years")[0];
  }
  get address1() {
    return $$("#address1")[0];
  }
  get city() {
    return $$("#city")[0];
  }
  get ddState() {
    return $$("#id_state")[0];
  }
  get zipCode() {
    return $$("#postcode")[0];
  }
  get mobile() {
    return $$("#phone_mobile")[0];
  }
  get btnSubmit() {
    return $$("#submitAccount")[0];
  }

  registerUser(title,firstName,lastName,password,day,month,year,address1,city,state,zipCode,country,mobile)
  {
      String(title).toLocaleLowerCase=="mr"? this.mrTitle.click() : this.mrsTitle.click();
      this.firstName.setValue(firstName);
      this.lastName.setValue(lastName);
      this.password.setValue(password);
      this.dobDays.selectByAttribute('value', day);
      this.dobMonth.selectByAttribute('value', month);
      this.dobYear.selectByAttribute('value', year);
      this.address1.setValue(address1);
      this.city.setValue(address1);
      this.state.selectByAttribute('value', state);
      this.zipCode.setValue(zipCode);
      this.country.selectByAttribute('value', country);
      this.mobile.setValue(mobile);
      this.btnSubmit.click();
  }
}
