import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(200),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(30),
  projectType: z.string().trim().min(2, "Please select a project type").max(80),
  location: z.string().trim().max(160).optional().or(z.literal("")),
  budget: z.string().trim().max(80).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more about your project (min. 10 characters)")
    .max(4000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = inquirySchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      return NextResponse.json(
        { success: false, error: "Please correct the highlighted fields.", fieldErrors },
        { status: 400 }
      );
    }

    const inquiry = await db.inquiry.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        projectType: parsed.data.projectType,
        location: parsed.data.location || null,
        budget: parsed.data.budget || null,
        message: parsed.data.message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: { id: inquiry.id },
        message: "Thank you! Your request has been received — our team will contact you within 24 hours.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/inquiries failed:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again or reach us on WhatsApp." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const count = await db.inquiry.count();
    return NextResponse.json({ success: true, data: { totalInquiries: count } });
  } catch (error) {
    console.error("GET /api/inquiries failed:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load inquiries" },
      { status: 500 }
    );
  }
}
