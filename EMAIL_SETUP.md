# Email Configuration Guide

The contact form is working, but to receive actual emails, you need to configure SMTP settings.

## Quick Setup Options

### Option 1: Gmail (Easiest for Testing)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "Knight InfoTek Contact Form"
   - Copy the 16-character password
3. **Create `.env` file** in the project root:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   SMTP_FROM="Knight InfoTek Contact Form" <your-email@gmail.com>
   CONTACT_EMAIL=contact@knightinfotek.com
   ```
4. **Restart the server** to load the new environment variables

### Option 2: SendGrid (Recommended for Production)

1. **Sign up** at https://sendgrid.com
2. **Create an API Key**:
   - Go to Settings → API Keys
   - Create a new API key with "Mail Send" permissions
3. **Create `.env` file**:
   ```env
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASS=your-sendgrid-api-key
   SMTP_FROM="Knight InfoTek Contact Form" <noreply@knightinfotek.com>
   CONTACT_EMAIL=contact@knightinfotek.com
   ```
4. **Restart the server**

### Option 3: Your Own SMTP Server

If you have your own email server (like through your hosting provider):

```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASS=your-password
SMTP_FROM="Knight InfoTek Contact Form" <noreply@yourdomain.com>
CONTACT_EMAIL=contact@knightinfotek.com
```

## Testing

After configuring SMTP:

1. Restart the server: `npm run dev`
2. Submit the contact form
3. Check your email inbox (and spam folder)

## Development Mode

If SMTP is not configured, emails will be logged to the server console instead of being sent. This is useful for development and testing.

## Security Note

**Never commit your `.env` file to git!** It should already be in `.gitignore`. Keep your SMTP credentials secure.

