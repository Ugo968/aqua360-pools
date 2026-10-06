import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const category = request.nextUrl.searchParams.get("category");

    const projects = await db.project.findMany({
      where: category && category !== "all" ? { category } : undefined,
      orderBy: { sortOrder: "asc" },
    });

    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    console.error("GET /api/projects failed:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load projects" },
      { status: 500 }
    );
  }
}
