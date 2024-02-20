import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../app.js";

describe("API Controller tests", () => {
  it("GET should return 200", async () => {
    const res = await request(app).get("/users");
    expect(res.status).toBe(200);
  });
  it("should return a user by id", async () => {
    const res = await request(app).get("/api/users/1");

    expect(res.body).toEqual([
      {
        id: "1",
        application_id: 0,
        first_name: "Janny",
        last_name: "Doe",
        email: "Jane@Doeeeeeee.org.uk",
        password:
          "$2b$10$RRCXCwBTwF36PrDgNhgSl.EW9a6atbQUvCtATz7iT1gY831EwIyCe",
        phone_number: "07414114152",
        photo_url:
          "https://prod-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
        referral_url:
          "https://prod-img-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
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
