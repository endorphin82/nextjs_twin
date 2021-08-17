import tw, {styled} from "twin.macro";
// import styled from "@emotion/styled";

type ButtonProps = {
    variant?: "secondary" | "primary"
    isSmall?: boolean
}

export const Button = styled.button(({variant, isSmall}: ButtonProps) => [
    // The common button styles added with the tw import
    tw`px-8 py-2 rounded focus:outline-none transform duration-75`,

    // Use the variant grouping feature to add variants to multiple classes
    tw`hocus:(scale-105 text-yellow-400)`,

    // Use props to conditionally style your components
    variant === 'primary' && tw`bg-black text-white border-black`,

    // Combine regular css with tailwind classes within backticks
    variant === 'secondary' && [
        tw`border-2 border-yellow-600`,
    ],

    // Conditional props can be used
    isSmall ? tw`text-sm` : tw`text-lg`,

    // The theme import can supply values from your tailwind.config.js

])
