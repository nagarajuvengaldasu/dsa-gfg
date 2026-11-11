class Solution {
  // Station code = shortest unique prefix of city name that isn't reserved yet.
  // When a city gets a code, all its prefixes become reserved (e.g. "delhi" → "d" reserves d, de, del, delh, delhi).
  // This method is called with the array of city names `arr` and its size `n`.
  check(arr, n) {
    // Map to keep track of how many times each city name has appeared so far.
    const cityCount = new Map();
    // Set to store all codes / prefixes that are already taken and cannot be reused.
    const usedCodes = new Set();

    // Helper function: mark all prefixes of the given string as used.
    const addAllPrefixes = (str) => {
      // Iterate over every possible prefix length from 1 up to the full string length.
      for (let len = 1; len <= str.length; len++) {
        // Insert the prefix str[0..len-1] into the set of used codes.
        usedCodes.add(str.substring(0, len));
      }
    };

    // Process each city name in the order they are given.
    for (let i = 0; i < n; i++) {
      // Current city name at index i.
      const city = arr[i];
      // Increment the count for this city in the map (defaulting to 0 on first occurrence).
      cityCount.set(city, (cityCount.get(city) || 0) + 1);
      // Retrieve the updated count for this city.
      const count = cityCount.get(city);

      // If this city has already appeared before (i.e., this is the 2nd, 3rd, ... occurrence).
      if (count > 1) {
        // Print "city count" as the station code (e.g., "jammu 2").
        console.log(city + " " + count);
        // Mark this exact string as used so it is not reused as another station code.
        usedCodes.add(city + " " + count);
        // Skip searching for a prefix for this duplicate city.
        continue;
      }

      // For the first occurrence of a city, try to find a smallest unique prefix.
      let foundUnique = false;
      // Try all possible prefixes from length 1 to the full length of the city name.
      for (let len = 1; len <= city.length; len++) {
        // Extract the current prefix of length `len`.
        const prefix = city.substring(0, len);
        // If this prefix has not been used yet, we can use it as the station code.
        if (!usedCodes.has(prefix)) {
          // Print this prefix as the station code.
          console.log(prefix);
          // Reserve all prefixes of this city so that future cities cannot reuse them.
          addAllPrefixes(city);
          // Mark that we successfully found a unique prefix.
          foundUnique = true;
          // Stop checking longer prefixes since we already have the shortest one.
          break;
        }
      }

      // If we were unable to find any unused prefix for this first occurrence.
      if (!foundUnique) {
        // Fall back to using "city count" (here `count` will be 1) as the station code.
        console.log(city + " " + count);
        // Mark this full string as used so it doesn't get reused.
        usedCodes.add(city + " " + count);
      }
    }
  }
}

// -------- Local test driver code below (not part of the GFG submission) --------
// Create an instance of the Solution class.
let sol = new Solution();
// Example input array of city names from the problem statement.
let arr = ["shimla", "safari", "jammu", "delhi", "jammu", "dehradun"];
// Number of city names.
let n = arr.length;
// Call the check method to print the corresponding station codes.
sol.check(arr, n);
