import { describe, expect, it, vi } from "vitest";
import userRepository from "../database/user.repository.js";
import userService from "./user.service.js";
import { User } from "../models/user.model.js";

vi.mock("../database/user.repository.js", async () => {
  return {
    default: {
      getAllUsers: vi.fn().mockResolvedValue([
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
      ]),
      findUserById: vi.fn().mockResolvedValue([
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
      ]),
      findUserByFirstName: vi.fn().mockResolvedValue([
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
      ]),
      findUserByLastName: vi.fn().mockResolvedValue([
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
      ]),
    },
  };
});

describe("User service", () => {
  it("should get all users", async () => {
    const users = await userService.getAllUsers();

    expect(users.length).toBe(1);
    expect(users[0]).toBeInstanceOf(User);
    expect(userRepository.getAllUsers).toHaveBeenCalledTimes(1);
  });
  it("should get a user by id", async () => {
    const users = await userService.findUserById(1);
    expect(users.length).toBe(1);
    expect(users[0]).toBeInstanceOf(User);
    expect(userRepository.findUserById).toHaveBeenCalledTimes(1);
  });
  it("should get a user by first  name", async () => {
    const users = await userService.findUserByName({ first_name: "Tech" });
    expect(users.length).toBe(1);
    expect(users[0]).toBeInstanceOf(User);
    expect(userRepository.findUserByFirstName).toHaveBeenCalledTimes(1);
  });
  it("should get a user by last  name", async () => {
    const users = await userService.findUserByName({ last_name: "Support" });
    expect(users.length).toBe(1);
    expect(users[0]).toBeInstanceOf(User);
    expect(userRepository.findUserByFirstName).toHaveBeenCalledTimes(1);
  });
});
