# Email capture → Google Sheet (5 minutes, do this before pushing)

Every subscribe form and the thesis gate now posts to a webhook you control. Rows land in a Google Sheet: timestamp, email, source (which form: hero, footer, post, gate-content-factory-thesis). Until the webhook is set, forms fall back to the Buttondown placeholder and capture nothing.

## Setup

1. Create a Google Sheet. Name it `JJJvR Subscribers`.
2. In the Sheet: Extensions → Apps Script. Delete the sample code and paste:

```javascript
function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Subscribers") || ss.insertSheet("Subscribers");
  if (sheet.getLastRow() === 0) sheet.appendRow(["Timestamp", "Email", "Source"]);
  var email = ((e && e.parameter && e.parameter.email) || "").trim();
  if (!email || email.indexOf("@") === -1) return ContentService.createTextOutput("no");
  sheet.appendRow([new Date(), email, (e.parameter.source || "")]);
  return ContentService.createTextOutput("ok");
}
```

3. Click Deploy → New deployment → gear icon → Web app.
   - Description: `email capture`
   - Execute as: **Me**
   - Who has access: **Anyone**  (required; the form posts anonymously)
4. Authorize when prompted, then copy the Web app URL (ends in `/exec`).
5. Open `site.config.json` and replace `PASTE-YOUR-APPS-SCRIPT-WEB-APP-URL` with that URL.
6. Rebuild/push. Test by subscribing on the live site with your own email; the row should appear in the Sheet within seconds.

## Notes

- The Sheet is capture and monitoring only. Nothing is emailed to subscribers automatically. When you start sending essays, import the Sheet's email column into an ESP (Buttondown, Kit) and switch `emailWebhook` back or dual-post. Do not promise delivery cadence until that exists.
- Never share the `/exec` URL publicly beyond the site itself; it accepts any POST. If it gets spammed, redeploy to rotate the URL and update the config.
- To watch signups from your phone: the Google Sheets app + notification rule (Tools → Notification settings → on change).
