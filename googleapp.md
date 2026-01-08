
const NOTIFY_EMAIL = "shhzbsaleem@gmail.com";

function doPost(e) {
  try {
    const sheet = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName("Leads");

    const data = JSON.parse(e.postData.contents);

    // Insert newest lead at top
    sheet.insertRowBefore(2);
    sheet.getRange(2, 1, 1, 7).setValues([[
      new Date(),
      data.name || "",
      data.email || "",
      data.company || "",
      "'" + (data.phone || ""),
      data.country || "",
      data.message || ""
    ]]);

    // Email notification (non-blocking)
    try {
      const subject = "📩 New Website Lead";
      const body =
        `A new lead has been submitted:\n\n` +
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Company: ${data.company}\n` +
        `Phone: ${data.phone}\n` +
        `Country: ${data.country}\n\n` +
        `Message:\n${data.message}\n\n` +
        `Time: ${new Date().toLocaleString()}`;

      MailApp.sendEmail(NOTIFY_EMAIL, subject, body);
    } catch (mailError) {
      // Log email failure but do NOT fail submission
      console.error("Email failed:", mailError);
    }

    return ContentService
      .createTextOutput("OK")
      .setMimeType(ContentService.MimeType.TEXT);

  } catch (error) {
    console.error("Submission failed:", error);

    return ContentService
      .createTextOutput("ERROR")
      .setMimeType(ContentService.MimeType.TEXT);
  }
}


