# Fix Open Graph Images with Cloudflare - Step by Step Guide

## Problem

OG images work without Cloudflare but fail when Cloudflare is enabled because Cloudflare blocks social media crawlers.

---

## ✅ STEP-BY-STEP SOLUTION

### STEP 1: Login to Cloudflare

1. Go to: https://dash.cloudflare.com
2. Login with your account
3. Select your website domain

---

### STEP 2: Create WAF Rule

1. Click on **Security** (left menu)
2. Click on **WAF** (under Security)
3. Click on **Custom rules** tab
4. Click the **Create rule** button

---

### STEP 3: Configure the Rule

#### 3.1: Rule Name

- Type: `Allow Social Media Bots`

#### 3.2: Set the Condition

- Click on **Field** dropdown → Select: **User Agent**
- Click on **Operator** dropdown → Select: **contains**
- In the **Value** box, paste this EXACT text:
  ```
  facebookexternalhit|Twitterbot|LinkedInBot|WhatsApp|TelegramBot|Slackbot|SkypeUriPreview|Applebot|Googlebot|bingbot
  ```

#### 3.3: Set the Action

- Scroll down to **"Then take action..."** section
- Click on **"Choose action"** dropdown
- Select: **Skip** ⬅️ IMPORTANT: Must be "Skip", not "Allow" or "Block"

---

### STEP 4: Configure Skip Options

After selecting "Skip", you will see these options:

#### 4.1: Log matching requests

- ✅ **Keep the toggle ON** (should be green)
- This helps you see when bots access your site

#### 4.2: WAF components to skip

Check these boxes:

- ✅ **All managed rules** ← CHECK THIS
- ✅ **All Super Bot Fight Mode Rules** ← CHECK THIS
- ✅ **All remaining custom rules** ← CHECK THIS (optional but recommended)
- ⬜ **All rate limiting rules** ← Leave unchecked (unless you have rate limit issues)

---

### STEP 5: Deploy the Rule

1. Scroll to the bottom
2. Click the **Deploy** button
3. Wait for confirmation message

---

### STEP 6: Clear Cloudflare Cache

1. Go to **Caching** (left menu)
2. Click **Configuration**
3. Click **Purge Everything** button
4. Wait 2-3 minutes for cache to clear

---

### STEP 7: Test Your OG Image

#### Test with Facebook:

1. Go to: https://developers.facebook.com/tools/debug/
2. Enter your website URL (e.g., `https://yourdomain.com`)
3. Click **"Scrape Again"** button
4. Check if OG image appears in the preview

#### Test with Twitter:

1. Go to: https://cards-dev.twitter.com/validator
2. Enter your website URL
3. Check if image preview appears

#### Test with LinkedIn:

1. Go to: https://www.linkedin.com/post-inspector/
2. Enter your website URL
3. Check if image preview appears

---

## 📋 QUICK CHECKLIST

Before testing, make sure:

- [ ] WAF rule is created with "Skip" action
- [ ] "All managed rules" is checked
- [ ] "All Super Bot Fight Mode Rules" is checked
- [ ] Cloudflare cache is cleared
- [ ] Your website has `NEXT_PUBLIC_SITE_URL` set in `.env.local` file
- [ ] Your OG image file exists at `/opengraph-image.png`

---

## 🔧 ADDITIONAL SETTINGS (If Still Not Working)

### Option A: Disable Bot Fight Mode

1. Go to: **Security** → **Bots**
2. If **Bot Fight Mode** is ON, turn it OFF
3. Save changes

### Option B: Check Scrape Shield

1. Go to: **Scrape Shield**
2. If **Hotlink Protection** is enabled, disable it temporarily to test
3. Save changes

---

## ❓ TROUBLESHOOTING

### Issue: Still getting 403 error

- **Fix**: Wait 5-10 minutes for Cloudflare to update
- **Fix**: Make sure "All managed rules" is checked in WAF rule
- **Fix**: Check Cloudflare Analytics → Security Events to see if bots are still being blocked

### Issue: OG image not showing

- **Fix**: Verify image URL is correct: `https://yourdomain.com/opengraph-image.png`
- **Fix**: Check if image file exists and is less than 5MB
- **Fix**: Make sure `NEXT_PUBLIC_SITE_URL` is set correctly in `.env.local`

### Issue: Rule not working

- **Fix**: Make sure rule is deployed (check status in Custom rules list)
- **Fix**: Clear Cloudflare cache again
- **Fix**: Test with different social media validators

---

## 📝 ENVIRONMENT VARIABLE SETUP

Create a file named `.env.local` in your project root:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Replace `yourdomain.com` with your actual website domain.

---

## ✅ SUCCESS INDICATORS

Your setup is working if:

- ✅ Facebook Debugger shows your OG image
- ✅ Twitter Card Validator shows preview
- ✅ LinkedIn Post Inspector shows image
- ✅ No 403 errors in Cloudflare Security Events

---

## 🆘 STILL NEED HELP?

1. Check Cloudflare Analytics → Security Events for blocked requests
2. Verify your WAF rule is active (should show in Custom rules list)
3. Test OG image URL directly: `https://yourdomain.com/opengraph-image.png`
4. Make sure image returns HTTP 200 (not 403 or 404)
