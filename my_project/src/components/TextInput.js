import classnames from "classnames";
import { Label } from "../components/Label"
import { InputFeedback } from "../components/InputFeedback";

export const TextInput = ({
    type,
    id,
    label,
    error,
    value,
    onChange,
    className,
    ...props
    }) => {
    const classes = classnames(
        "input-group",
        { "animated shake error": !!error },
        className
    );

    return (
        <div className={classes}>
        <Label htmlFor={id} error={error}>
            {label}
        </Label>
        <input
            id={id}
            className="text-input"
            type={type}
            value={value}
            onChange={onChange}
            {...props}
        />
        <InputFeedback error={error} />
        </div>
    );
}