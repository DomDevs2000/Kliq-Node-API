import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../src/app";

describe("Test the server", () => {
  it("should return 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});
