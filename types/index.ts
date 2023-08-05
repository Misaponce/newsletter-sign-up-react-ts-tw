import { MouseEventHandler } from "react";

export interface CardProps {
    card_Title: string;
    card_Text: string;
    card_List?: string[];
    onSubmit?: MouseEventHandler<HTMLFormElement>;
    email?: string;
    // This is a generic type provided by React. It represents a function that can be used to update the state of a React component.
    setEmail?: React.Dispatch<React.SetStateAction<string>>;
}