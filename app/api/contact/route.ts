import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/schemas';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Server-side Zod validation
    const parsedData = contactFormSchema.safeParse(body);
    if (!parsedData.success) {
      return NextResponse.json(
        { message: 'Validation failed', errors: parsedData.error.flatten() },
        { status: 400 }
      );
    }

    const contactData = parsedData.data;

    // Log the message details for verification
    console.log('[CONTACT MESSAGE RECEIVED]:', contactData);

    return NextResponse.json(
      { message: 'Contact message submitted successfully', contactData },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
