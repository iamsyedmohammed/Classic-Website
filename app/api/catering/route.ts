import { NextResponse } from 'next/server';
import { cateringFormSchema } from '@/schemas';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Server-side Zod validation
    const parsedData = cateringFormSchema.safeParse(body);
    if (!parsedData.success) {
      return NextResponse.json(
        { message: 'Validation failed', errors: parsedData.error.flatten() },
        { status: 400 }
      );
    }

    const lead = parsedData.data;

    // Log the lead detail for verification
    console.log('[CATERING LEAD GENERATED]:', lead);

    // In a real application, you would initialize Resend or Nodemailer here:
    // await sendEmail({
    //   to: 'catering@classicbiryaninh.com',
    //   subject: `New Catering Inquiry: ${lead.eventType} from ${lead.name}`,
    //   body: JSON.stringify(lead, null, 2)
    // });

    return NextResponse.json(
      { message: 'Catering inquiry submitted successfully', lead },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Catering submission error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
