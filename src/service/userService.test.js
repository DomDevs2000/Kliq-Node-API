import { describe, expect, it, vi } from "vitest";
import userRepository from "../database/userRepository.js";
import userService from "./userService.js";
import { User } from "../models/userModel.js";

vi.mock("../database/userRepository.js", async () => {
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

  it("should get a user by both names", async () => {
    const users = await userService.findUserByName({
      first_name: "Tech",
      last_name: "Support",
    });
    expect(users.length).toBe(1);
    expect(users[0]).toBeInstanceOf(User);
    expect(userRepository.findUserByBothNames).toHaveBeenCalledTimes(1);
  });
  it("should create a user", async () => {
    const newUser = {
      application_id: 2020,
      first_name: "John",
      last_name: "Doe",
      email: "info@johndoe.com",
      password: "$2y$10$n3293NxnekVK1Sry/OO.f.gc9WvvbwZ2IcOELjIkjfeKns2GREpAO",
      phone_number: null,
      photo_url:
        "https://prod-img-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
      referral_url: null,
    };
    await userService.createUser(newUser);
    expect(userRepository.createUser).toHaveBeenCalledTimes(1);
  });

  it("should update a user", async () => {
    const updatedUser = new User({
      id: 1,
      application_id: 2020,
      first_name: "Jane",
      last_name: "Doe",
      email: "info@janedoe.com",
      password: "$2y$10$n3293NxnekVK1Sry/OO.f.gc9WvvbwZ2IcOELjIkjfeKns2GREpAO",
      phone_number: null,
      photo_url:
        "https://prod-img-cdn.remotecoach.fit/assets/86a13ad1-5404-43ed-b3cf-e35f9663c871/image_picker_E51BD2CE-EBE7-4E29-AF38-FCC808EF0E10-745-000000384888B683.png",
      referral_url: null,
    });
    await userService.updateUser(1, updatedUser);
    expect(userRepository.updateUser).toHaveBeenCalledTimes(1);
  });

  it("should delete a user", async () => {
    await userService.deleteUser(1);
    expect(userRepository.deleteUser).toHaveBeenCalledTimes(1);
  });
});
