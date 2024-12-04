# Copyright © 2024 DeveloperWave, LLC. All rights reserved.
# Developer: Allister Mugaisi
# Date: 2024-12-04

# Time complexity: O(1) where n is the length of the string
# Space complexity: O(1) where 1 is the length of the string


def validIPAddresses(string):
    # Write your code here.
    if len(string) < 4 or len(string) > 12:
        return []
    result = []
    for i in range(1, min(len(string), 4)):
        for j in range(i + 1, min(i + 4, len(string))):
            for k in range(j + 1, min(j + 4, len(string))):
                first = string[:i]
                second = string[i:j]
                third = string[j:k]
                fourth = string[k:]
                if (
                    isValid(first)
                    and isValid(second)
                    and isValid(third)
                    and isValid(fourth)
                ):
                    result.append(f"{first}.{second}.{third}.{fourth}")
    return result


def isValid(string):
    if len(string) > 1 and string[0] == "0":
        return False
    if int(string) > 255:
        return False
    return True


# Test cases
print(
    validIPAddresses("1921680")
)  # ["192.168.0", "19.216.80", "19.216.8", "192.16.80", "192.16.8"]
