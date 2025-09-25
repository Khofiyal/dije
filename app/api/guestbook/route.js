import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import prisma from "@/lib/prisma";

export async function POST(request) {
  try {
    const { name, attendees, guest, message } = await request.json();

    if (!name || !attendees || !message) {
      return Response.json({ status: 400, error: "Missing required fields" });
    }

    const data = { name, attendees, guest, message };

    // waktu WIB
    const timestamp = new Date().toLocaleString('id-ID', {
      timeZone: 'Asia/Jakarta',
      hour12: false
    });

    const createGuest = await prisma.guestBook.create({
        data: {
            name: name,
            attendance: attendees,
            guestnum: guest,
            message: message,
            createdAt: timestamp,
        },
    });

    
    const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:E',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[name, attendees, guest, message, timestamp]],
      },
    });

    if (!createGuest) {
      return Response.json({ status: 500, error: "Failed to create guest book entry" });
    }

    return Response.json({ status: 201, success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ status: 500, error: "Internal Server Error" });
  }
}