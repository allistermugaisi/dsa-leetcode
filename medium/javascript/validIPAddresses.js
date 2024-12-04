// Copyright © 2024 DeveloperWave, LLC. All rights reserved.
// Developer: Allister Mugaisi
// Date: 2024-12-04

// Problem: Valid IP Addresses
// Difficulty: Medium
// Prompt: Write a function that takes in a string and returns a list of all valid IP addresses that can be obtained by inserting periods between the characters of the string.
// An IP address is a sequence of four positive integers that are separated by periods, where each individual integer is within the range of 0 - 255, inclusive.
// An IP address isn't valid if any of the individual integers contains leading zeroes.

// Sample Input: "1921680"

// Time Complexity: O(1)
// Space Complexity: O(1)

function validIPAddresses(string) {
  // Write your code here.
  const ipAddresses = [];
  for (let i = 1; i < Math.min(string.length, 4); i++) {
    const currentIPAddress = ["", "", "", ""];
    currentIPAddress[0] = string.slice(0, i);
    if (!isValid(currentIPAddress[0])) continue;
    for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
      currentIPAddress[1] = string.slice(i, j);
      if (!isValid(currentIPAddress[1])) continue;
      for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
        currentIPAddress[2] = string.slice(j, k);
        currentIPAddress[3] = string.slice(k);
        if (isValid(currentIPAddress[2]) && isValid(currentIPAddress[3])) {
          ipAddresses.push(currentIPAddress.join("."));
        }
      }
    }
  }
  return ipAddresses;
}

function isValid(string) {
  const stringAsInt = parseInt(string);
  if (stringAsInt > 255) return false;
  return string.length === stringAsInt.toString().length;
}

// Test cases
console.log(validIPAddresses("1921680")); // ["192.168.0", "19.216.80", "19.216.8", "192.16.80", "192.16.8"]
// console.log(validIPAddresses("25525511135"));
