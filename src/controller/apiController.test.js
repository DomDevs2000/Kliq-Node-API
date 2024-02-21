import request from "supertest";
import { describe, expect, it, vi } from "vitest";
import { app } from "../app.js";

vi.mock("../database/userRepository.js", async () => {
  const user = {
    id: 1,
    application_id: null,
    first_name: "Tech",
    last_name: "Support",
    email: "info@remotecoach.fit",
    password: "$2y$10$n3293NxnekVK1Sry/OO.f.gc9WvvbwZ2IcOELjIkjfeKns2GREpAO",
    phone_number: null,
    photo_url:
      "https://prod-img-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
    referral_url: null,
  };
  return {
    default: {
      getAllUsers: vi.fn().mockResolvedValue([user]),
      findUserById: vi.fn().mockResolvedValue([user]),
      findUserByFirstName: vi.fn().mockResolvedValue([user]),
      findUserByLastName: vi.fn().mockResolvedValue([user]),
      findUserByBothNames: vi.fn().mockResolvedValue([user]),
      createUser: vi.fn().mockResolvedValue([]),
      updateUser: vi.fn().mockResolvedValue([]),
      deleteUser: vi.fn().mockResolvedValue([]),
    },
  };
});

describe("API Controller tests", () => {
  it("GET should return 200", async () => {
    const res = await request(app).get("/api/users");
    expect(res.status).toBe(200);
  });

  it("should return a user by id", async () => {
    const res = await request(app).get("/api/users/1");

    expect(res.body).toEqual([
      {
        id: 1,
        application_id: null,
        first_name: "Tech",
        last_name: "Support",
        email: "info@remotecoach.fit",
        password:
          "$2y$10$n3293NxnekVK1Sry/OO.f.gc9WvvbwZ2IcOELjIkjfeKns2GREpAO",
        phone_number: null,
        photo_url:
          "https://prod-img-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
        referral_url: null,
      },
    ]);
    expect(res.status).toBe(200);
  });

  it("POST /users should create a new user", async () => {
    const newUser = {
      application_id: "2000",
      first_name: "Jane",
      last_name: "Doe",
      email: "Joe@Doe.org.uk",
      password: "testpass",
      phone_number: "07414114152",
      photo_url:
        "https://prod-img-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
      referral_url:
        "https://prod-img-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
    };

    const res = await request(app).post("/api/users").send(newUser);

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "User Created" });
  });

  it("PUT /users/:id should update a user by id", async () => {
    const res = await request(app).put("/api/users/13").send({
      application_id: 2024,
      first_name: "Jane",
      last_name: "Doe",
      email: "Jane@Doe.com",
      password: "$2y$10$n329VK1Sry/OO.f.gc9WvvbwZ2IcOELjIkjfeKns2GREpAO",
      phone_number: "07111111111",
      photo_url:
        "https://prod-img-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
      referral_url:
        "https://prod-img-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
    });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "User with id " + 13 + " updated" });
  });

  it("DELETE /users/:id should delete a user by id", async () => {
    const res = await request(app).delete(
      "/users/0ecc5e07-e10b-4fd1-a005-b3c27aeea720",
    );
    expect(res.status).toBe(200);
  });
});

describe("create user validation request", () => {
  it("should return 400 if  create user request with missing first name", async () => {
    const user = {
      application_id: 0,
      // Missing first_name
      last_name: "Doe",
      email: "Jane@Doeeee.org.uk",
      password: "$2b$10$RRCXCwBTwF36PrDgNhgSl.EW9a6atbQUvCtATz7iT1gY831EwIyCe",
      phone_number: "07414114152",
      photo_url:
        "https://prod-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
      referral_url:
        "https://prod-img-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
    };
    const res = await request(app).post("/api/users").send(user);
    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      errors: [
        {
          type: "field",
          msg: "First name is required",
          path: "first_name",
          location: "body",
        },
      ],
    });
  });

  it("should return 400 error if create user request with missing last name", async () => {
    const user = {
      application_id: 0,
      first_name: "Janny",
      // missing last name
      email: "Jane@Doeeeeeeeeeeeee.org.uk",
      password: "$2b$10$RRCXCwBTwF36PrDgNhgSl.EW9a6atbQUvCtATz7iT1gY831EwIyCe",
      phone_number: "07414114152",
      photo_url:
        "https://prod-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
      referral_url:
        "https://prod-img-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
    };
    const res = await request(app).post("/api/users").send(user);

    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      errors: [
        {
          type: "field",
          msg: "Last name is required",
          path: "last_name",
          location: "body",
        },
      ],
    });
  });
});

describe("first name query string validation test", () => {
  it("should 400 error if empty query string", async () => {
    const res = await request(app).get("/api/users?first_name=");

    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      errors: [
        {
          type: "field",
          value: "",
          msg: "First name is required",
          path: "first_name",
          location: "query",
        },
      ],
    });
  });
});

describe("last name query string validation test", () => {
  it("should 400 error if empty query string", async () => {
    const res = await request(app).get("/api/users?last_name=");

    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      errors: [
        {
          type: "field",
          value: "",
          msg: "Last name is required",
          path: "last_name",
          location: "query",
        },
      ],
    });
  });
});

describe("Update user validation request", () => {
  it("should 400 error if bad update user request with missing first name", async () => {
    const user = {
      application_id: 0,
      // Missing first_name
      last_name: "Doe",
      email: "Jane@Doeeee.org.uk",
      password: "$2b$10$RRCXCwBTwF36PrDgNhgSl.EW9a6atbQUvCtATz7iT1gY831EwIyCe",
      phone_number: "07414114152",
      photo_url:
        "https://prod-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
      referral_url:
        "https://prod-img-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
    };

    const res = await request(app).put("/api/users/1").send(user);

    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      errors: [
        {
          type: "field",
          msg: "First name is required",
          path: "first_name",
          location: "body",
        },
      ],
    });
  });

  it("should 400 error if bad update user request with missing last name", async () => {
    const user = {
      application_id: 0,
      first_name: "Janny",
      // missing last name
      email: "Jane@Doeeeeeeeeeeeee.org.uk",
      password: "$2b$10$RRCXCwBTwF36PrDgNhgSl.EW9a6atbQUvCtATz7iT1gY831EwIyCe",
      phone_number: "07414114152",
      photo_url:
        "https://prod-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
      referral_url:
        "https://prod-img-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
    };

    const res = await request(app).put("/api/users/1").send(user);

    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      errors: [
        {
          type: "field",
          msg: "Last name is required",
          path: "last_name",
          location: "body",
        },
      ],
    });
  });
});
