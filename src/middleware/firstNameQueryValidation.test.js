import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../app.js";
describe("create user validation request", () => {
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
