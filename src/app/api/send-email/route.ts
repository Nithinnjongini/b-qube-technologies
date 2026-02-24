import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

        // Create transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD,
            },
        });

        // Send email to company
        const companyMailOptions = {
            from: `"B-Qube Contact Form" <${process.env.EMAIL_USER}>`,
            to: 'contactbqubetech@gmail.com',
            subject: `🚀 New Lead: ${name} - ${service}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
                        <tr>
                            <td align="center">
                                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                    <!-- Header with gradient -->
                                    <tr>
                                        <td style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 40px 30px; text-align: center;">
                                            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                                                🎯 New Contact Form Submission
                                            </h1>
                                            <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 14px;">B-Qube Technologies</p>
                                        </td>
                                    </tr>
                                    
                                    <!-- Content -->
                                    <tr>
                                        <td style="padding: 40px 30px;">
                                            <div style="background: linear-gradient(135deg, #eff6ff 0%, #f3e8ff 100%); border-left: 4px solid #3b82f6; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                                                <p style="margin: 0; color: #1e293b; font-size: 16px; font-weight: 600;">
                                                    🌟 Exciting news! A potential client is interested in your services.
                                                </p>
                                            </div>
                                            
                                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                                                <tr>
                                                    <td style="padding: 15px; background-color: #f8fafc; border-radius: 8px; margin-bottom: 10px;">
                                                        <p style="margin: 0 0 5px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Contact Name</p>
                                                        <p style="margin: 0; color: #1e293b; font-size: 18px; font-weight: 600;">${name}</p>
                                                    </td>
                                                </tr>
                                                <tr><td style="height: 10px;"></td></tr>
                                                <tr>
                                                    <td style="padding: 15px; background-color: #f8fafc; border-radius: 8px;">
                                                        <p style="margin: 0 0 5px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</p>
                                                        <p style="margin: 0; color: #3b82f6; font-size: 16px; font-weight: 500;">
                                                            <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr><td style="height: 10px;"></td></tr>
                                                <tr>
                                                    <td style="padding: 15px; background-color: #f8fafc; border-radius: 8px;">
                                                        <p style="margin: 0 0 5px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Service Interested In</p>
                                                        <p style="margin: 0; color: #8b5cf6; font-size: 16px; font-weight: 600;">✨ ${service}</p>
                                                    </td>
                                                </tr>
                                                <tr><td style="height: 10px;"></td></tr>
                                                <tr>
                                                    <td style="padding: 20px; background-color: #fefce8; border-left: 4px solid #eab308; border-radius: 8px;">
                                                        <p style="margin: 0 0 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                                                        <p style="margin: 0; color: #1e293b; font-size: 15px; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <div style="text-align: center; margin-top: 30px;">
                                                <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);">
                                                    📧 Reply to ${name}
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    
                                    <!-- Footer -->
                                    <tr>
                                        <td style="background-color: #1e293b; padding: 30px; text-align: center;">
                                            <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 14px;">
                                                <strong style="color: #ffffff;">B-Qube Technologies</strong>
                                            </p>
                                            <p style="margin: 0; color: #64748b; font-size: 12px;">
                                                Business Beyond Boundaries | AI-First Solutions
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `,
            text: `
🚀 NEW LEAD - B-Qube Technologies

Contact Name: ${name}
Email: ${email}
Service Interested In: ${service}

Message:
${message}

---
Reply to this lead: ${email}
            `.trim(),
        };

        await transporter.sendMail(companyMailOptions);
        console.log('Company email sent successfully');

        // Send confirmation email to user
        const userMailOptions = {
            from: `"B-Qube Technologies" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: '✨ Thank You for Reaching Out to B-Qube Technologies',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
                        <tr>
                            <td align="center">
                                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                    <!-- Header with gradient and logo -->
                                    <tr>
                                        <td style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 50px 30px; text-align: center;">
                                            <div style="background-color: rgba(255,255,255,0.2); width: 80px; height: 80px; margin: 0 auto 20px; border-radius: 16px; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(10px);">
                                                <span style="font-size: 40px; color: #ffffff;">B³</span>
                                            </div>
                                            <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                                                Thank You, ${name}!
                                            </h1>
                                            <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 16px;">We've received your message</p>
                                        </td>
                                    </tr>
                                    
                                    <!-- Hero Message -->
                                    <tr>
                                        <td style="padding: 40px 30px 20px;">
                                            <div style="background: linear-gradient(135deg, #dbeafe 0%, #e9d5ff 100%); border-radius: 12px; padding: 30px; text-align: center; margin-bottom: 30px;">
                                                <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 24px; font-weight: 700;">
                                                    🚀 Your Journey to Innovation Starts Here
                                                </h2>
                                                <p style="color: #475569; margin: 0; font-size: 16px; line-height: 1.6;">
                                                    We're excited to learn about your interest in <strong style="color: #8b5cf6;">${service}</strong>. 
                                                    Our team of experts is already reviewing your inquiry and will craft a personalized response tailored to your needs.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    
                                    <!-- What Happens Next -->
                                    <tr>
                                        <td style="padding: 0 30px 30px;">
                                            <h3 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">
                                                📋 What Happens Next?
                                            </h3>
                                            
                                            <table width="100%" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td style="padding: 15px; background-color: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 8px; margin-bottom: 10px;">
                                                        <p style="margin: 0; color: #3b82f6; font-size: 14px; font-weight: 600;">STEP 1</p>
                                                        <p style="margin: 5px 0 0 0; color: #1e293b; font-size: 15px;">Our team reviews your requirements within 24 hours</p>
                                                    </td>
                                                </tr>
                                                <tr><td style="height: 10px;"></td></tr>
                                                <tr>
                                                    <td style="padding: 15px; background-color: #f8fafc; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                                                        <p style="margin: 0; color: #8b5cf6; font-size: 14px; font-weight: 600;">STEP 2</p>
                                                        <p style="margin: 5px 0 0 0; color: #1e293b; font-size: 15px;">We'll reach out with a personalized solution proposal</p>
                                                    </td>
                                                </tr>
                                                <tr><td style="height: 10px;"></td></tr>
                                                <tr>
                                                    <td style="padding: 15px; background-color: #f8fafc; border-left: 4px solid #10b981; border-radius: 8px;">
                                                        <p style="margin: 0; color: #10b981; font-size: 14px; font-weight: 600;">STEP 3</p>
                                                        <p style="margin: 5px 0 0 0; color: #1e293b; font-size: 15px;">Together, we'll transform your vision into reality</p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    
                                    <!-- Your Message Summary -->
                                    <tr>
                                        <td style="padding: 0 30px 30px;">
                                            <div style="background-color: #fefce8; border-radius: 12px; padding: 25px; border: 2px dashed #eab308;">
                                                <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                                                    📝 Your Message Summary
                                                </h3>
                                                <p style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.8;">
                                                    ${message.replace(/\n/g, '<br>')}
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    
                                    <!-- Inspirational Quote -->
                                    <tr>
                                        <td style="padding: 0 30px 40px;">
                                            <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); border-radius: 12px; padding: 30px; text-align: center;">
                                                <p style="color: #e0e7ff; margin: 0; font-size: 18px; font-style: italic; line-height: 1.6;">
                                                    "Innovation distinguishes between a leader and a follower."
                                                </p>
                                                <p style="color: #94a3b8; margin: 10px 0 0 0; font-size: 14px;">
                                                    — Steve Jobs
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    
                                    <!-- Signature -->
                                    <tr>
                                        <td style="padding: 0 30px 40px;">
                                            <table width="100%" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td style="border-top: 2px solid #e2e8f0; padding-top: 30px;">
                                                        <p style="margin: 0 0 10px 0; color: #1e293b; font-size: 16px; font-weight: 600;">
                                                            Warm regards,
                                                        </p>
                                                        <p style="margin: 0; color: #3b82f6; font-size: 20px; font-weight: 700;">
                                                            The B-Qube Technologies Team
                                                        </p>
                                                        <p style="margin: 10px 0 0 0; color: #64748b; font-size: 14px; font-style: italic;">
                                                            Business Beyond Boundaries
                                                        </p>
                                                        <div style="margin-top: 20px;">
                                                            <p style="margin: 0; color: #64748b; font-size: 13px;">
                                                                📧 contactbqubetech@gmail.com<br>
                                                                🌐 AI-First Software Development & Consulting<br>
                                                                🚀 Transforming Ideas into Innovation
                                                            </p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    
                                    <!-- Footer -->
                                    <tr>
                                        <td style="background-color: #1e293b; padding: 30px; text-align: center;">
                                            <p style="margin: 0 0 15px 0; color: #ffffff; font-size: 16px; font-weight: 600;">
                                                🌟 B-Qube Technologies
                                            </p>
                                            <p style="margin: 0 0 15px 0; color: #94a3b8; font-size: 13px; line-height: 1.6;">
                                                Specializing in AI Automation, Multi-Agent Orchestration,<br>
                                                and End-to-End IT Consulting
                                            </p>
                                            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #334155;">
                                                <p style="margin: 0; color: #64748b; font-size: 11px;">
                                                    © ${new Date().getFullYear()} B-Qube Technologies. All rights reserved.<br>
                                                    This is an automated confirmation email.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `,
            text: `
✨ THANK YOU FOR REACHING OUT!

Hi ${name},

We're excited to learn about your interest in ${service}!

🚀 YOUR JOURNEY TO INNOVATION STARTS HERE

Our team of experts is already reviewing your inquiry and will craft a personalized response tailored to your needs.

📋 WHAT HAPPENS NEXT?

STEP 1: Our team reviews your requirements within 24 hours
STEP 2: We'll reach out with a personalized solution proposal  
STEP 3: Together, we'll transform your vision into reality

📝 YOUR MESSAGE SUMMARY:
${message}

---

"Innovation distinguishes between a leader and a follower." — Steve Jobs

Warm regards,
The B-Qube Technologies Team
Business Beyond Boundaries

📧 contactbqubetech@gmail.com
🌐 AI-First Software Development & Consulting
🚀 Transforming Ideas into Innovation

---
© ${new Date().getFullYear()} B-Qube Technologies. All rights reserved.
            `.trim(),
        };

        await transporter.sendMail(userMailOptions);
        console.log('User confirmation email sent successfully');

        return NextResponse.json({
            success: true,
            message: 'Emails sent successfully',
        });

    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { 
                error: 'Failed to send email. Please try again later.',
                details: error.message 
            },
            { status: 500 }
        );
    }
}
