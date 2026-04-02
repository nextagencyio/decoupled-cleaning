import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with Drupal content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Sparkle.*Shine.*Cleaning/i)
    await expect(page.locator('text=A Cleaner Home')).toBeVisible()
  })

  test('renders stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=8,500+')).toBeVisible()
    await expect(page.locator('text=99.2%')).toBeVisible()
  })

  test('renders CTA section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Get a Free Quote')).toBeVisible()
  })

  test('has navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('a[href="/services"]').first()).toBeVisible()
    await expect(page.locator('a[href="/pricing"]').first()).toBeVisible()
    await expect(page.locator('a[href="/testimonials"]').first()).toBeVisible()
  })
})

test.describe('Services', () => {
  test('listing page shows services', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('h1:has-text("Our Services")')).toBeVisible()
    await expect(page.locator('h3:has-text("Standard Cleaning")')).toBeVisible()
    await expect(page.locator('h3:has-text("Deep Cleaning")')).toBeVisible()
  })

  test('detail page loads with content', async ({ page }) => {
    await page.goto('/services/standard-cleaning')
    await expect(page.locator('h1:has-text("Standard Cleaning")')).toBeVisible()
    await expect(page.locator('text=$129')).toBeVisible()
  })
})

test.describe('Pricing', () => {
  test('listing page shows plans', async ({ page }) => {
    await page.goto('/pricing')
    await expect(page.locator('h1:has-text("Pricing Plans")')).toBeVisible()
    await expect(page.locator('h3:has-text("Basic Plan")')).toBeVisible()
    await expect(page.locator('h3:has-text("Premium Plan")')).toBeVisible()
    await expect(page.locator('h3:has-text("Luxury Plan")')).toBeVisible()
  })

  test('detail page loads', async ({ page }) => {
    await page.goto('/pricing/basic-plan')
    await expect(page.locator('h1:has-text("Basic Plan")')).toBeVisible()
  })
})

test.describe('Testimonials', () => {
  test('listing page shows testimonials', async ({ page }) => {
    await page.goto('/testimonials')
    await expect(page.locator('text=Client Testimonials')).toBeVisible()
    await expect(page.locator('text=Finally Found Our Cleaning Team')).toBeVisible()
  })

  test('detail page loads', async ({ page }) => {
    await page.goto('/testimonials/parker-family')
    await expect(page.locator('h1:has-text("Finally Found Our Cleaning Team")')).toBeVisible()
  })
})

test.describe('Static pages', () => {
  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1:has-text("About Pristine Home Cleaning")')).toBeVisible()
  })

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('text=Contact Us')).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('navigate from home to services', async ({ page }) => {
    await page.goto('/')
    await page.locator('nav a[href="/services"]').first().click()
    await expect(page).toHaveURL('/services')
    await expect(page.locator('text=Our Services')).toBeVisible()
  })

  test('navigate from services listing to detail', async ({ page }) => {
    await page.goto('/services')
    await page.locator('a[href="/services/standard-cleaning"]').first().click()
    await expect(page).toHaveURL('/services/standard-cleaning')
    await expect(page.locator('h1:has-text("Standard Cleaning")')).toBeVisible()
  })
})
