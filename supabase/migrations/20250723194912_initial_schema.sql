CREATE TYPE subscriptionStatus AS ENUM ('active', 'deactive');
CREATE TYPE subscriptionCatalogStatus AS ENUM ('active', 'deactive');
CREATE TYPE appointmentStatus AS ENUM ('pending', 'confirmed', 'declined');
CREATE TYPE serviceStatus AS ENUM ('active', 'deactive');



-- Profiles Table
CREATE TABLE profiles (
    id INT PRIMARY KEY,
    user_id INT NOT NULL UNIQUE
);

-- SubscriptionCatalog Table
CREATE TABLE subscriptionCatalog (
    id INT PRIMARY KEY,
    status subscriptionCatalogStatus NOT NULL DEFAULT 'deactive',
    name VARCHAR(255) NOT NULL,
    price FLOAT
);

-- Subscriptions Table
CREATE TABLE subscriptions (
    id INT PRIMARY KEY,
    profile_id INT NOT NULL,
    catalog_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    status subscriptionStatus NOT NULL DEFAULT 'deactive',
    FOREIGN KEY (profile_id) REFERENCES profiles(id),
    FOREIGN KEY (catalog_id) REFERENCES subscriptionCatalog(id)
);

-- Services Table
CREATE TABLE services (
    id INT PRIMARY KEY,
    profile_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    price FLOAT NOT NULL,
    duration_in_minutes INT NOT NULL,
    status serviceStatus NOT NULL DEFAULT 'deactive',
    FOREIGN KEY (profile_id) REFERENCES profiles(id)
);

-- Appointments Table
CREATE TABLE appointments (
    id INT PRIMARY KEY,
    service_id INT NOT NULL,
    client_id INT NOT NULL,
    date DATE NOT NULL,
    status appointmentStatus NOT NULL DEFAULT 'pending',
    FOREIGN KEY (service_id) REFERENCES services(id),
    FOREIGN KEY (client_id) REFERENCES profiles(id)
);

-- Schedules Table
CREATE TABLE schedules (
    order_id INT PRIMARY KEY,
    profile_id INT NOT NULL,
    work_on_monday BOOLEAN NOT NULL,
    work_on_tuesday BOOLEAN NOT NULL,
    work_on_wednesday BOOLEAN NOT NULL,
    work_on_thursday BOOLEAN NOT NULL,
    work_on_friday BOOLEAN NOT NULL,
    work_on_saturday BOOLEAN NOT NULL,
    work_on_sunday BOOLEAN NOT NULL,
    work_on_holidays BOOLEAN NOT NULL,
    FOREIGN KEY (profile_id) REFERENCES profiles(id)
);
