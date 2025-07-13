-- Esquema simplificado para BookEasely - Solo campos de formularios
-- Este esquema elimina campos redundantes y campos no capturados en formularios

-- Tabla principal de perfiles (conecta con auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  account_type TEXT NOT NULL CHECK (account_type IN ('client', 'individual-free', 'individual-pro', 'business'))
);

-- Detalles específicos para cuentas business
CREATE TABLE business_details (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  business_name TEXT NOT NULL,
  business_category TEXT NOT NULL,
  team_members TEXT NOT NULL
);

-- Detalles específicos para cuentas individual
CREATE TABLE individual_details (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  service_category TEXT NOT NULL
);

-- Direcciones (solo para business e individual que las capturan en formulario)
CREATE TABLE addresses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  country TEXT NOT NULL,
  state_province TEXT NOT NULL,
  address TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  address_type TEXT DEFAULT 'primary' CHECK (address_type IN ('primary', 'billing', 'shipping'))
);

-- Suscripciones (para manejar planes)
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  plan_type TEXT NOT NULL CHECK (plan_type IN ('free', 'pro', 'business')),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'expired'))
);

-- RLS Policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE individual_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Políticas para profiles
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Políticas para business_details
CREATE POLICY "Users can view own business details" ON business_details
  FOR SELECT USING (auth.uid() = profile_id);

CREATE POLICY "Users can update own business details" ON business_details
  FOR UPDATE USING (auth.uid() = profile_id);

CREATE POLICY "Users can insert own business details" ON business_details
  FOR INSERT WITH CHECK (auth.uid() = profile_id);

-- Políticas para individual_details
CREATE POLICY "Users can view own individual details" ON individual_details
  FOR SELECT USING (auth.uid() = profile_id);

CREATE POLICY "Users can update own individual details" ON individual_details
  FOR UPDATE USING (auth.uid() = profile_id);

CREATE POLICY "Users can insert own individual details" ON individual_details
  FOR INSERT WITH CHECK (auth.uid() = profile_id);

-- Políticas para addresses
CREATE POLICY "Users can view own addresses" ON addresses
  FOR SELECT USING (auth.uid() = profile_id);

CREATE POLICY "Users can update own addresses" ON addresses
  FOR UPDATE USING (auth.uid() = profile_id);

CREATE POLICY "Users can insert own addresses" ON addresses
  FOR INSERT WITH CHECK (auth.uid() = profile_id);

-- Políticas para subscriptions
CREATE POLICY "Users can view own subscriptions" ON subscriptions
  FOR SELECT USING (auth.uid() = profile_id);

CREATE POLICY "Users can update own subscriptions" ON subscriptions
  FOR UPDATE USING (auth.uid() = profile_id);

CREATE POLICY "Users can insert own subscriptions" ON subscriptions
  FOR INSERT WITH CHECK (auth.uid() = profile_id);

-- Índices para mejorar rendimiento
CREATE INDEX idx_profiles_account_type ON profiles(account_type);
CREATE INDEX idx_business_details_profile_id ON business_details(profile_id);
CREATE INDEX idx_individual_details_profile_id ON individual_details(profile_id);
CREATE INDEX idx_addresses_profile_id ON addresses(profile_id);
CREATE INDEX idx_subscriptions_profile_id ON subscriptions(profile_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
