
// Create labels for TextFields of upload image form
export const Label = ({ error, className, children, ...props }) => {
    return (
        <label className="label" {...props}>
        {children}
        </label>
    );
};