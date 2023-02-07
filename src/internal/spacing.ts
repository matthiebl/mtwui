import { classNames } from './class-compiler'

export type SpacingSize = 'n' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

export type SpacingProps = {
    t?: SpacingSize
    b?: SpacingSize
    l?: SpacingSize
    r?: SpacingSize
    x?: SpacingSize
    y?: SpacingSize
    all?: SpacingSize
}

export const paddingSpacingToStyle = (spacing: SpacingProps): string => {
    return classNames(
        spacing.t ? ptSpacingToStyle[spacing.t] : '',
        spacing.b ? pbSpacingToStyle[spacing.b] : '',
        spacing.l ? plSpacingToStyle[spacing.l] : '',
        spacing.r ? prSpacingToStyle[spacing.r] : '',
        spacing.x ? pxSpacingToStyle[spacing.x] : '',
        spacing.y ? pySpacingToStyle[spacing.y] : '',
        spacing.all ? pSpacingToStyle[spacing.all] : '',
    )
}

export const marginSpacingToStyle = (spacing: SpacingProps): string => {
    return classNames(
        spacing.t ? mtSpacingToStyle[spacing.t] : '',
        spacing.b ? mbSpacingToStyle[spacing.b] : '',
        spacing.l ? mlSpacingToStyle[spacing.l] : '',
        spacing.r ? mrSpacingToStyle[spacing.r] : '',
        spacing.x ? mxSpacingToStyle[spacing.x] : '',
        spacing.y ? mySpacingToStyle[spacing.y] : '',
        spacing.all ? mSpacingToStyle[spacing.all] : '',
    )
}

const ptSpacingToStyle: Record<SpacingSize, string> = {
    n: 'pt-0',
    xs: 'pt-1',
    sm: 'pt-2',
    md: 'pt-3',
    lg: 'pt-4',
    xl: 'pt-5',
    '2xl': 'pt-6',
    '3xl': 'pt-10',
}

const pbSpacingToStyle: Record<SpacingSize, string> = {
    n: 'pb-0',
    xs: 'pb-1',
    sm: 'pb-2',
    md: 'pb-3',
    lg: 'pb-4',
    xl: 'pb-5',
    '2xl': 'pb-6',
    '3xl': 'pb-10',
}

const plSpacingToStyle: Record<SpacingSize, string> = {
    n: 'pl-0',
    xs: 'pl-1',
    sm: 'pl-2',
    md: 'pl-3',
    lg: 'pl-4',
    xl: 'pl-5',
    '2xl': 'pl-6',
    '3xl': 'pl-10',
}

const prSpacingToStyle: Record<SpacingSize, string> = {
    n: 'pr-0',
    xs: 'pr-1',
    sm: 'pr-2',
    md: 'pr-3',
    lg: 'pr-4',
    xl: 'pr-5',
    '2xl': 'pr-6',
    '3xl': 'pr-10',
}

const pxSpacingToStyle: Record<SpacingSize, string> = {
    n: 'px-0',
    xs: 'px-1',
    sm: 'px-2',
    md: 'px-3',
    lg: 'px-4',
    xl: 'px-5',
    '2xl': 'px-6',
    '3xl': 'px-10',
}

const pySpacingToStyle: Record<SpacingSize, string> = {
    n: 'py-0',
    xs: 'py-1',
    sm: 'py-2',
    md: 'py-3',
    lg: 'py-4',
    xl: 'py-5',
    '2xl': 'py-6',
    '3xl': 'py-10',
}

const pSpacingToStyle: Record<SpacingSize, string> = {
    n: 'p-0',
    xs: 'p-1',
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4',
    xl: 'p-5',
    '2xl': 'p-6',
    '3xl': 'p-10',
}

const mtSpacingToStyle: Record<SpacingSize, string> = {
    n: 'mt-0',
    xs: 'mt-1',
    sm: 'mt-2',
    md: 'mt-3',
    lg: 'mt-4',
    xl: 'mt-5',
    '2xl': 'mt-6',
    '3xl': 'mt-10',
}

const mbSpacingToStyle: Record<SpacingSize, string> = {
    n: 'mb-0',
    xs: 'mb-1',
    sm: 'mb-2',
    md: 'mb-3',
    lg: 'mb-4',
    xl: 'mb-5',
    '2xl': 'mb-6',
    '3xl': 'mb-10',
}

const mlSpacingToStyle: Record<SpacingSize, string> = {
    n: 'ml-0',
    xs: 'ml-1',
    sm: 'ml-2',
    md: 'ml-3',
    lg: 'ml-4',
    xl: 'ml-5',
    '2xl': 'ml-6',
    '3xl': 'ml-10',
}

const mrSpacingToStyle: Record<SpacingSize, string> = {
    n: 'mr-0',
    xs: 'mr-1',
    sm: 'mr-2',
    md: 'mr-3',
    lg: 'mr-4',
    xl: 'mr-5',
    '2xl': 'mr-6',
    '3xl': 'mr-10',
}

const mxSpacingToStyle: Record<SpacingSize, string> = {
    n: 'mx-0',
    xs: 'mx-1',
    sm: 'mx-2',
    md: 'mx-3',
    lg: 'mx-4',
    xl: 'mx-5',
    '2xl': 'mx-6',
    '3xl': 'mx-10',
}

const mySpacingToStyle: Record<SpacingSize, string> = {
    n: 'my-0',
    xs: 'my-1',
    sm: 'my-2',
    md: 'my-3',
    lg: 'my-4',
    xl: 'my-5',
    '2xl': 'my-6',
    '3xl': 'my-10',
}

const mSpacingToStyle: Record<SpacingSize, string> = {
    n: 'm-0',
    xs: 'm-1',
    sm: 'm-2',
    md: 'm-3',
    lg: 'm-4',
    xl: 'm-5',
    '2xl': 'm-6',
    '3xl': 'm-10',
}
