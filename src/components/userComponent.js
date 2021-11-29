import {
  BaseLogger,
  ElasticLogger,
  MongoLogger,
} from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import Customer from "../models/customer.js";
import Employee from "../models/employee.js";
import UserService from "../services/userService.js";

console.log("User Component Yüklendi");

let logger1 = new MongoLogger();
let userService = new UserService(logger1);

let customer1 = new Customer(
  11,
  "İsim_1",
  "Soyisim_1",
  "Şehir_1",
  11,
  "999999"
);
customer1.type = "customer"; //Prototyping
let employee1 = new Employee(12, "İsim_2", "Soyisim_2", "Şehir_2", 12, 6500);
employee1.type = "employee";

console.log("----------------------");
userService.load();
userService.add(customer1);
userService.add(employee1);
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);
console.log(userService.getCustomersSorted());
