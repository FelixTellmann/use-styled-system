# use-styled-system

A custom [React Hook](https://reactjs.org/docs/hooks-overview.html) to help you implement "styled system props" in combination with styled-jsx for your application.

## How it works

`use-styled-system` provides a custom hook to inject all common [styled-system](https://styled-system.com/) props into `<style jsx>` tags. Its especially made to work seamless within any NextJs environment. The hook is completely build with Typescript and provides excellent support for all CSS props, including proper scoping.

Currently `use-styled-system` uses Javascript and  `.matchMedia` media queries and global context for responsive css. The syntax is the same as with styled system. i.e. 
```JSX
<Box as='div' p={['20px 10px', 60]}>...</Box>
```
 translates into the following for matchMedia below the first breakpoint ie. 600px
 ```HTML
<div class="jsx-123">
...
</div>
<style>
    .jsx-123 {
        padding: 20px 10px
    }
</style>
```
and automatically changes to the below once the next media query is triggered.
 ```HTML
<div class="jsx-123">
...
</div>
<style>
    .jsx-123 {
        padding: 60px
    }
</style>
```

## Roadmap

In next versions the focus will be on adding support for Pseudo Selectors, CSS based Media Queries and autoprefix injection.

## Requirement

To use `use-styled-system`, you must use  `styled-jsx@3.0.0`  and `react@16.8.0` or greater which includes Hooks (both shipped with Nextjs).

## Installation

```sh
$ npm i use-styled-system
```

## Usage

The usage within a NextJs environment works out of the box. Any other environment needs [react](https://github.com/facebook/react) & [styled-jsx](https://github.com/vercel/styled-jsx) as a peer dependency. Refer to their docs for more information.

```tsx
/* import only the Types that you need */
import { FC } from 'react';
import { Decor, Layout, Space, useStyledSystem } from 'use-styled-system';

export const Box: FC<Space & Layout & Decor> = (props) => {
  
  const { styleJsx, nonCssProps } = useStyledSystem(props, { Space: true, Layout: true, Decor: true });
  
  return <>
      <div {...nonCssProps}>{props.children}</div>
      <style jsx>{`
        div {
          color: red;
          ${styleJsx}
        }
      `}</style>
  </>
}
```

`use-styled-system` returns an Abject with two items:
    1. `styleJSX` which is a string containing all CSS properties and values
    2. `nonCssProps` which is an Object with the previously added Props, filtered for any Css props.

### Parameters

You pass `useStyledSystem` the props (or rest of props, using the `...` spread operator) an optional `Config` object. The configuration object may contain the following keys.

| Key               | Description                                                                          | Type            | Default                                                                                       |
|:------------------|:-------------------------------------------------------------------------------------|:-------------------------| :-----------------------------------------------------------------------------------|
|`remBase`          | Sets the base size to use rem properties wherever possible (defaults to 10px)        | number          | 10                                                                                            |
|`fontSizes`        | Sets the fontsizes shortcuts for common sizes. i.e.`fontSize={3}` equals to `20px`   | (number)[]      | [12, 14, 16, 20, 24, 32, 48, 64, 72]                                                          |
|`spaceSizes`            | Sets the space shortcuts for common sizes. i.e.`marginBottom={3}` equals to `16px`   | (number)[]      | [0, 4, 8, 16, 32, 64, 128, 256, 512]                                                          |
|`Padding`          | Activates `Padding` properties to be used as Props                                   | boolean         | false                                                                                         |
|`Margin`           | Activates `Margin` properties to be used as Props                                    | boolean         | false                                                                                         |
|`Size`             | Activates `Size` properties to be used as Props                                      | boolean         | false                                                                                         |
|`Space`            | Shortcut to activate `Padding`, `Margin`, and `Size` properties as Props             | boolean         | false                                                                                         |
|`Position`          | Activates `Position` properties to be used as Props                                   | boolean         | false                                                                                         |
|`Flex`           | Activates `Flex` properties to be used as Props                                    | boolean         | false                                                                                         |
|`Grid`             | Activates `Grid` properties to be used as Props                                      | boolean         | false                                                                                         |
|`Layout`            | Shortcut to activate `Position`, `Flex`, and `Grid` properties as Props             | boolean         | false                                                                                         |
|`Border`          | Activates `Border` properties to be used as Props                                   | boolean         | false                                                                                         |
|`Color`           | Activates `Color` properties to be used as Props                                    | boolean         | false                                                                                         |
|`Typography`             | Activates `Typography` properties to be used as Props                                      | boolean         | false                                                                                         |
|`Decor`            | Shortcut to activate `Border`, `Color`, and `Typography` properties as Props             | boolean         | false                                                                                         |
|`Other`             | Activates `Other` properties to be used as Props                                      | boolean         | false                                                                                         |
|`All`             | Activates *all* of the above  properties to be used as Props. * **Defaults to true if no other property is selected**                                      | boolean         | false*                                                                                         | 

### Return object

A `useStyleSystem` object is returned with the following properties.

| Key         | Description                                             |
| :---------- | :------------------------------------------------------ |
| `styleJsx     | string of all css properties    |
| `nonCssProps`  | Props filtered for any non CSS prop  |

## Examples

Using `style-jsx/css` `.resolve` functionality to create custom elements.

```tsx
import { createElement, FC } from 'react';
import { CSS, useStyledSystem } from 'use-styled-system';
import { css } from 'styled-jsx/css';

type BoxProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'code' | 'blockquote' | 'a'
  className?: string
  onClick?: Function
}

export const Text: FC<BoxProps & CSS> = ({ as = 'p', children, className = '', ...props }) => {
  const { styleJsx, nonCssProps } = useStyledSystem(props, { Decor: true, Space: true, Other: true });
  const { className: cssClass, styles } = css.resolve`${styleJsx}`;
  return <>
    {createElement(as, { className: `${cssClass} ${className}`, ...nonCssProps }, children)}
    {styles}
  </>;
};

export default Text;
```

use with `styled-jsx-plugin-sass` in a Link Component.

```tsx
import { FC, MouseEvent } from 'react';
import NextLink from 'next/link';
import { Decor, Layout, Space, useStyledSystem } from 'use-styled-system';

type LinkProps = {
  onClick?: (event: MouseEvent) => void
  href: string
  title: string | JSX.Element
  target?: string
  className?: string
  secondary?: boolean
  small?: boolean
  large?: boolean
};

export const Link: FC<LinkProps & Space & Layout & Decor> = ({ onClick, className = '', href, target, title, secondary, small, large, children, ...props }) => {
  
  const { styleJsx, nonCssProps } = useStyledSystem(props, { Space: true, Layout: true, Decor: true });
  const classNames = `link ${secondary ? 'secondary' : ''} ${small ? 'small' : ''} ${large ? 'large' : ''} ${className}`.trim();
  return <>
    <NextLink href={href}>
      <a target={target} className={classNames} onClick={onClick} {...nonCssProps}>{title}</a>
    </NextLink>
    
    <style jsx>{`
      .link {
        cursor: pointer;
        color: var(--color-link);
        font-family: inherit;
        text-decoration: none;
        transition: color 0.25s, background-color 0.25s;

        &.small {
          font-size: 1.4rem;
        }

        &.large {
          font-size: 1.8rem;
        }
        
        &:hover {
          color: var(--color-link-hover)
        }

        ${styleJsx}
      }
    `}</style>
  </>;
};

export default Link;
```
## License

**[MIT](LICENSE)** Licensed