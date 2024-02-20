import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../app.js";

describe("API Controller tests", () => {
  it("should 400 error if bad  id param request", async () => {
    const res = await request(app).get("/api/users/e");
    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      errors: [
        {
          type: "field",
          value: "e",
          msg: "Invalid ID",
          path: "id",
          location: "params",
        },
      ],
    });
  });
});
