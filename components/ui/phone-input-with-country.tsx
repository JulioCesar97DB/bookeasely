"use client";

import React, { forwardRef, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CountryCode,
  getCountryCallingCode,
  getCountries,
} from "libphonenumber-js";
import { cn } from "@/lib/utils";

const getAllCountries = (): {
  code: CountryCode;
  name: string;
  callingCode: string;
}[] => {
  const countries = getCountries();

  const countryNames: Record<string, string> = {
    AD: "Andorra",
    AE: "Emiratos Árabes Unidos",
    AF: "Afganistán",
    AG: "Antigua y Barbuda",
    AI: "Anguila",
    AL: "Albania",
    AM: "Armenia",
    AO: "Angola",
    AR: "Argentina",
    AS: "Samoa Americana",
    AT: "Austria",
    AU: "Australia",
    AW: "Aruba",
    AZ: "Azerbaiyán",
    BA: "Bosnia y Herzegovina",
    BB: "Barbados",
    BD: "Bangladesh",
    BE: "Bélgica",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BH: "Baréin",
    BI: "Burundi",
    BJ: "Benín",
    BM: "Bermudas",
    BN: "Brunéi",
    BO: "Bolivia",
    BR: "Brasil",
    BS: "Bahamas",
    BT: "Bután",
    BW: "Botsuana",
    BY: "Bielorrusia",
    BZ: "Belice",
    CA: "Canadá",
    CC: "Islas Cocos",
    CD: "República Democrática del Congo",
    CF: "República Centroafricana",
    CG: "República del Congo",
    CH: "Suiza",
    CI: "Costa de Marfil",
    CK: "Islas Cook",
    CL: "Chile",
    CM: "Camerún",
    CN: "China",
    CO: "Colombia",
    CR: "Costa Rica",
    CU: "Cuba",
    CV: "Cabo Verde",
    CW: "Curazao",
    CX: "Isla de Navidad",
    CY: "Chipre",
    CZ: "República Checa",
    DE: "Alemania",
    DJ: "Yibuti",
    DK: "Dinamarca",
    DM: "Dominica",
    DO: "República Dominicana",
    DZ: "Argelia",
    EC: "Ecuador",
    EE: "Estonia",
    EG: "Egipto",
    ER: "Eritrea",
    ES: "España",
    ET: "Etiopía",
    FI: "Finlandia",
    FJ: "Fiyi",
    FK: "Islas Malvinas",
    FM: "Micronesia",
    FO: "Islas Feroe",
    FR: "Francia",
    GA: "Gabón",
    GB: "Reino Unido",
    GD: "Granada",
    GE: "Georgia",
    GF: "Guayana Francesa",
    GG: "Guernsey",
    GH: "Ghana",
    GI: "Gibraltar",
    GL: "Groenlandia",
    GM: "Gambia",
    GN: "Guinea",
    GP: "Guadalupe",
    GQ: "Guinea Ecuatorial",
    GR: "Grecia",
    GS: "Georgia del Sur",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinea-Bisáu",
    GY: "Guyana",
    HK: "Hong Kong",
    HN: "Honduras",
    HR: "Croacia",
    HT: "Haití",
    HU: "Hungría",
    ID: "Indonesia",
    IE: "Irlanda",
    IL: "Israel",
    IM: "Isla de Man",
    IN: "India",
    IO: "Territorio Británico del Océano Índico",
    IQ: "Irak",
    IR: "Irán",
    IS: "Islandia",
    IT: "Italia",
    JE: "Jersey",
    JM: "Jamaica",
    JO: "Jordania",
    JP: "Japón",
    KE: "Kenia",
    KG: "Kirguistán",
    KH: "Camboya",
    KI: "Kiribati",
    KM: "Comoras",
    KN: "San Cristóbal y Nieves",
    KP: "Corea del Norte",
    KR: "Corea del Sur",
    KW: "Kuwait",
    KY: "Islas Caimán",
    KZ: "Kazajistán",
    LA: "Laos",
    LB: "Líbano",
    LC: "Santa Lucía",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Liberia",
    LS: "Lesoto",
    LT: "Lituania",
    LU: "Luxemburgo",
    LV: "Letonia",
    LY: "Libia",
    MA: "Marruecos",
    MC: "Mónaco",
    MD: "Moldavia",
    ME: "Montenegro",
    MF: "San Martín",
    MG: "Madagascar",
    MH: "Islas Marshall",
    MK: "Macedonia del Norte",
    ML: "Malí",
    MM: "Myanmar",
    MN: "Mongolia",
    MO: "Macao",
    MP: "Islas Marianas del Norte",
    MQ: "Martinica",
    MR: "Mauritania",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mauricio",
    MV: "Maldivas",
    MW: "Malaui",
    MX: "México",
    MY: "Malasia",
    MZ: "Mozambique",
    NA: "Namibia",
    NC: "Nueva Caledonia",
    NE: "Níger",
    NF: "Isla Norfolk",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Países Bajos",
    NO: "Noruega",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "Nueva Zelanda",
    OM: "Omán",
    PA: "Panamá",
    PE: "Perú",
    PF: "Polinesia Francesa",
    PG: "Papúa Nueva Guinea",
    PH: "Filipinas",
    PK: "Pakistán",
    PL: "Polonia",
    PM: "San Pedro y Miquelón",
    PN: "Islas Pitcairn",
    PR: "Puerto Rico",
    PS: "Palestina",
    PT: "Portugal",
    PW: "Palaos",
    PY: "Paraguay",
    QA: "Catar",
    RE: "Reunión",
    RO: "Rumania",
    RS: "Serbia",
    RU: "Rusia",
    RW: "Ruanda",
    SA: "Arabia Saudí",
    SB: "Islas Salomón",
    SC: "Seychelles",
    SD: "Sudán",
    SE: "Suecia",
    SG: "Singapur",
    SH: "Santa Elena",
    SI: "Eslovenia",
    SJ: "Svalbard y Jan Mayen",
    SK: "Eslovaquia",
    SL: "Sierra Leona",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalia",
    SR: "Surinam",
    SS: "Sudán del Sur",
    ST: "Santo Tomé y Príncipe",
    SV: "El Salvador",
    SX: "Sint Maarten",
    SY: "Siria",
    SZ: "Esuatini",
    TC: "Islas Turcas y Caicos",
    TD: "Chad",
    TF: "Territorios Australes Franceses",
    TG: "Togo",
    TH: "Tailandia",
    TJ: "Tayikistán",
    TK: "Tokelau",
    TL: "Timor Oriental",
    TM: "Turkmenistán",
    TN: "Túnez",
    TO: "Tonga",
    TR: "Turquía",
    TT: "Trinidad y Tobago",
    TV: "Tuvalu",
    TW: "Taiwán",
    TZ: "Tanzania",
    UA: "Ucrania",
    UG: "Uganda",
    UM: "Islas Ultramarinas de Estados Unidos",
    US: "Estados Unidos",
    UY: "Uruguay",
    UZ: "Uzbekistán",
    VA: "Ciudad del Vaticano",
    VC: "San Vicente y las Granadinas",
    VE: "Venezuela",
    VG: "Islas Vírgenes Británicas",
    VI: "Islas Vírgenes de Estados Unidos",
    VN: "Vietnam",
    VU: "Vanuatu",
    WF: "Wallis y Futuna",
    WS: "Samoa",
    YE: "Yemen",
    YT: "Mayotte",
    ZA: "Sudáfrica",
    ZM: "Zambia",
    ZW: "Zimbabue",
  };

  return countries
    .map((code) => ({
      code,
      name: countryNames[code] || code,
      callingCode: `+${getCountryCallingCode(code)}`,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
};

export interface PhoneInputWithCountryProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value"
  > {
  value?: string;
  onChange?: (value: string) => void;
  defaultCountry?: CountryCode;
}

const PhoneInputWithCountry = forwardRef<
  HTMLInputElement,
  PhoneInputWithCountryProps
>(
  (
    { className, value = "", onChange, defaultCountry = "ES", ...props },
    ref
  ) => {
    const [selectedCountry, setSelectedCountry] =
      useState<CountryCode>(defaultCountry);

    const extractPhoneNumber = (
      fullValue: string,
      countryCode: CountryCode
    ): string => {
      try {
        const callingCode = `+${getCountryCallingCode(countryCode)}`;
        if (fullValue && fullValue.startsWith(callingCode)) {
          return fullValue.substring(callingCode.length);
        }
      } catch {}
      return fullValue;
    };

    const [phoneInput, setPhoneInput] = useState(
      extractPhoneNumber(value, selectedCountry)
    );

    React.useEffect(() => {
      setPhoneInput(extractPhoneNumber(value, selectedCountry));
    }, [value, selectedCountry]);

    const allCountries = getAllCountries();

    const getCallingCode = (countryCode: CountryCode) => {
      try {
        return `+${getCountryCallingCode(countryCode)}`;
      } catch {
        return "";
      }
    };

    const handleCountryChange = (countryCode: CountryCode) => {
      setSelectedCountry(countryCode);
      const callingCode = getCallingCode(countryCode);
      onChange?.(`${callingCode}${phoneInput}`);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const cleanedValue = inputValue.replace(/[^\d\s\-\+\(\)]/g, "");
      setPhoneInput(cleanedValue);
      const callingCode = getCallingCode(selectedCountry);
      onChange?.(`${callingCode}${cleanedValue}`);
    };

    return (
      <div className="flex">
        <Select value={selectedCountry} onValueChange={handleCountryChange}>
          <SelectTrigger className="w-[90px] rounded-r-none border-r-0">
            <SelectValue>
              <div className="flex items-center space-x-1">
                <span className="text-xs font-medium">{selectedCountry}</span>
                <span className="text-xs text-muted-foreground">
                  {getCallingCode(selectedCountry)}
                </span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="max-h-[200px]">
            {allCountries.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-medium w-6">
                      {country.code}
                    </span>
                    <span className="text-sm">{country.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">
                    {country.callingCode}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          ref={ref}
          type="tel"
          value={phoneInput}
          onChange={handlePhoneChange}
          className={cn("rounded-l-none flex-1 h-10", className)}
          {...props}
        />
      </div>
    );
  }
);

PhoneInputWithCountry.displayName = "PhoneInputWithCountry";

export { PhoneInputWithCountry };
