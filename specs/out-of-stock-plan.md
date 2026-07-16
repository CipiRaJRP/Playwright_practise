# Out-of-Stock Product Scenario Plan

## Investigation Findings

- The current repository uses a Playwright test setup based on custom fixtures and page-object-style flows.
- The existing end-to-end scenario in [tests/endToend.spec.ts](tests/endToend.spec.ts) is already wired to a custom fixture from [fixtures/shopfixtures.ts](fixtures/shopfixtures.ts), which exposes a flow object from [flows/shopflow.ts](flows/shopflow.ts).
- The flow object composes page objects such as [pages/homepage.ts](pages/homepage.ts), [pages/catalogpage.ts](pages/catalogpage.ts), [pages/productpage.ts](pages/productpage.ts), [pages/cartpage.ts](pages/cartpage.ts), [pages/checkoutpage.ts](pages/checkoutpage.ts), and [pages/orderpage.ts](pages/orderpage.ts).
- Locator usage is centralized in [locators/Locators.ts](locators/Locators.ts), which should remain unchanged for the existing suite.
- Test data is currently lightweight and centralized in [utilities/testdata.ts](utilities/testdata.ts).
- No existing repo-level seeding utility, admin endpoint helper, or inventory-management helper was found in the current workspace.
- The current placeholder file [tests/seed.spec.ts](tests/seed.spec.ts) does not provide any functional seeding capability.

## Document Structure Plan

This plan will be captured across four planning documents:

1. [specs/out-of-stock-plan.md](specs/out-of-stock-plan.md)
   - High-level investigation findings and overall strategy.
2. [specs/out-of-stock-test-flow.md](specs/out-of-stock-test-flow.md)
   - Detailed end-to-end test flow for the out-of-stock scenario.
3. [specs/out-of-stock-seed-strategy.md](specs/out-of-stock-seed-strategy.md)
   - Seed-data identification and creation strategy.
4. [specs/out-of-stock-risk-analysis.md](specs/out-of-stock-risk-analysis.md)
   - Risks, dependencies, assumptions, and mitigation ideas.

## Seed Data Strategy

### Preferred approach
- Prefer a real application-supported mechanism for creating or identifying an out-of-stock item.
- The best options would be:
  - an admin endpoint
  - a seed API
  - a database seeding utility
  - a test-only environment hook

### Fallback approach
- If no application-supported seed mechanism exists, use a known out-of-stock product already present in the environment.
- If this is not available, create the scenario from a pre-existing product by changing its inventory state through an environment-supported mechanism discovered during implementation.

### Expected seed-data characteristics
- The product should be visible in the catalog.
- Its stock state should be represented as out of stock in the UI.
- The test should not depend on any existing product used by the current end-to-end scenario.

## Test Flow Plan

1. Open the ShopKart home page.
2. Navigate to the catalog.
3. Locate a product with an out-of-stock state.
4. Verify the product is visible in the catalog.
5. Verify an out-of-stock indicator is shown.
6. Verify the add-to-cart action is blocked.
7. Verify the cart count remains unchanged.
8. Record any relevant UI text or state for later assertions.

## File Ownership Plan

### Planned implementation files
- [tests/outOfStock.spec.ts](tests/outOfStock.spec.ts)
  - Owns the test case and high-level assertions.
- [pages/outOfStockPage.ts](pages/outOfStockPage.ts)
  - Owns UI interactions for the out-of-stock scenario.
- [flows/outOfStockFlow.ts](flows/outOfStockFlow.ts)
  - Owns orchestration of page actions for the scenario.
- [locators/outOfStockLocators.ts](locators/outOfStockLocators.ts)
  - Owns selectors for stock-related UI elements.
- [fixtures/outOfStockFixture.ts](fixtures/outOfStockFixture.ts)
  - Owns fixture wiring for the isolated scenario.

### Ownership boundaries
- Existing files used by [tests/endToend.spec.ts](tests/endToend.spec.ts) remain untouched.
- The new files should be isolated and not reused by the current suite.
- The new fixture should not replace or alter the existing fixture used by the current end-to-end flow.

## Risks And Assumptions

### Assumptions
- The application exposes a visible out-of-stock state in the catalog or product page.
- The test environment can either seed inventory or expose a known out-of-stock product.
- The existing Playwright conventions in this repo are acceptable for the new scenario.

### Risks
- No seed mechanism is currently implemented in the repository.
- Stock-state selectors may differ from the current app’s markup.
- The target environment may not permit inventory changes during automation.
- The out-of-stock condition may be represented differently from the expected UI behavior.

## Implementation Roadmap

1. Investigate the live application UI for stock-state representation.
2. Identify whether an admin/API/DB route exists for inventory updates.
3. Decide between a real seed mechanism or a known pre-existing out-of-stock product.
4. Create the isolated file set for the out-of-stock scenario.
5. Implement the test flow with real assertions and no hardcoded waits.
6. Run only the new scenario and validate it independently.

## Validation Strategy

- Validate the plan by confirming that the existing end-to-end suite remains untouched.
- Validate the new scenario by running only the new spec file.
- Validate that the test checks the true observable behavior:
  - product visibility
  - out-of-stock label or indicator
  - blocked add-to-cart behavior
  - unchanged cart count
