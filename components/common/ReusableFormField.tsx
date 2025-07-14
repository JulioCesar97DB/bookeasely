"use client";

import { Control, FieldPath, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInputWithCountry } from "@/components/ui/phone-input-with-country";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Phone,
  User,
  MapPin,
  Globe,
  Hash,
} from "lucide-react";
import { ReactNode, useState } from "react";

type FieldType =
  | "input"
  | "email"
  | "password"
  | "phone"
  | "number"
  | "select"
  | "checkbox"
  | "address"
  | "country"
  | "state-province"
  | "postal-code";

interface BaseFormFieldProps<TFieldValues extends FieldValues = FieldValues> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: string;
  placeholder?: string;
  type: FieldType;
  className?: string;
  required?: boolean;
}

interface InputFormFieldProps<TFieldValues extends FieldValues = FieldValues>
  extends BaseFormFieldProps<TFieldValues> {
  type: "input" | "email" | "phone" | "address" | "postal-code";
}

interface PasswordFormFieldProps<TFieldValues extends FieldValues = FieldValues>
  extends BaseFormFieldProps<TFieldValues> {
  type: "password";
}

interface NumberFormFieldProps<TFieldValues extends FieldValues = FieldValues>
  extends BaseFormFieldProps<TFieldValues> {
  type: "number";
  min?: string;
  max?: string;
}

interface SelectFormFieldProps<TFieldValues extends FieldValues = FieldValues>
  extends BaseFormFieldProps<TFieldValues> {
  type: "select";
  options: string[];
}

interface CountryFormFieldProps<TFieldValues extends FieldValues = FieldValues>
  extends BaseFormFieldProps<TFieldValues> {
  type: "country";
  options: string[];
}

interface StateProvinceFormFieldProps<
  TFieldValues extends FieldValues = FieldValues
> extends BaseFormFieldProps<TFieldValues> {
  type: "state-province";
  options: string[];
}

interface CheckboxFormFieldProps<TFieldValues extends FieldValues = FieldValues>
  extends BaseFormFieldProps<TFieldValues> {
  type: "checkbox";
  children?: ReactNode;
}
type ReusableFormFieldProps<TFieldValues extends FieldValues = FieldValues> =
  | InputFormFieldProps<TFieldValues>
  | PasswordFormFieldProps<TFieldValues>
  | NumberFormFieldProps<TFieldValues>
  | SelectFormFieldProps<TFieldValues>
  | CountryFormFieldProps<TFieldValues>
  | StateProvinceFormFieldProps<TFieldValues>
  | CheckboxFormFieldProps<TFieldValues>;

export function ReusableFormField<
  TFieldValues extends FieldValues = FieldValues
>(props: ReusableFormFieldProps<TFieldValues>) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    name,
    label,
    placeholder,
    type,
    className = "",
    required = false,
  } = props;

  const getIcon = () => {
    switch (type) {
      case "email":
        return <Mail className="h-4 w-4 text-muted-foreground" />;
      case "password":
        return <Lock className="h-4 w-4 text-muted-foreground" />;
      case "phone":
        return <Phone className="h-4 w-4 text-muted-foreground" />;
      case "input":
        return <User className="h-4 w-4 text-muted-foreground" />;
      case "address":
        return <MapPin className="h-4 w-4 text-muted-foreground" />;
      case "country":
        return <Globe className="h-4 w-4 text-muted-foreground" />;
      case "state-province":
        return <MapPin className="h-4 w-4 text-muted-foreground" />;
      case "postal-code":
        return <Hash className="h-4 w-4 text-muted-foreground" />;
      default:
        return null;
    }
  };

  const renderField = (field: FieldValues): ReactNode => {
    const hasIcon = [
      "input",
      "email",
      "password",
      "phone",
      "address",
      "postal-code",
    ].includes(type);
    const iconClasses = hasIcon ? "pl-10" : "";

    switch (type) {
      case "input":
        return (
          <div className="relative">
            {getIcon() && (
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 flex items-center justify-center">
                {getIcon()}
              </div>
            )}
            <Input
              placeholder={placeholder}
              className={`h-10 ${iconClasses} ${className}`}
              {...field}
            />
          </div>
        );

      case "email":
        return (
          <div className="relative">
            {getIcon() && (
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 flex items-center justify-center">
                {getIcon()}
              </div>
            )}
            <Input
              type="email"
              placeholder={placeholder}
              className={`h-10 ${iconClasses} ${className}`}
              {...field}
            />
          </div>
        );

      case "phone":
        return (
          <PhoneInputWithCountry
            placeholder={placeholder}
            className={`h-10 ${iconClasses} ${className}`}
            value={field.value}
            onChange={field.onChange}
          />
        );

      case "address":
        return (
          <div className="relative">
            {getIcon() && (
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 flex items-center justify-center">
                {getIcon()}
              </div>
            )}
            <Input
              placeholder={placeholder}
              className={`h-10 ${iconClasses} ${className}`}
              {...field}
            />
          </div>
        );

      case "postal-code":
        return (
          <div className="relative">
            {getIcon() && (
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 flex items-center justify-center">
                {getIcon()}
              </div>
            )}
            <Input
              placeholder={placeholder}
              className={`h-10 ${iconClasses} ${className}`}
              {...field}
            />
          </div>
        );

      case "country":
      case "state-province":
        const addressSelectProps = props as
          | CountryFormFieldProps<TFieldValues>
          | StateProvinceFormFieldProps<TFieldValues>;
        return (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className={`h-10 ${className}`}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {addressSelectProps.options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "password":
        return (
          <div className="relative">
            {getIcon() && (
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 flex items-center justify-center">
                {getIcon()}
              </div>
            )}
            <Input
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              className={`h-10 ${iconClasses} pr-12 ${className}`}
              {...field}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          </div>
        );

      case "number":
        const numberProps = props as NumberFormFieldProps<TFieldValues>;
        return (
          <Input
            type="number"
            placeholder={placeholder}
            min={numberProps.min}
            max={numberProps.max}
            className={`h-10 ${className}`}
            {...field}
          />
        );

      case "select":
        const selectProps = props as SelectFormFieldProps<TFieldValues>;
        return (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className={`h-10 ${className}`}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {selectProps.options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      default:
        return (
          <Input
            placeholder={placeholder}
            className={`h-10 ${className}`}
            {...field}
          />
        );
    }
  };

  if (type === "checkbox") {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className="mt-1"
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="text-base font-normal">
                {(props as CheckboxFormFieldProps<TFieldValues>).children ||
                  label}
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    );
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base font-medium">
            {label}
            {!required && !label.includes("Optional") && " (Optional)"}
          </FormLabel>
          <FormControl>{renderField(field)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
