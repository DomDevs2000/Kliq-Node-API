class User {
  constructor(
    id,
    applicationId,
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    photoUrl,
    referralUrl,
  ) {
    this.id = id;
    this.applicationId = applicationId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.photoUrl = photoUrl;
    this.referralUrl = referralUrl;
  }

  // Getters
  getId() {
    return this.id;
  }

  getApplicationId() {
    return this.applicationId;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  getPhoneNumber() {
    return this.phoneNumber;
  }

  getPhotoUrl() {
    return this.photoUrl;
  }

  getReferralUrl() {
    return this.referralUrl;
  }
}

export { User };
