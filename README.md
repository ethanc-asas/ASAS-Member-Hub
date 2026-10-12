# ASAS Member Hub

A standalone Expo application for ASAS membership services, events, opportunities, and professional resources. It is separate from `ASAS-Annual-App`.

## Run locally

```bash
npm install
npx expo start --go --clear
```

## Build an Android installable APK

Install dependencies, sign in to Expo, then start an internal APK build:

```bash
npm install
npx eas-cli@latest login
npx eas-cli@latest build --platform android --profile preview
```

When the build finishes, open the build URL on your Android phone and install the APK. Expo may ask you to create or configure an EAS project on the first build.

## Sign-in screen

The sign-in screen opens with the name **Justin Bartlett** and prefilled account fields. The current sign-in action is a local navigation flow; it is not connected to MemberMax authentication. The displayed profile is locally supplied app content.

## Included content

- Upcoming 2027 Southern Section and ASAS–CSAS–WSASAS Annual Meetings
- Selected meeting and application deadlines
- D.C. Animal Agriculture Policy Internship and national award information
- Membership categories and published dues snapshot
- ASAS publications, Taking Stock, career resources, student resources, Foundation funds, public policy, member portal, and event calendar links

Public content is a curated snapshot reviewed October 12, 2026. The app opens official ASAS links for full program details and current information.

## Integration notes

`services/memberApi.ts` is the content-service boundary. For production use, connect it to an ASAS-controlled backend and supported MemberMax integration. Do not place database credentials or privileged API keys in the mobile app. Confirm authentication, privacy, security, and data-access requirements before connecting real member records.

## Release checklist

- Confirm the official app name, bundle identifier, and Android package with ASAS.
- Implement an approved authentication flow and secure backend.
- Verify public content and deadlines before release.
- Test on physical devices and run `npm run typecheck`.
