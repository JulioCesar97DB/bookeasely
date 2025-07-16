# BookEasely - AI Assistant Guide

## Project Overview
BookEasely is a Next.js application for appointment booking and business management. The platform serves multiple user types (clients, individuals, and businesses) with tailored registration flows and dashboard experiences.

## Architecture

### Core Technologies
- **Framework**: Next.js 15 (App Router)
- **UI**: TailwindCSS with shadcn/ui components
- **State Management**: React Hook Form with Zod validation
- **Auth & Database**: Supabase
- **Styling**: Tailwind with next-themes for dark mode support

### Directory Structure
- `/app`: Next.js App Router pages and API routes
  - `/auth`: Authentication flows (login, registration, confirmation)
  - `/dashboard`: User dashboard experiences
- `/components`: React components organized by domain
  - `/auth`: Authentication components (forms, cards)
  - `/common`: Shared utility components
  - `/landing`: Home page sections
  - `/ui`: Base UI components (shadcn)
- `/lib`: Utility functions and service integrations
  - `/supabase`: Supabase client configurations
  - `/validations`: Zod schemas for form validation
  - `/utils`: Helper functions

## Key Development Patterns

### Authentication Pattern
```typescript
// Server-side authentication (app/auth/actions.ts)
export async function login(formData: FormData) {
  const supabase = await createClient();
  // Validation and authentication logic
}

// Client-side form with server action
const form = useForm<LoginData>({
  resolver: zodResolver(loginSchema),
  // Default values and configuration
});
```

### Component Patterns
- **UI Components**: Wrapper components around Radix primitives in `/components/ui`
- **Form Fields**: Use `ReusableFormField` for consistent form inputs across the app
- **Registration Flow**: Utilizes `BaseRegistrationPage` with user-specific form components

### Styling Conventions
- Use the `cn()` utility for combining Tailwind classes
- Theme-aware styling with CSS variables
- Button styling with gradient configurations passed as props

## Development Workflow

### Setup & Run
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables
Required in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Form Implementation
1. Create Zod schema in `/lib/validations`
2. Use `useForm` with zodResolver
3. Implement form with `ReusableFormField` components
4. Connect to server action for form submission

### Adding New Page Types
1. Create page component in appropriate `/app` directory
2. Add corresponding components in `/components`
3. Update validation schemas if needed
4. Connect to Supabase data models

## Common Patterns
- Form state management uses React Hook Form
- Authentication flows use Supabase SSR
- UI components follow shadcn/ui pattern with Radix primitives
- Route protection using middleware.ts

## Integration Points
- **Supabase**: Authentication and data storage
- **next-themes**: Dark/light mode theming
