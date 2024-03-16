import { ReactNode } from 'react'
import { ButtonEvent } from '../base/events'

export type size = 'sm' | 'md' | 'lg'
export type variant = 'primary' | 'secondary' | 'text'
export type fullWidth = boolean
export type disabled = boolean
export type className = string
export type buttonProps = { [key: string]: any }
export type children = ReactNode
export type onClick = ButtonEvent
