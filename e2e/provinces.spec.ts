import { test, expect, Page } from "@playwright/test";

const CATEGORIES = [
  { name: "Ambulans", urlParam: "Ambulans" },
  { name: "Bantuan kebutuhan pokok", urlParam: "Bantuan%20kebutuhan%20pokok" },
  { name: "Donor plasma", urlParam: "Donor%20plasma" },
  { name: "Kontak penting", urlParam: "Kontak%20penting" },
  { name: "Oksigen", urlParam: "Oksigen" },
  { name: "Pemakaman", urlParam: "Pemakaman" },
  { name: "Rumah sakit", urlParam: "Rumah%20sakit" },
  { name: "Tempat isolasi mandiri", urlParam: "Tempat%20isolasi%20mandiri" },
  { name: "Tempat vaksin", urlParam: "Tempat%20vaksin" },
  { name: "Tes swab", urlParam: "Tes%20swab" },
];

async function waitForProvinceDetailLoad(page: Page) {
  await page
    .getByRole("combobox", { name: "Kategori" })
    .waitFor({ state: "visible" });
}

async function selectCategory(page: Page, category: string) {
  await page.getByRole("combobox", { name: "Kategori" }).selectOption(category);
}

test.describe("Province search", () => {
  test("typed search: finds Sumatera Utara when searching 'Sumatera Utara'", async ({
    page,
  }) => {
    await page.goto("/provinces");
    await page
      .getByRole("textbox", { name: /cari provinsi:/i })
      .fill("Sumatera Utara");

    const link = page.getByText(/sumatera utara/i).locator("xpath=ancestor::a");
    await expect(link).toHaveAttribute("href", "/provinces/sumatera-utara");
  });

  test("typed search: finds 3 results when searching 'Jawa'", async ({
    page,
  }) => {
    await page.goto("/provinces");
    await page.getByRole("textbox", { name: /cari provinsi:/i }).fill("Jawa");

    await expect(page.getByText(/jawa/i)).toHaveCount(3);
  });

  test("typed search: shows not found message for invalid search", async ({
    page,
  }) => {
    await page.goto("/provinces");
    await page.getByRole("textbox", { name: /cari provinsi:/i }).fill("asdf");

    await expect(page.getByText(/Provinsi tidak ditemukan/i)).toBeVisible();
  });

  test("query param search: finds DKI Jakarta with ?q=dki", async ({
    page,
  }) => {
    await page.goto("/provinces?q=dki");

    const link = page.getByText(/dki jakarta/i).locator("xpath=ancestor::a");
    await expect(link).toHaveAttribute("href", "/provinces/dki-jakarta");
  });

  test("query param search: finds 5 Sulawesi provinces with ?q=sulawesi", async ({
    page,
  }) => {
    await page.goto("/provinces?q=sulawesi");

    await expect(page.getByText(/sulawesi/i)).toHaveCount(5);
  });

  test("query param search: shows not found for invalid query", async ({
    page,
  }) => {
    await page.goto("/provinces?q=asdf");

    await expect(page.getByText(/Provinsi tidak ditemukan/i)).toBeVisible();
  });
});

test.describe("Province detail - DKI Jakarta categories", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/provinces/dki-jakarta");
    await waitForProvinceDetailLoad(page);
  });

  for (const category of CATEGORIES) {
    test(`${category.name}: shows category details and updates URL`, async ({
      page,
    }) => {
      await selectCategory(page, category.name);

      await expect(page.getByText(category.name)).not.toHaveCount(0);
      await expect(page).toHaveURL(
        new RegExp(`kebutuhan=${category.urlParam}`),
      );
    });

    test(`${category.name}: shows verified contacts`, async ({ page }) => {
      await selectCategory(page, category.name);

      await expect(page.getByText("Terverifikasi")).not.toHaveCount(0);
    });
  }
});
