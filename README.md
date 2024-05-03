# TASKS

1. The server is not running due to an export issue. Please find and fix (hint: the issue is in auth.module.ts)
2. The validate route handler (`auth/login`) in app.controller.ts is not setup well, complete the setup and test that it works
3. Add guard to the `customers/loans-summary` to check X-ACCESS-KEY in the header and ensure it equals 12345 before someone can access the route
4. Complete the implementation for the `getCustomersLoanApplicationSummaries` app.service.ts method to return the customerId, customerName & the totalLoanApplicationAmount of the customer using aggregation pipeline, (hint, u can use group, lookup, sum)