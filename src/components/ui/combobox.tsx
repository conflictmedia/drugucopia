'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ComboboxOption {
  value: string
  label: string
  keywords?: string[]
}

interface ComboboxProps {
  options: ComboboxOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  emptyText?: string
  disabled?: boolean
  allowCustom?: boolean
  className?: string
}

export function Combobox({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  emptyText = 'No results found.',
  disabled = false,
  allowCustom = true,
  className,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')
  const containerRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const filteredOptions = options.filter((option) => {
    const searchLower = search.toLowerCase()
    if (option.label.toLowerCase().includes(searchLower)) return true
    if (option.keywords?.some(keyword => keyword.toLowerCase().includes(searchLower))) return true
    return false
  })

  const displayValue = value
    ? options.find((option) => option.value === value)?.label || value
    : ''

  // Close dropdown on outside click
  React.useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
        setSearch('')
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      {/* Trigger button */}
      <button
        type="button"
        role="combobox"
        aria-expanded={open}
        disabled={disabled}
        onClick={() => {
          setOpen(!open)
          setTimeout(() => inputRef.current?.focus(), 0)
        }}
        className={cn(
          'btn btn-outline w-full justify-between font-normal h-10',
          !value && 'text-neutral-content'
        )}
      >
        <span className="truncate">{displayValue || placeholder}</span>
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-1 w-full rounded-md border border-base-300 bg-base-100 shadow-md">
          {/* Search input */}
          <div className="p-2 border-b border-base-300">
            <input
              ref={inputRef}
              type="text"
              placeholder="Type to search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input input-bordered input-sm w-full"
            />
          </div>

          {/* Options list */}
          <div className="max-h-60 overflow-y-auto p-1">
            {filteredOptions.length === 0 ? (
              allowCustom && search ? (
                <button
                  type="button"
                  className="btn btn-ghost btn-sm w-full justify-start"
                  onClick={() => {
                    onChange(search)
                    setOpen(false)
                    setSearch('')
                  }}
                >
                  Use &quot;{search}&quot;
                </button>
              ) : (
                <div className="py-6 text-center text-sm text-neutral-content">
                  {emptyText}
                </div>
              )
            ) : (
              filteredOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(value === option.value ? '' : option.value)
                    setOpen(false)
                    setSearch('')
                  }}
                  className={cn(
                    'flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm cursor-pointer hover:bg-base-200 hover:text-base-content transition-colors',
                    value === option.value && 'bg-primary/10'
                  )}
                >
                  <Check
                    className={cn(
                      'h-4 w-4 shrink-0',
                      value === option.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {option.label}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
