import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../app.js";

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
