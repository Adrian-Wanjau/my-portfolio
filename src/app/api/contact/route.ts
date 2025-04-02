import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;
    
    // Validate the required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Format the message for Slack
    const slackMessage = {
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "New Contact Form Submission",
            emoji: true
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Name:*\n${name}`
            },
            {
              type: "mrkdwn",
              text: `*Email:*\n${email}`
            }
          ]
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Subject:*\n${subject}`
            }
          ]
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Message:*\n${message}`
          }
        }
      ]
    };
    
    // Send the message to Slack
    const slackResponse = await fetch(process.env.SLACK_WEBHOOK_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackMessage),
    });
    
    if (!slackResponse.ok) {
      throw new Error('Failed to send message to Slack');
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending message to Slack:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
