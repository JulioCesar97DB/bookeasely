"use client"

import { Control, FieldPath, FieldValues } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"
import { ReactNode, useState } from "react"

type FieldType = "input" | "email" | "password" | "number" | "select" | "checkbox"

interface BaseFormFieldProps<TFieldValues extends FieldValues = FieldValues> {
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
  label: string
  placeholder?: string
  type: FieldType
  className?: string
  required?: boolean
}

interface InputFormFieldProps<TFieldValues extends FieldValues = FieldValues> 
  extends BaseFormFieldProps<TFieldValues> {
  type: "input" | "email"
}

interface PasswordFormFieldProps<TFieldValues extends FieldValues = FieldValues> 
  extends BaseFormFieldProps<TFieldValues> {
  type: "password"
}

interface NumberFormFieldProps<TFieldValues extends FieldValues = FieldValues> 
  extends BaseFormFieldProps<TFieldValues> {
  type: "number"
  min?: string
  max?: string
}

interface SelectFormFieldProps<TFieldValues extends FieldValues = FieldValues> 
  extends BaseFormFieldProps<TFieldValues> {
  type: "select"
  options: string[]
}

interface CheckboxFormFieldProps<TFieldValues extends FieldValues = FieldValues> 
  extends BaseFormFieldProps<TFieldValues> {
  type: "checkbox"
  children?: ReactNode
}

type ReusableFormFieldProps<TFieldValues extends FieldValues = FieldValues> = 
  | InputFormFieldProps<TFieldValues>
  | PasswordFormFieldProps<TFieldValues> 
  | NumberFormFieldProps<TFieldValues>
  | SelectFormFieldProps<TFieldValues>
  | CheckboxFormFieldProps<TFieldValues>

export function ReusableFormField<TFieldValues extends FieldValues = FieldValues>(
  props: ReusableFormFieldProps<TFieldValues>
) {
  const [showPassword, setShowPassword] = useState(false)
  const { control, name, label, placeholder, type, className = "", required = false } = props

  const renderField = (field: FieldValues): ReactNode => {
    switch (type) {
      case "input":
        return (
          <Input 
            placeholder={placeholder}
            className={`h-12 ${className}`}
            {...field}
          />
        )

      case "email":
        return (
          <Input 
            type="email"
            placeholder={placeholder}
            className={`h-12 ${className}`}
            {...field}
          />
        )

      case "password":
        return (
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              className={`h-12 pr-12 ${className}`}
              {...field}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-12 px-3 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          </div>
        )

      case "number":
        const numberProps = props as NumberFormFieldProps<TFieldValues>
        return (
          <Input
            type="number"
            placeholder={placeholder}
            min={numberProps.min}
            max={numberProps.max}
            className={`h-12 ${className}`}
            {...field}
          />
        )

      case "select":
        const selectProps = props as SelectFormFieldProps<TFieldValues>
        return (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className={`h-12 ${className}`}>
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
        )

      default:
        return (
          <Input 
            placeholder={placeholder}
            className={`h-12 ${className}`}
            {...field}
          />
        )
    }
  }

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
                {(props as CheckboxFormFieldProps<TFieldValues>).children || label}
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    )
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
          <FormControl>
            {renderField(field)}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
