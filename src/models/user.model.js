class User {
  constructor({
    id,
    application_id,
    first_name,
    last_name,
    email,
    password,
    phone_number,
    photo_url,
    referral_url,
  }) {
    this.id = id;
    this.application_id = application_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
    this.phone_number = phone_number;
    this.photo_url = photo_url;
    this.referral_url = referral_url;
  }

  // Getters
  getId() {
    return this.id;
  }

  getApplicationId() {
    return this.application_id;
  }

  getFirstName() {
    return this.first_name;
  }

  getLastName() {
    return this.last_name;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  getPhoneNumber() {
    return this.phone_number;
  }

  getPhotoUrl() {
    return this.photo_url;
  }

  getReferralUrl() {
    return this.referral_url;
  }
}

export { User };
