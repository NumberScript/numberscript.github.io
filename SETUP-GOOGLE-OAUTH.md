# Google OAuth2 Setup Guide

Follow these steps to set up Google OAuth2 for your application.

## 1. Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Click the project dropdown (top left) and select "New Project".
3. Enter a project name and click "Create".

## 2. Enable OAuth Consent Screen

1. In the left sidebar, go to **APIs & Services > OAuth consent screen**.
2. Choose "External" or "Internal" (usually "External" for most apps).
3. Fill in the required fields (App name, User support email, etc.).
4. Add your domain and authorized email addresses if required.
5. Save and continue.

## 3. Create OAuth 2.0 Credentials

1. Go to **APIs & Services > Credentials**.
2. Click **Create Credentials** > **OAuth client ID**.
3. Choose "Web application".
4. Set a name (e.g., "Web Client 1").
5. Under "Authorized redirect URIs", add your redirect URI (e.g., `https://yourdomain.com/oauth2callback`).
6. Click "Create".

## 4. Get Your Client ID and Secret

- After creation, you will see your **Client ID** and **Client Secret**.
- Copy these values.

## 5. Configure Your Application

- Open `/workspaces/numberscript.github.io/oauth-google.json`.
- Fill in the following fields:
  - `client_id`: Your Google Client ID
  - `client_secret`: Your Google Client Secret
  - `redirect_uri`: The redirect URI you set above

## 6. Example `oauth-google.json`

```json
{
  "client_id": "YOUR_GOOGLE_CLIENT_ID",
  "client_secret": "YOUR_GOOGLE_CLIENT_SECRET",
  "redirect_uri": "YOUR_GOOGLE_REDIRECT_URI",
  "auth_uri": "https://accounts.google.com/o/oauth2/v2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "scope": [
    "openid",
    "email",
    "profile"
  ]
}
```

## 7. Test Your OAuth Flow

- Use the "Sign in with Google" button on your site.
- You should be redirected to the Google sign-in page.
- After authentication, you will be redirected to your specified redirect URI.

---

**References:**
- [Google Identity Platform Documentation](https://developers.google.com/identity/protocols/oauth2)
