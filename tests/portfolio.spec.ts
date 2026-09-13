import { expect, test } from "@playwright/test";

test.describe("desktop scroll story", { tag: "@desktop" }, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".pin-spacer")).toHaveCount(1);
  });

  test("uses one master timeline and one progress bar", async ({ page }) => {
    await page.getByRole("link", { name: "Work" }).click();
    await expect
      .poll(() => page.evaluate(() => window.scrollY / (window.innerHeight * 8)))
      .toBeGreaterThan(0.2);
    await expect
      .poll(() =>
        page.locator(".master-progress").evaluate((element) => {
          const parentWidth = element.parentElement?.getBoundingClientRect().width ?? 1;
          return element.getBoundingClientRect().width / parentWidth;
        }),
      )
      .toBeGreaterThan(0.2);

    const progress = await page.locator(".master-progress").evaluate((element) => {
      const parentWidth = element.parentElement?.getBoundingClientRect().width ?? 1;
      return element.getBoundingClientRect().width / parentWidth;
    });
    expect(progress).toBeLessThan(0.3);
    await expect(page.locator("nav [aria-current=location]")).toHaveText("Work");
    await expect(page.locator("#top")).toHaveAttribute("inert", "");
    await expect(page.locator("#projects")).not.toHaveAttribute("inert", "");
    await expect(page.locator(".scene-one")).not.toHaveAttribute("inert", "");
    await expect(page.locator(".scene-two")).toHaveAttribute("inert", "");
  });

  test("navigation targets the correct point of the master timeline", async ({ page }) => {
    await page.getByRole("link", { name: "Contact" }).click();
    await expect(page.locator("nav [aria-current=location]")).toHaveText("Contact");
    await expect(page.locator("#contact")).not.toHaveAttribute("inert", "");

    await expect
      .poll(
        () =>
          page.evaluate(() => window.scrollY / (window.innerHeight * 8)),
        { timeout: 5_000 },
      )
      .toBeGreaterThan(0.94);
  });

  test("brings the second featured project into the viewport", async ({ page }) => {
    await page.getByRole("link", { name: "Work" }).click();
    await expect
      .poll(() => page.evaluate(() => window.scrollY / (window.innerHeight * 8)))
      .toBeGreaterThan(0.2);

    await page.evaluate(() => {
      document.documentElement.style.setProperty(
        "scroll-behavior",
        "auto",
        "important",
      );
      window.scrollTo(0, window.innerHeight * 8 * 0.52);
    });
    await expect
      .poll(() => page.evaluate(() => window.scrollY / (window.innerHeight * 8)))
      .toBeGreaterThan(0.5);

    const secondScene = page.locator(".scene-two");
    await expect(secondScene).toBeVisible();
    await expect
      .poll(() =>
        secondScene.locator(".scene-background").evaluate((element) => {
          const clipPath = getComputedStyle(element).clipPath;
          const rightInset = clipPath.match(
            /inset\([^\s]+\s+([\d.]+)%/,
          )?.[1];
          return rightInset ? Number(rightInset) : 100;
        }),
      )
      .toBeLessThan(50);
  });
});

test.describe("mobile layout", { tag: "@mobile" }, () => {
  test("keeps natural flow and visible contact content", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".pin-spacer")).toHaveCount(0);

    const layout = await page.evaluate(() => ({
      overflow:
        document.documentElement.scrollWidth - document.documentElement.clientWidth,
      progressPosition: getComputedStyle(
        document.querySelector(".master-progress-shell")!,
      ).position,
    }));

    expect(layout.overflow).toBe(0);
    expect(layout.progressPosition).toBe("fixed");
    await expect(page.locator("#contact .story-static .contact-title")).toHaveCSS(
      "opacity",
      "1",
    );
  });
});
