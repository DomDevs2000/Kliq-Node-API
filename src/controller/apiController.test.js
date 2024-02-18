import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../app.js";

describe("API Controller tests", () => {
  it("GET should return 200", async () => {
    const res = await request(app).get("/users");
    expect(res.status).toBe(200);
  });
  it("should return a user by id", async () => {
    const res = await request(app).get("/api/users/id/1");

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
  });
});
