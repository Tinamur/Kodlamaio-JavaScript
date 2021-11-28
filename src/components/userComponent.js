import {
  BaseLogger,
  ElasticLogger,
  MongoLogger,
} from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("User Component Yüklendi");

let logger1 = new MongoLogger();
let userService = new UserService(logger1);

let user1 = new User(1, "İsim_1", "Soyisim_1", "Şehir_1");
let user2 = new User(2, "İsim_2", "Soyisim_2", "Şehir_2");

userService.add(user1);
userService.add(user2);
console.log(userService.list());
console.log(userService.getById(2));
