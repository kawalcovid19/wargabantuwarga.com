import { test, expect, Page } from "@playwright/test";

const FAQ_CATEGORIES = [
  { name: "Isoman", urlParam: "Isoman" },
  { name: "Kontak Erat", urlParam: "Kontak%20Erat" },
  { name: "PCR", urlParam: "PCR" },
  { name: "Pasca Isoman", urlParam: "Pasca%20Isoman" },
  { name: "Tanda Bahaya", urlParam: "Tanda%20Bahaya" },
  { name: "Tatalaksana Isoman", urlParam: "Tatalaksana%20Isoman" },
  { name: "Terapi", urlParam: "Terapi" },
  { name: "Umum", urlParam: "Umum" },
  { name: "Vaksinasi", urlParam: "Vaksinasi" },
];

async function waitForFaqPageLoad(page: Page) {
  await page
    .getByRole("combobox", { name: "Kategori Pertanyaan" })
    .waitFor({ state: "visible" });
}

test.describe("FAQ category filtering", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/faq");
    await waitForFaqPageLoad(page);
  });

  for (const category of FAQ_CATEGORIES) {
    test(`filters by ${category.name} category`, async ({ page }) => {
      await page
        .getByRole("combobox", { name: "Kategori Pertanyaan" })
        .selectOption(category.name);

      await expect(page).toHaveURL(
        new RegExp(`kategori_pertanyaan=${category.urlParam}`),
      );
      const badges = page
        .locator("span")
        .filter({ hasText: new RegExp(`^${category.name}$`) });
      await expect(badges.first()).toBeVisible();
    });
  }
});

test.describe("FAQ search", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/faq");
  });

  test("search with keyword 'Isoman' returns results", async ({ page }) => {
    await page
      .getByRole("textbox", { name: /cari pertanyaan/i })
      .fill("Isoman");
    await page
      .getByRole("textbox", { name: /cari pertanyaan/i })
      .press("Enter");

    await expect(page.getByText(/isoman/i).first()).toBeVisible();
    await expect(page).toHaveURL(/\/faq\?q=Isoman/);
  });

  test("search with specific question returns answer", async ({ page }) => {
    const question =
      "Dok apakah saya bisa tertular lagi setelah selesai isoman?";
    await page
      .getByRole("textbox", { name: /cari pertanyaan/i })
      .fill(question);
    await page
      .getByRole("textbox", { name: /cari pertanyaan/i })
      .press("Enter");

    await expect(
      page.getByText(
        "YA. Anda masih bisa tertular apabila tidak menerapkan 5M",
      ),
    ).toBeVisible();
  });

  test("search with invalid keyword shows not found", async ({ page }) => {
    await page
      .getByRole("textbox", { name: /cari pertanyaan/i })
      .fill("qwerty");
    await page
      .getByRole("textbox", { name: /cari pertanyaan/i })
      .press("Enter");

    await expect(page.getByText(/Pertanyaan tidak ditemukan/i)).toBeVisible();
    await expect(page).toHaveURL(/\/faq\?q=qwerty/);
  });
});
