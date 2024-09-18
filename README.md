# Subscription Packages Validation with Cypress

## Overview

This Cypress test suite is designed to validate the subscription packages on the STC TV subscription page. 
It verifies that the subscription packages' types, prices, and currencies are displayed correctly for multiple countries: Saudi Arabia, Bahrain, and Kuwait.

## Prerequisites

- Node.js and npm installed
- Cypress installed.

Test Suite
File: cypress/e2e/tests.js
This test suite contains tests for validating subscription packages on the STC TV subscription page.

Test Details
Countries Tested:

Saudi Arabia (SAR)
Bahrain (BHD)
Kuwait (KWD)
Subscription Packages:

Lite: Prices - SAR: 15, BHD: 2, KWD: 1.2
Classic: Prices - SAR: 25, BHD: 3, KWD: 2.5
Premium: Prices - SAR: 60, BHD: 6, KWD: 4.8
How It Works
Visit the STC TV Subscription Page:

URL: https://subscribe.stctv.com/sa-en
Select a Country:

Click on the country dropdown and choose the desired country.
Validate Subscription Packages:

For each subscription package (Lite, Classic, Premium), the test ensures the correct type, price, and currency are displayed.

