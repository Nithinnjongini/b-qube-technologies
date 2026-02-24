import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, service, message } = body;

        if (!name || !email || !service || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        console.log('Attempting to send emails...');
        console.log('API Key configured:', !!process.env.RESEND_API_KEY);

        // Send email to company (using verified email address)
        const companyEmail = await resend.emails.send({
            from: 'B-Qube Contact Form <onboarding@resend.dev>',
            to: ['nithinjosephs@gmail.com'],
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Service Interested In:</strong> ${service}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p style="color: #666; font-size: 12px;">This email was sent from the B-Qube Technologies contact form.</p>
            `,
            text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Service Interested In: ${service}
Message: ${message}

---
This email was sent from the B-Qube Technologies contact form.
            `.trim(),
        });

        console.log('Company email sent:', companyEmail);

        // Send confirmation email to user
        const userEmail = await resend.emails.send({
            from: 'B-Qube Technologies <onboarding@resend.dev>',
            to: [email],
            subject: 'Thank you for contacting B-Qube Technologies',
            html: `
                <h2>Thank you for reaching out, ${name}!</h2>
                <p>We have received your inquiry about <strong>${service}</strong>.</p>
                <p>Our team will review your message and get back to you shortly.</p>
                <br>
                <h3>Your Message:</h3>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <br>
                <p>Best regards,<br>
                <strong>B-Qube Technologies Team</strong></p>
                <hr>
                <p style="color: #666; font-size: 12px;">This is an automated confirmation email. Please do not reply to this email.</p>
            `,
            text: `
Thank you for reaching out, ${name}!

We have received your inquiry about ${service}.

Our team will review your message and get back to you shortly.

Your Message:
${message}

Best regards,
B-Qube Technologies Team

---
This is an automated confirmation email. Please do not reply to this email.
            `.trim(),
        });

        console.log('User confirmation email sent:', userEmail);

        return NextResponse.json({
            success: true,
            message: 'Emails sent successfully',
            data: { 
                companyEmailId: companyEmail.data?.id,
                userEmailId: userEmail.data?.id
            }
        });

    } catch (error: any) {
        console.error('Error sending email:', error);
        console.error('Error details:', error.message, error.statusCode);
        return NextResponse.json(
            { 
                error: 'Failed to send email. Please try again later.',
                details: error.message 
            },
            { status: 500 }
        );
    }
}
