import {
  parsePhoneNumber,
  isValidPhoneNumber,
  CountryCode,
} from "libphonenumber-js";

export interface PhoneValidationResult {
  isValid: boolean;
  formattedPhone: string;
  error?: string;
}

export function validateAndFormatPhone(
  phone: string,
  defaultCountry: CountryCode = "ES"
): PhoneValidationResult {
  try {

    if (!phone || !phone.trim()) {
      return {
        isValid: false,
        formattedPhone: "",
        error: "Phone number is required",
      };
    }

    const cleanPhone = phone.trim();


    if (!isValidPhoneNumber(cleanPhone, defaultCountry)) {
      return {
        isValid: false,
        formattedPhone: cleanPhone,
        error: "Invalid phone number format",
      };
    }


    const phoneNumber = parsePhoneNumber(cleanPhone, defaultCountry);
    const formattedPhone = phoneNumber?.format("E.164") || cleanPhone;

    return {
      isValid: true,
      formattedPhone,
    };
  } catch {
    return {
      isValid: false,
      formattedPhone: phone,
      error: "Phone validation error",
    };
  }
}

export function isValidPhone(
  phone: string,
  defaultCountry: CountryCode = "ES"
): boolean {
  try {
    if (!phone || !phone.trim()) return false;
    return isValidPhoneNumber(phone.trim(), defaultCountry);
  } catch {
    return false;
  }
}

export function formatPhoneToE164(
  phone: string,
  defaultCountry: CountryCode = "ES"
): string {
  try {
    if (!phone || !phone.trim()) return "";

    const phoneNumber = parsePhoneNumber(phone.trim(), defaultCountry);
    return phoneNumber?.format("E.164") || phone;
  } catch {
    return phone;
  }
}

export function formatPhoneToNational(
  phone: string,
  defaultCountry: CountryCode = "ES"
): string {
  try {
    if (!phone || !phone.trim()) return "";

    const phoneNumber = parsePhoneNumber(phone.trim(), defaultCountry);
    return phoneNumber?.formatNational() || phone;
  } catch {
    return phone;
  }
}
