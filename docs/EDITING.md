# How to update the CAWAP website

You can add and change **events/flyers** and **trainings** yourself. Changes appear on www.cawap.ca about **2 minutes** after you save.

## Option A: Pages CMS (no GitHub account needed)

1. You'll receive an invitation email from Pages CMS. Open it and sign in.
2. Go to **https://app.pagescms.org** and open **CAWAP**.
3. Choose **Events & flyers** or **Trainings**.

## Option B: Sveltia CMS (for people with a GitHub account)

1. Go to **https://www.cawap.ca/admin/**.
2. Sign in (with GitHub, or with the access token you were given).
3. Open **Website content** → **Events & flyers** or **Trainings**.

### One-time setup for "Sign In with GitHub" (Jacques)

Sign-in runs on our own HostGator server (`/api/auth.php`, `/api/callback.php`); no Netlify or outside service.

1. Go to https://github.com/settings/applications/new and fill in:
   - Application name: `CAWAP website editor`
   - Homepage URL: `https://www.cawap.ca`
   - Authorization callback URL: `https://www.cawap.ca/api/callback.php`
2. Click **Register application**, copy the **Client ID**, then **Generate a new client secret** and copy it (GitHub shows it once; never paste it in chat or in the repository).
3. Go to https://github.com/jacquesmofa/CAWAP/settings/secrets/actions → **New repository secret**, twice:
   - `CMS_GITHUB_CLIENT_ID` = the Client ID
   - `CMS_GITHUB_CLIENT_SECRET` = the client secret
4. Go to the repository's **Actions** tab → **Build and Deploy CAWAP Website** → **Run workflow**. About 2 minutes later, "Sign In with GitHub" works at /admin.

Until then, use **Sign In Using Access Token** with a fine-grained GitHub token limited to CAWAP (Contents: Read and write).

## Add an event

1. Open **Events & flyers** → **Add** (a new event appears at the bottom of the list).
2. Fill in: **Short ID** (e.g. `summer-camp-2027`), **Event title**, **Flyer image** (upload), **Date**, **Short description**.
3. Optional: time, location, cost, registration link (a Google Form works well), hosts, who should attend, what you will learn, bonuses, contact.
4. Click **Save**. Wait about 2 minutes and refresh the website.

The site sorts events by date automatically: future dates appear under **Upcoming Events**, past dates move to **Past Events** on their own. You never need to move an event.

## Photos

- Flyers: portrait JPG or PNG, **under 2 MB**.
- On a phone, share or export the image at "Large" or "Medium" size.

## If something goes wrong

Every save is kept in a history, so mistakes can be undone. If a save contains an error, the website simply keeps the previous version. Contact Jacques and say what you changed and when.
