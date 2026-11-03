/**
 * JJJvR Intake. One endpoint for every form on every door.
 * Each submission lands as a row in the "Leads" tab and pings Telegram.
 *
 * Setup (about 8 minutes):
 * 1. Telegram: open @BotFather, send /newbot, follow the prompts, copy the token.
 *    Then open your new bot and send it any message, e.g. "hi".
 * 2. Google Sheets: create a sheet named "JJJvR Intake".
 *    Extensions > Apps Script. Delete the sample code, paste this file, save.
 * 3. Project Settings (gear icon) > Script properties > Add property:
 *    TELEGRAM_BOT_TOKEN = the token from step 1. Save.
 * 4. Back in the editor, choose the function "linkTelegram" and press Run.
 *    Approve the permissions. Your bot sends you "Intake connected".
 * 5. Deploy > New deployment > type "Web app".
 *    Execute as: Me. Who has access: Anyone. Deploy, then copy the Web app URL.
 * 6. Send that URL to Claude; it goes into site.config.json as intakeWebhook.
 */

const SHEET_NAME = 'Leads';
const HEADERS = [
  'received_at', 'route', 'name', 'email', 'company', 'role', 'revenue_band',
  'decision', 'timeline', 'open_to_capital', 'starting_point', 'page', 'source',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_content',
  'ft_id', 'ft_source', 'ft_landed_at'
];
const ROUTE_NAMES = {
  factory: 'MERLYN WORKS invitation',
  session: 'ARCHITECTURE SESSION application',
  sbs: 'SELFBUILTSYSTEMS enquiry',
  gallahand: 'GALLAHAND briefing request'
};

function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.website) return ok_(); // spam trap: humans never fill this field
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sh = sheet_();
    sh.appendRow(HEADERS.map(function (h) {
      return h === 'received_at' ? new Date() : String(p[h] || '').slice(0, 2000);
    }));
  } finally {
    lock.releaseLock();
  }
  try { notify_(p); } catch (err) { console.error(err); }
  return ok_();
}

function doGet() {
  return ContentService.createTextOutput('JJJvR intake is live.');
}

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) {
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }
  return sh;
}

function ok_() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function notify_(p) {
  const props = PropertiesService.getScriptProperties();
  const token = props.getProperty('TELEGRAM_BOT_TOKEN');
  const chat = props.getProperty('TELEGRAM_CHAT_ID');
  if (!token || !chat) return;
  const line = function (label, v) { return v ? label + ': ' + v : null; };
  const decision = p.decision ? String(p.decision).slice(0, 400) : '';
  const text = [
    'NEW ' + (ROUTE_NAMES[p.route] || (p.route || 'lead').toUpperCase()),
    '',
    line('Name', p.name),
    line('Email', p.email),
    line('Company', p.company),
    line('Role', p.role),
    line('Revenue', p.revenue_band),
    line('Timeline', p.timeline),
    line('Open to capital', p.open_to_capital),
    line('Starting point', p.starting_point),
    decision ? '\nDecision: ' + decision : null,
    '',
    line('Source', p.utm_source || p.ft_source),
    line('Campaign', p.utm_campaign),
    'Sheet: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl()
  ].filter(function (x) { return x !== null; }).join('\n');
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({ chat_id: chat, text: text, disable_web_page_preview: true }),
    muteHttpExceptions: true
  });
}

/** Run once after messaging your bot. Finds your chat and saves it. */
function linkTelegram() {
  const props = PropertiesService.getScriptProperties();
  const token = props.getProperty('TELEGRAM_BOT_TOKEN');
  if (!token) throw new Error('Add TELEGRAM_BOT_TOKEN under Project Settings > Script properties first.');
  const res = JSON.parse(UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/getUpdates').getContentText());
  const msgs = (res.result || []).filter(function (u) { return u.message && u.message.chat; });
  if (!msgs.length) throw new Error('No messages found. Open your bot in Telegram, send "hi", then run this again.');
  const chatId = String(msgs[msgs.length - 1].message.chat.id);
  props.setProperty('TELEGRAM_CHAT_ID', chatId);
  sheet_();
  notify_({ route: 'test', name: 'Intake connected', email: 'Every form submission will now ping this chat.' });
  console.log('Linked chat ' + chatId);
}
