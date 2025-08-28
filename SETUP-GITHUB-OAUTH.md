# GitHub OAuth2 Setup Guide

Follow these steps to set up GitHub OAuth2 for your application.

## 1. Register a New OAuth Application

1. Go to [GitHub Developer Settings](https://github.com/settings/developers).
2. Under "OAuth Apps", click **New OAuth App**.
3. Fill in the required fields:
   - **Application name**: Your app's name.
   - **Homepage URL**: Your app's homepage (e.g., `https://yourdomain.com`).
   - **Authorization callback URL**: Your redirect URI (e.g., `https://yourdomain.com/oauth2callback`).
4. Click **Register application**.

## 2. Get Your Client ID and Secret

- After registration, you will see your **Client ID**.
- Click "Generate a new client secret" to get your **Client Secret**.
- Copy both values.

## 3. Configure Your Application

- Open `/workspaces/numberscript.github.io/oauth-github.json`.
- Fill in the following fields:
  - `client_id`: Your GitHub Client ID
  - `client_secret`: Your GitHub Client Secret
  - `redirect_uri`: The callback URL you set above

## 4. Example `oauth-github.json`

```json
{
  "client_id": "YOUR_GITHUB_CLIENT_ID",
  "client_secret": "YOUR_GITHUB_CLIENT_SECRET",
  "redirect_uri": "YOUR_GITHUB_REDIRECT_URI",
  "auth_uri": "https://github.com/login/oauth/authorize",
  "token_uri": "https://github.com/login/oauth/access_token",
  "scope": [
    "read:user",
    "user:email"
  ]
}
```

## 5. Test Your OAuth Flow

- Use the "Sign in with GitHub" button on your site.
- You should be redirected to the GitHub sign-in page.
- After authentication, you will be redirected to your specified callback URL.

---

**References:**
- [GitHub OAuth Apps Documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps)
