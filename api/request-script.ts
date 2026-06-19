import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email || !String(email).includes("@")) {
    return res.status(400).json({ error: "Valid email required" });
  }

  try {
    const pdfPath = path.join(process.cwd(), "private", "Developers-Pilot.pdf");
    const pdfBuffer = fs.readFileSync(pdfPath);

    await resend.emails.send({
      from: "Lindsey McDowell <onboarding@resend.dev>",
      to: String(email),
      bcc: "lindseymcd@me.com",
      subject: "Developers Script — Lindsey McDowell",
      html: `
        <p>Hiya!,</p>
        <p><em>Developers</em> is here for you to read. See attached!</p>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
        <p style="font-size: 13px; color: #666;">
          <em>Developers</em> is an original work written by Lindsey McDowell. All rights reserved.
          This script is shared for reading purposes only and may not be reproduced, distributed,
          or used in any form without express written permission from the author.
          And yes, that includes using AI!
        </p>
        <p>Happy reading — and feel free to reach out with any thoughts.</p>
        <p>— Lindsey</p>
      `,
      attachments: [
        {
          filename: "Developers-Pilot.pdf",
          content: pdfBuffer,
        },
      ],
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
