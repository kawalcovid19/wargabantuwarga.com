import { test, expect, Page } from "@playwright/test";

async function waitForPageLoad(page: Page) {
  await page
    .getByRole("textbox", { name: /cari kontak/i })
    .waitFor({ state: "visible" });
}

test.describe("Contact search on province page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/provinces/dki-jakarta");
    await waitForPageLoad(page);
  });

  test("search by phone number", async ({ page }) => {
    await page
      .getByRole("textbox", { name: /cari kontak/i })
      .fill("08111617101");
    await page.getByRole("button", { name: /cari/i }).click();

    const contactList = page.getByTestId("contact-list");
    await expect(contactList.getByText("08111617101").first()).toBeVisible();
  });

  test("search by address", async ({ page }) => {
    await page.getByRole("textbox", { name: /cari kontak/i }).fill("Sudirman");
    await page.getByRole("textbox", { name: /cari kontak/i }).press("Enter");

    const contactList = page.getByTestId("contact-list");
    await expect(contactList.getByText(/sudirman/i).first()).toBeVisible();
  });

  test("search by provider", async ({ page }) => {
    await page
      .getByRole("textbox", { name: /cari kontak/i })
      .fill("dompet dhuafa");
    await page.getByRole("textbox", { name: /cari kontak/i }).press("Enter");

    const contactList = page.getByTestId("contact-list");
    await expect(contactList.getByText(/dompet dhuafa/i).first()).toBeVisible();
  });

  test("displays empty state when search matches nothing", async ({ page }) => {
    await page.getByRole("textbox", { name: /cari kontak/i }).fill("aoeu");
    await page.getByRole("textbox", { name: /cari kontak/i }).press("Enter");

    await expect(
      page.getByRole("heading", { name: /fasilitas tidak ditemukan/i }),
    ).toBeVisible();
  });
});
