import { NextRequest, NextResponse } from 'next/server';

// Define the contact form data format
interface ContactFormData {
  type: string;
  name: string;
  contact: string;
  message: string;
}

export async function POST(request: NextRequest) {
    const url = 'https://script.google.com/macros/s/AKfycbxg6bMDdGRp0OTuUDva-x0113lurtAnu55R72aEVNFJjdSDIBSp_jDhrQ_YKSPBlc6w/exec';
  
    try {
    // Parse the request body
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.type || !data.name || !data.contact || !data.message) {
      return NextResponse.json(
        { error: 'Type, full name, contact, and message are required fields' },
        { status: 400 }
      );
    }

    // Send the data to Google Apps Script
    const response = await fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    const result = await response.json();

    // Return success response
    return NextResponse.json(
      { 
        success: true,
        message: 'Contact form submitted successfully',
        data: {
          submittedAt: new Date().toISOString(),
          result,
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to submit contact form. Please try again.' 
      },
      { status: 500 }
    );
  }
}
