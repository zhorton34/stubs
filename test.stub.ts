import { assertEquals } from "jsr:@std/assert";
import { {{ name }} } from "./{{name}}.ts";

Deno.test("{{name}} - test description", () => {
  // Arrange
  const input = "example input";
  const expected = "expected output";

  // Act
  const result = {{ name }
}(input);

// Assert
assertEquals(result, expected);
});

Deno.test("{{name}} - another test description", async () => {
  // Arrange
  const input = "another example";
  const expected = "another expected output";

  // Act
  const result = await {{ name }
}(input);

// Assert
assertEquals(result, expected);
});

// Add more test cases as needed