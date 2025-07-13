-- BookEasely Database Schema - Esquema completo simplificado
-- Solo incluye campos que se capturan en los formularios
-- Elimina redundancias con auth.users de Supabase

-- =============================================================================
-- ELIMINAR TABLAS EXISTENTES (si las hay)
-- =============================================================================
DROP TABLE IF EXISTS subscriptions CASCADE;
DROP TABLE IF EXISTS addresses CASCADE;
DROP TABLE IF EXISTS individual_details CASCADE;
DROP TABLE IF EXISTS business_details CASCADE;
DROP TABLE IF EXISTS profiles CASCADE;

-- =============================================================================
-- CREAR TABLAS
-- =============================================================================

-- Tabla principal de perfiles (conecta con auth.users de Supabase)
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

-- Detalles específicos para cuentas individual (individual-free e individual-pro)
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

-- =============================================================================
-- HABILITAR ROW LEVEL SECURITY
-- =============================================================================
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE individual_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- =============================================================================
-- POLÍTICAS RLS PARA PROFILES
-- =============================================================================
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can delete own profile" ON profiles
  FOR DELETE USING (auth.uid() = id);

-- =============================================================================
-- POLÍTICAS RLS PARA BUSINESS_DETAILS
-- =============================================================================
CREATE POLICY "Users can view own business details" ON business_details
  FOR SELECT USING (auth.uid() = profile_id);

CREATE POLICY "Users can update own business details" ON business_details
  FOR UPDATE USING (auth.uid() = profile_id);

CREATE POLICY "Users can insert own business details" ON business_details
  FOR INSERT WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Users can delete own business details" ON business_details
  FOR DELETE USING (auth.uid() = profile_id);

-- =============================================================================
-- POLÍTICAS RLS PARA INDIVIDUAL_DETAILS
-- =============================================================================
CREATE POLICY "Users can view own individual details" ON individual_details
  FOR SELECT USING (auth.uid() = profile_id);

CREATE POLICY "Users can update own individual details" ON individual_details
  FOR UPDATE USING (auth.uid() = profile_id);

CREATE POLICY "Users can insert own individual details" ON individual_details
  FOR INSERT WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Users can delete own individual details" ON individual_details
  FOR DELETE USING (auth.uid() = profile_id);

-- =============================================================================
-- POLÍTICAS RLS PARA ADDRESSES
-- =============================================================================
CREATE POLICY "Users can view own addresses" ON addresses
  FOR SELECT USING (auth.uid() = profile_id);

CREATE POLICY "Users can update own addresses" ON addresses
  FOR UPDATE USING (auth.uid() = profile_id);

CREATE POLICY "Users can insert own addresses" ON addresses
  FOR INSERT WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Users can delete own addresses" ON addresses
  FOR DELETE USING (auth.uid() = profile_id);

-- =============================================================================
-- POLÍTICAS RLS PARA SUBSCRIPTIONS
-- =============================================================================
CREATE POLICY "Users can view own subscriptions" ON subscriptions
  FOR SELECT USING (auth.uid() = profile_id);

CREATE POLICY "Users can update own subscriptions" ON subscriptions
  FOR UPDATE USING (auth.uid() = profile_id);

CREATE POLICY "Users can insert own subscriptions" ON subscriptions
  FOR INSERT WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Users can delete own subscriptions" ON subscriptions
  FOR DELETE USING (auth.uid() = profile_id);

-- =============================================================================
-- ÍNDICES PARA MEJORAR RENDIMIENTO
-- =============================================================================
CREATE INDEX idx_profiles_account_type ON profiles(account_type);
CREATE INDEX idx_business_details_profile_id ON business_details(profile_id);
CREATE INDEX idx_individual_details_profile_id ON individual_details(profile_id);
CREATE INDEX idx_addresses_profile_id ON addresses(profile_id);
CREATE INDEX idx_addresses_type ON addresses(address_type);
CREATE INDEX idx_subscriptions_profile_id ON subscriptions(profile_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
CREATE INDEX idx_subscriptions_plan_type ON subscriptions(plan_type);

-- =============================================================================
-- FUNCIONES Y TRIGGERS (OPCIONALES)
-- =============================================================================

-- Función para obtener información completa de un usuario
CREATE OR REPLACE FUNCTION get_user_profile(user_id UUID)
RETURNS TABLE (
  id UUID,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  account_type TEXT,
  email TEXT,
  created_at TIMESTAMPTZ,
  business_name TEXT,
  business_category TEXT,
  team_members TEXT,
  service_category TEXT,
  plan_type TEXT,
  subscription_status TEXT
) 
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT 
    p.id,
    p.first_name,
    p.last_name,
    p.phone,
    p.account_type,
    u.email,
    u.created_at,
    bd.business_name,
    bd.business_category,
    bd.team_members,
    id.service_category,
    s.plan_type,
    s.status as subscription_status
  FROM profiles p
  LEFT JOIN auth.users u ON p.id = u.id
  LEFT JOIN business_details bd ON p.id = bd.profile_id
  LEFT JOIN individual_details id ON p.id = id.profile_id
  LEFT JOIN subscriptions s ON p.id = s.profile_id
  WHERE p.id = user_id;
$$;

-- =============================================================================
-- COMENTARIOS PARA DOCUMENTACIÓN
-- =============================================================================
COMMENT ON TABLE profiles IS 'Tabla principal de perfiles de usuario conectada con auth.users';
COMMENT ON TABLE business_details IS 'Detalles específicos para cuentas de tipo business';
COMMENT ON TABLE individual_details IS 'Detalles específicos para cuentas individual (free y pro)';
COMMENT ON TABLE addresses IS 'Direcciones de usuarios (business e individual)';
COMMENT ON TABLE subscriptions IS 'Información de suscripciones y planes de usuario';

COMMENT ON COLUMN profiles.account_type IS 'Tipo de cuenta: client, individual-free, individual-pro, business';
COMMENT ON COLUMN addresses.address_type IS 'Tipo de dirección: primary, billing, shipping';
COMMENT ON COLUMN subscriptions.plan_type IS 'Tipo de plan: free, pro, business';
COMMENT ON COLUMN subscriptions.status IS 'Estado de suscripción: active, cancelled, expired';
