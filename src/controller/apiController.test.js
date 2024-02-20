import request from "supertest";
import { describe, expect, it, vi } from "vitest";
import { app } from "../app.js";
vi.mock("../database/user.repository.js", async () => {
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
    const res = await request(app).get("/users");
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
      email: "Jo@Doe.org.uk",
      password: "testpass",
      phone_number: null,
      photo_url:
        "https://prod-img-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
      referral_url: null,
    };

    const res = await request(app).post("/users").send(newUser);
    expect(res.status).toBe(200);
  });

  it("PUT /users/:id should update a user by id", async () => {
    const res = await request(app).put("/users/13").send({
      first_name: "Jane",
    });
    expect(res.status).toBe(200);
  });
  it("DELETE /users/:id should delete a user by id", async () => {
    const res = await request(app).delete(
      "/users/0ecc5e07-e10b-4fd1-a005-b3c27aeea720",
    );
    expect(res.status).toBe(200);
  });
});
