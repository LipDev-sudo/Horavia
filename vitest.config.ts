import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Os testes de acessibilidade em tests/e2e rodam com o Playwright, não com o Vitest.
    exclude: [...configDefaults.exclude, "tests/e2e/**"],
  },
});
