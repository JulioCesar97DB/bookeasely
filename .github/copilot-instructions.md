# BookEasely - AI Assistant Guide

## Project Overview
BookEasely is a Next.js application for appointment booking and business management. The platform serves multiple user types (clients, individuals, and businesses) with tailored registration flows and dashboard experiences.

## Architecture

### Core Technologies
- **Framework**: Next.js 15 (App Router)
- **UI**: TailwindCSS with shadcn/ui components built on Radix UI primitives
- **State Management**: React Hook Form with Zod validation
- **Auth & Database**: Supabase for authentication and data storage
- **Styling**: Tailwind with next-themes for dark/light mode support

### Directory Structure
- `/app`: Next.js App Router pages and API routes
  - `/auth`: Authentication flows (login, registration, confirmation)
  - `/dashboard`: User dashboard experiences by user type
- `/components`: React components organized by domain
  - `/auth`: Authentication components (forms, account cards)
  - `/common`: Shared utility components
  - `/landing`: Home page sections
  - `/ui`: Base UI components (shadcn)
- `/lib`: Utility functions and service integrations
  - `/supabase`: Supabase client configurations
  - `/validations`: Zod schemas for form validation
  - `/utils`: Helper functions
- `/constants`: Application constants and configuration

## Key Development Patterns

### Authentication Pattern
```typescript
// Server-side authentication (app/auth/actions.ts)
export async function login(formData: FormData) {
  const supabase = await createClient();
  const validatedData = loginSchema.safeParse(rawData);
  // Auth logic with Supabase
}

// Client-side form with server action
const form = useForm<LoginData>({
  resolver: zodResolver(loginSchema),
  defaultValues: { email: "", password: "" }
});
```

### Component Patterns
- **UI Components**: Wrapper components around Radix primitives in `/components/ui`
- **Form Fields**: Use `ReusableFormField` for consistent form inputs with icon support
- **Registration Flow**: Utilizes `BaseRegistrationPage` with user-specific form components
- **Dashboard Layout**: Different layouts for client vs provider user types

### Styling Conventions
- Use the `cn()` utility from `lib/utils.ts` for combining Tailwind classes
- Theme-aware styling with CSS variables and next-themes
- Gradient configurations are passed as props to components

## Development Workflow

### Setup & Run
```bash
# Install dependencies
npm install

# Start development server (localhost only)
npm run dev

# Start server accessible from mobile devices on the same WiFi
npm run dev:mobile
```

### Environment Variables
Required in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Form Implementation Steps
1. Create Zod schema in `/lib/validations/{entity}.ts`
2. Import and export from `/lib/validations/index.ts`
3. Use `useForm` with zodResolver in your component
4. Implement form with `ReusableFormField` components for consistency
5. Connect to server action for form submission

### Adding New Features
- **New User Flow**: Add in `/app/auth/register/{user-type}` following existing patterns
- **Dashboard Feature**: Add to appropriate `/app/dashboard/{user-type}` directory
- **Component**: Create in appropriate `/components` subdirectory
- **Database**: Update Supabase schema and add to relevant server actions

## Authentication & Authorization
- Authentication flows use Supabase SSR with middleware protection
- Route protection is implemented in `middleware.ts` and `lib/supabase/middleware.ts`
- User role-specific routes use layout-based protection in dashboard section

## Mobile Testing
- Use `npm run dev:mobile` to make the site accessible from mobile devices
- Access via local IP address and port 3000 (e.g., 192.168.1.x:3000)

## Key Integration Points
- **Supabase**: Authentication and data storage through `lib/supabase` utilities
- **next-themes**: Dark/light mode theming with `components/theme-provider.tsx`
- **shadcn/ui**: UI components extended from `/components/ui`
