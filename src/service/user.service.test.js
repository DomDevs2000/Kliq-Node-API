import userService from "./user.service.js";
import { describe, expect, it, vi } from "vitest";
import userRepository from "../database/user.repository.js";

vi.mock("../database/user.repository.js", async () => {
  return {
    default: { getAllUsers: vi.fn().mockResolvedValue([]) },
  };
});

describe("User service", () => {
  it("should get all users", async () => {
    const users = await userService.getAllUsers();

    expect(users).toStrictEqual([]);
    expect(userRepository.getAllUsers).toHaveBeenCalledTimes(1);
  });
});
