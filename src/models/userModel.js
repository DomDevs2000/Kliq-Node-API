import bcrypt from "bcrypt";

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

  async hashPassword() {
    const salt = 10;
    this.password = await bcrypt.hash(this.password, salt);
  }
}

export { User };
