import { NextResponse } from 'next/server';
import { generatePdf } from '@/lib/pdf-generator';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body || (!body.html && !body.url)) {
      return NextResponse.json(
        { error: 'Invalid payload. Must provide a JSON body with either an "html" or a "url" string property.' },
        { status: 400 }
      );
    }

    const pdfBuffer = await generatePdf({
      html: body.html,
      url: body.url
    });

    return new NextResponse(pdfBuffer as unknown as BodyInit, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="document.pdf"',
      },
    });
  } catch (error: any) {
    console.error('Error generating PDF:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}
