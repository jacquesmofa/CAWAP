# How to update the CAWAP website

You can change **all the text, photos and links** on www.cawap.ca yourself: every page, the menus, the footer, contact details, events, trainings, gallery photos and what Google shows. Changes appear on the live site about **2 minutes** after you save.

You can't change the layout, colours or fonts, or add new kinds of sections; those still need your web designer.

## Two ways to sign in

**Option A: Pages CMS (no GitHub account needed)**
1. Open the invitation email from Pages CMS and sign in.
2. Go to **https://app.pagescms.org** and open **CAWAP**.

**Option B: Sveltia CMS (for people with a GitHub account)**
1. Go to **https://www.cawap.ca/admin/**.
2. Choose **Sign In with GitHub**, or **Sign In Using Access Token** with the token you were given.

Both editors change the same content, so use whichever you prefer.

## Where everything is

| I want to change… | Open |
| --- | --- |
| Phone, email, address, social media links | Site settings → **Contact details & social links** |
| Menu at the top | Site settings → **Main menu** |
| Footer text and links | Site settings → **Footer** |
| The purple "Donate" banner at the bottom of pages | Site settings → **Donation banner** |
| Gallery photos | Site settings → **Photo gallery & media folders** → a category → **Added photos** |
| What Google shows for each page | Site settings → **Google: page titles & descriptions** |
| Search box results, impact map, programs hub | Site settings → **Shared sections** |
| Home page (slides, About, Founder's message, Sankofa gala box, impact numbers…) | Pages → **Home page** |
| About, Programs overview, Food Bank, Gallery, Contact, Donate, Christmas Event… | Pages → the page name |
| A program page (Youth Leadership, Capital G-Girls, Heart Wise Seniors…) | Program pages → the program |
| Events and flyers | Events & trainings → **Events & flyers** |
| Trainings | Events & trainings → **Trainings** |

Inside a page, the fields are grouped by section in the same order as on the website (for example "Hero section", "Mission and vision"). Each field shows the text currently on the site, so you can find the right one by reading it.

## Common tasks

**Add an event:** Events & flyers → **Add** → fill in Short ID (e.g. `summer-camp-2027`), Title, Flyer image, Date and Description → **Save**. Future dates show under Upcoming Events and move to Past Events by themselves.

**Change a photo:** click the photo field → **Upload** (or pick one already uploaded) → **Save**.

**Add photos to the gallery:** Photo gallery & media folders → choose the category (e.g. Food Bank) → **Added photos** → **Add** → upload → **Save**. New photos show first in that category.

**Change a home page slide photo:** Home page → Hero slider → Slides → the slide → **Image** → upload → **Save**.

**Change the phone number everywhere it appears in the menu and footer:** Contact details & social links → Phone (as shown) and Phone (for tap-to-call) → **Save**. Some pages also mention the phone in their own text; change those on the page.

## Good habits

- Photos: JPG or PNG, **under 2 MB**. On a phone, share or export at "Large" or "Medium" size.
- Save once, then wait about 2 minutes before checking the site.
- Lists (highlights, steps, services): use **Add** for a new item, drag to reorder, and the bin icon to remove.

## If something goes wrong

Every save is kept in a history, so mistakes can be undone. If a save ever contains an error, the website keeps showing the previous version. Contact Jacques and say what you changed and when.

## One-time setup for "Sign In with GitHub" (Jacques)

Sign-in runs on our own HostGator server (`/api/auth.php`, `/api/callback.php`); no Netlify or outside service.

1. Go to https://github.com/settings/applications/new and fill in:
   - Application name: `CAWAP website editor`
   - Homepage URL: `https://www.cawap.ca`
   - Authorization callback URL: `https://www.cawap.ca/api/callback.php`
2. Click **Register application**, copy the **Client ID**, then **Generate a new client secret** and copy it. GitHub shows it only once; never paste it in a chat or in the repository.
3. Go to https://github.com/jacquesmofa/CAWAP/settings/secrets/actions → **New repository secret**, twice:
   - `CMS_GITHUB_CLIENT_ID` = the Client ID
   - `CMS_GITHUB_CLIENT_SECRET` = the client secret
4. Go to the repository's **Actions** tab → **Build and Deploy CAWAP Website** → **Run workflow**. About 2 minutes later, "Sign In with GitHub" works at /admin.
