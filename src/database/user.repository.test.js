import mysql from "mysql2/promise";
import sinon from "sinon";
import { describe, it, afterEach, expect } from "vitest";
const connection = await mysql.createConnection({
  host: "localhost",
  user: "joinkliq",
  password: "joinkliq",
  database: "joinkliq_users",
});
var database = sinon.stub(connection);
describe("Database Tests", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should test sql query", async () => {
    await database.query("SELECT * FROM users");
    sinon.assert.calledOnce(database.query);
  });
  it("should test  id query", async () => {
    const sql = await database.query("SELECT * FROM users WHERE id = ?", [1]);
    // sinon.assert.calledOnce(sql);
  });
});
