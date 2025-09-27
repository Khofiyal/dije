import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const data = await prisma.guestBook.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
    return Response.json({ status: 200, data });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to fetch message" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}