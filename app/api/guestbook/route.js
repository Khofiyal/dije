import prisma from "@/lib/prisma";

export async function POST(request) {
  try {
    const { name, attendees, guest, message } = await request.json();

    if (!name || !attendees || !message) {
      return Response.json({ status: 400, error: "Missing required fields" });
    }

    const data = { name, attendees, guest, message };

    const createGuest = await prisma.guestBook.create({
        data: {
            name: name,
            attendance: attendees,
            guestnum: guest,
            message: message,
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